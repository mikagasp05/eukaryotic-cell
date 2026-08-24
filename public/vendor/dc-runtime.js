/* dc-runtime — remplaçant vanilla de `support.js` (le runtime Claude Design).
   ---------------------------------------------------------------------------
   Les pages de cellules sont exportées depuis Claude Design sous forme d'un
   gabarit déclaratif + une classe de logique. Le runtime d'origine n'est pas
   distribuable (il attend React injecté par l'outil), d'où ce remplaçant : il
   couvre exactement les cinq formes que les gabarits utilisent, et rien de plus.

     <sc-if value="{{ bool }}">        rendu conditionnel
     <sc-for list="{{ arr }}" as="x">  répétition, `x` visible dans le sous-arbre
     ref="{{ monRef }}"                pose l'élément dans monRef.current
     onClick / onPointerDown="{{ f }}" écouteur d'évènement
     sc-camel-on-click="{{ f }}"       idem, autre convention d'export
     {{ chemin.pointe }}               interpolation, en texte comme en attribut

   Rendu : on reconstruit tout le sous-arbre à chaque `forceUpdate()`. C'est
   volontairement bête, et suffisant — `renderVals()` n'est appelé que sur action
   de l'utilisateur, jamais dans la boucle d'animation, qui écrit directement
   dans le DOM de son côté. Le canvas WebGL survit à ces reconstructions : la
   boucle le ré-attache quand elle voit que son hôte a changé (`parentNode !== host`),
   ce qui est déjà le comportement qu'il avait sous React.                      */
(function (global) {
  'use strict';

  const ref = () => ({ current: null });

  // Les gabarits portent des icônes SVG (l'œil des cartes d'organites). Un
  // `createElement('svg')` fabrique un élément HTML inconnu, invisible : tout ce
  // sous-arbre doit naître dans l'espace de noms SVG.
  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* --- lecture d'un chemin pointé dans le scope courant ------------------ */
  function lookup(scope, path) {
    const parts = path.split('.');
    let v = scope;
    for (let i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }

  // Un attribut qui n'est QUE {{ x }} rend la valeur brute (fonction, objet,
  // booléen) ; mélangé à du texte, il rend une chaîne. C'est ce qui permet à
  // `style="...;background:{{ card.dot }}"` et à `onClick="{{ f }}"` de cohabiter.
  const SOLE = /^\{\{\s*([^{}]+?)\s*\}\}$/;
  const ANY = /\{\{\s*([^{}]+?)\s*\}\}/g;

  const interpolate = (text, scope) =>
    text.replace(ANY, (_, p) => {
      const v = lookup(scope, p.trim());
      return v == null ? '' : String(v);
    });

  function evaluate(text, scope) {
    const m = SOLE.exec(text);
    return m ? lookup(scope, m[1].trim()) : interpolate(text, scope);
  }

  /* --- évènements -------------------------------------------------------- */
  // Le parseur HTML abaisse la casse des noms d'attributs : `onClick` nous
  // parvient en `onclick`. Il faut donc les intercepter par leur nom minuscule,
  // sinon on poserait un attribut `onclick` natif valant « [object Function] ».
  const EVENTS = {
    onclick: 'click', onpointerdown: 'pointerdown', onpointerup: 'pointerup',
    onpointermove: 'pointermove', oninput: 'input', onchange: 'change'
  };

  /* --- mise a jour en place -------------------------------------------------
     On NE reconstruit PAS le sous-arbre a chaque rendu : on le parcourt en parallele
     du gabarit et on ne touche que ce qui a change. C'est indispensable, pas une
     optimisation — `sync()` est appele a chaque mouvement de souris pendant un
     glissement, et remplacer le DOM detacherait l'element qu'on est en train de
     tirer (sa position devient alors nulle) tout en faisant clignoter l'ecran.   */
  function applyAttrs(el, tpl, scope) {
    const bound = el.__dcEv || (el.__dcEv = {});
    const attrs = tpl.attributes;
    for (let i = 0; i < attrs.length; i++) {
      const name = attrs[i].name, raw = attrs[i].value;
      if (name.indexOf('hint-') === 0) continue;
      if (name === 'ref') {
        const r = evaluate(raw, scope);
        if (r && typeof r === 'object') r.current = el;
        continue;
      }
      const ev = EVENTS[name] || (name.indexOf('sc-camel-on-') === 0 ? name.slice(12).replace(/-/g, '') : null);
      if (ev) {
        // Les fermetures sont recreees a chaque rendu : on remplace l'ecouteur
        // seulement s'il a reellement change d'identite.
        const fn = evaluate(raw, scope);
        if (bound[ev] !== fn) {
          if (bound[ev]) el.removeEventListener(ev, bound[ev]);
          if (typeof fn === 'function') { el.addEventListener(ev, fn); bound[ev] = fn; }
          else delete bound[ev];
        }
        continue;
      }
      const v = evaluate(raw, scope);
      if (name === 'value') { const nv = v == null ? '' : v; if (el.value !== nv) el.value = nv; continue; }
      const sv = v == null ? '' : String(v);
      /* On compare a ce que le RUNTIME a ecrit la derniere fois, pas a l'etat du DOM.
         La boucle de rendu pose `left`/`top` sur les fiches ; relire l'attribut `style`
         le trouvait donc toujours different du gabarit, et chaque sync() le reecrivait
         par-dessus — la fiche repartait a `left:0;top:0`, c'est-a-dire dans le coin
         haut-gauche, des qu'on touchait un reglage ou qu'on ouvrait une autre fiche.
         Avec cette memoire, un gabarit inchange ne touche plus a rien et les positions
         posees a la main survivent au rendu. */
      const wrote = el.__dcAttr || (el.__dcAttr = {});
      if (wrote[name] !== sv) { el.setAttribute(name, sv); wrote[name] = sv; }
    }
  }

  /* Reconciliation PAR CLE, pas par position.
     Chaque noeud du gabarit recoit un identifiant stable ; la cle d'un noeud rendu
     combine cet identifiant et le chemin des boucles qui l'englobent. On retrouve
     ainsi le meme noeud DOM d'un rendu a l'autre, meme si une liste au milieu de la
     fratrie grandit ou retrecit.
     La version par index etait fausse : quand la liste des fiches passait de 1 a 0,
     les freres suivants remontaient d'un cran — un <div> en valant un autre — et la
     purge par la fin supprimait le dernier element au lieu de la fiche.           */
  let tplSeq = 0, pass = 0;
  const tplId = (n) => n.__dcId || (n.__dcId = ++tplSeq);

  function place(parent, cur, key, make) {
    let at = parent.childNodes[cur.i];
    if (at && at.__dcKey === key) { at.__dcSeen = pass; cur.i++; return at; }
    // le noeud existe peut-etre plus loin (une entree a ete inseree avant lui)
    let found = null;
    for (let j = cur.i + 1; j < parent.childNodes.length; j++) {
      if (parent.childNodes[j].__dcKey === key) { found = parent.childNodes[j]; break; }
    }
    if (!found) { found = make(); found.__dcKey = key; }
    parent.insertBefore(found, at || null);
    found.__dcSeen = pass;
    cur.i++;
    return found;
  }

  // On ne purge QUE les noeuds que le runtime a lui-meme crees (ceux qui portent une
  // cle). Les autres appartiennent a la page : le canvas WebGL, notamment, est injecte
  // par la boucle de rendu dans son hote, qui est vide dans le gabarit. Le retirer a
  // chaque `sync()` le laissait detache le temps d'une image — taille nulle, donc plus
  // aucun clic ne touchait la scene.
  function prune(parent) {
    for (let i = parent.childNodes.length - 1; i >= 0; i--) {
      const c = parent.childNodes[i];
      if (c.__dcKey !== undefined && c.__dcSeen !== pass) parent.removeChild(c);
    }
  }

  function walk(node, scope, parent, cur, path) {
    if (node.nodeType === 3) {
      const raw = node.nodeValue;
      const text = raw.indexOf('{{') >= 0 ? interpolate(raw, scope) : raw;
      const el = place(parent, cur, path + 't' + tplId(node), () => document.createTextNode(text));
      if (el.nodeValue !== text) el.nodeValue = text;
      return;
    }
    if (node.nodeType !== 1) return;

    const tag = node.tagName.toLowerCase();
    if (tag === 'sc-if') {
      if (evaluate(node.getAttribute('value') || '', scope)) {
        kids(node, scope, parent, cur, path + 'i' + tplId(node) + '/');
      }
      return;
    }
    if (tag === 'sc-for') {
      const list = evaluate(node.getAttribute('list') || '', scope);
      const as = node.getAttribute('as') || 'item';
      if (Array.isArray(list)) {
        const base = path + 'f' + tplId(node) + ':';
        for (let i = 0; i < list.length; i++) {
          const inner = Object.create(scope);
          inner[as] = list[i];
          inner[as + 'Index'] = i;
          // La cle porte l'indice : une entree retiree au milieu ne decale pas les autres.
          kids(node, inner, parent, cur, base + i + '/');
        }
      }
      return;
    }

    const svg = tag === 'svg' || (parent.namespaceURI === SVG_NS && tag !== 'foreignobject');
    const el = place(parent, cur, path + 'e' + tplId(node),
      () => svg ? document.createElementNS(SVG_NS, node.tagName) : document.createElement(tag));
    applyAttrs(el, node, scope);
    const inner = { i: 0 };
    kids(node, scope, el, inner, '');
    prune(el);
  }

  function kids(node, scope, parent, cur, path) {
    const cs = node.childNodes;
    for (let i = 0; i < cs.length; i++) walk(cs[i], scope, parent, cur, path);
  }

  /* --- classe de base ---------------------------------------------------- */
  class Logic {
    constructor(props) { this.props = props || {}; this.state = {}; }
    forceUpdate() { if (this._render) this._render(); }
    setState(s) { Object.assign(this.state, s); this.forceUpdate(); }
  }

  /* --- montage ----------------------------------------------------------- */
  function mount(Component, props, target, templateHTML) {
    const tpl = document.createElement('template');
    tpl.innerHTML = templateHTML;
    const inst = new Component(props || {});
    inst._render = function () {
      const V = inst.renderVals();
      pass++;                       // estampille de passe : ce qui n'est pas revu est retire
      const cur = { i: 0 };
      kids(tpl.content, V, target, cur, '');
      prune(target);
    };
    inst._render();
    if (inst.componentDidMount) inst.componentDidMount();
    return inst;
  }

  global.DC = { ref, Logic, mount };
})(window);
