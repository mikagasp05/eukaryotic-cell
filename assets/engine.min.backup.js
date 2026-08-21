import {
  A as e,
  B as t,
  C as n,
  D as r,
  E as i,
  F as a,
  G as o,
  H as s,
  I as c,
  J as l,
  K as u,
  L as d,
  M as f,
  N as p,
  O as m,
  P as h,
  R as g,
  S as _,
  T as v,
  U as y,
  V as b,
  W as x,
  _ as S,
  a as C,
  b as w,
  c as T,
  d as ee,
  f as E,
  g as D,
  h as O,
  i as k,
  j as te,
  k as A,
  l as j,
  m as M,
  n as ne,
  o as N,
  p as P,
  q as F,
  r as re,
  s as ie,
  t as ae,
  u as oe,
  v as se,
  w as ce,
  x as le,
  y as ue,
  z as de,
} from "./three.module-BIecrmCP.js";
var fe = { type: `change` },
  pe = { type: `start` },
  me = { type: `end` },
  he = new h(),
  ge = new e(),
  _e = Math.cos(70 * le.DEG2RAD),
  ve = class extends E {
    constructor(e, n) {
      (super(),
        (this.object = e),
        (this.domElement = n),
        (this.domElement.style.touchAction = `none`),
        (this.enabled = !0),
        (this.target = new F()),
        (this.cursor = new F()),
        (this.minDistance = 0),
        (this.maxDistance = 1 / 0),
        (this.minZoom = 0),
        (this.maxZoom = 1 / 0),
        (this.minTargetRadius = 0),
        (this.maxTargetRadius = 1 / 0),
        (this.minPolarAngle = 0),
        (this.maxPolarAngle = Math.PI),
        (this.minAzimuthAngle = -1 / 0),
        (this.maxAzimuthAngle = 1 / 0),
        (this.enableDamping = !1),
        (this.dampingFactor = 0.05),
        (this.enableZoom = !0),
        (this.zoomSpeed = 1),
        (this.enableRotate = !0),
        (this.rotateSpeed = 1),
        (this.enablePan = !0),
        (this.panSpeed = 1),
        (this.screenSpacePanning = !0),
        (this.keyPanSpeed = 7),
        (this.zoomToCursor = !1),
        (this.autoRotate = !1),
        (this.autoRotateSpeed = 2),
        (this.keys = { LEFT: `ArrowLeft`, UP: `ArrowUp`, RIGHT: `ArrowRight`, BOTTOM: `ArrowDown` }),
        (this.mouseButtons = { LEFT: w.ROTATE, MIDDLE: w.DOLLY, RIGHT: w.PAN }),
        (this.touches = { ONE: y.ROTATE, TWO: y.DOLLY_PAN }),
        (this.target0 = this.target.clone()),
        (this.position0 = this.object.position.clone()),
        (this.zoom0 = this.object.zoom),
        (this._domElementKeyEvents = null),
        (this.getPolarAngle = function () {
          return s.phi;
        }),
        (this.getAzimuthalAngle = function () {
          return s.theta;
        }),
        (this.getDistance = function () {
          return this.object.position.distanceTo(this.target);
        }),
        (this.listenToKeyEvents = function (e) {
          (e.addEventListener(`keydown`, Fe), (this._domElementKeyEvents = e));
        }),
        (this.stopListenToKeyEvents = function () {
          (this._domElementKeyEvents.removeEventListener(`keydown`, Fe), (this._domElementKeyEvents = null));
        }),
        (this.saveState = function () {
          (r.target0.copy(r.target), r.position0.copy(r.object.position), (r.zoom0 = r.object.zoom));
        }),
        (this.reset = function () {
          (r.target.copy(r.target0), r.object.position.copy(r.position0), (r.object.zoom = r.zoom0), r.object.updateProjectionMatrix(), r.dispatchEvent(fe), r.update(), (a = i.NONE));
        }),
        (this.update = (function () {
          let t = new F(),
            n = new p().setFromUnitVectors(e.up, new F(0, 1, 0)),
            u = n.clone().invert(),
            f = new F(),
            m = new p(),
            h = new F(),
            g = 2 * Math.PI;
          return function (p = null) {
            let _ = r.object.position;
            (t.copy(_).sub(r.target),
              t.applyQuaternion(n),
              s.setFromVector3(t),
              r.autoRotate && a === i.NONE && A(k(p)),
              r.enableDamping ? ((s.theta += c.theta * r.dampingFactor), (s.phi += c.phi * r.dampingFactor)) : ((s.theta += c.theta), (s.phi += c.phi)));
            let v = r.minAzimuthAngle,
              y = r.maxAzimuthAngle;
            (isFinite(v) &&
              isFinite(y) &&
              (v < -Math.PI ? (v += g) : v > Math.PI && (v -= g),
              y < -Math.PI ? (y += g) : y > Math.PI && (y -= g),
              v <= y ? (s.theta = Math.max(v, Math.min(y, s.theta))) : (s.theta = s.theta > (v + y) / 2 ? Math.max(v, s.theta) : Math.min(y, s.theta))),
              (s.phi = Math.max(r.minPolarAngle, Math.min(r.maxPolarAngle, s.phi))),
              s.makeSafe(),
              r.enableDamping === !0 ? r.target.addScaledVector(d, r.dampingFactor) : r.target.add(d),
              r.target.sub(r.cursor),
              r.target.clampLength(r.minTargetRadius, r.maxTargetRadius),
              r.target.add(r.cursor),
              (r.zoomToCursor && ee) || r.object.isOrthographicCamera ? (s.radius = ae(s.radius)) : (s.radius = ae(s.radius * l)),
              t.setFromSpherical(s),
              t.applyQuaternion(u),
              _.copy(r.target).add(t),
              r.object.lookAt(r.target),
              r.enableDamping === !0 ? ((c.theta *= 1 - r.dampingFactor), (c.phi *= 1 - r.dampingFactor), d.multiplyScalar(1 - r.dampingFactor)) : (c.set(0, 0, 0), d.set(0, 0, 0)));
            let b = !1;
            if (r.zoomToCursor && ee) {
              let n = null;
              if (r.object.isPerspectiveCamera) {
                let e = t.length();
                n = ae(e * l);
                let i = e - n;
                (r.object.position.addScaledVector(C, i), r.object.updateMatrixWorld());
              } else if (r.object.isOrthographicCamera) {
                let e = new F(T.x, T.y, 0);
                (e.unproject(r.object), (r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / l))), r.object.updateProjectionMatrix(), (b = !0));
                let i = new F(T.x, T.y, 0);
                (i.unproject(r.object), r.object.position.sub(i).add(e), r.object.updateMatrixWorld(), (n = t.length()));
              } else (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`), (r.zoomToCursor = !1));
              n !== null &&
                (this.screenSpacePanning
                  ? r.target.set(0, 0, -1).transformDirection(r.object.matrix).multiplyScalar(n).add(r.object.position)
                  : (he.origin.copy(r.object.position),
                    he.direction.set(0, 0, -1).transformDirection(r.object.matrix),
                    Math.abs(r.object.up.dot(he.direction)) < _e ? e.lookAt(r.target) : (ge.setFromNormalAndCoplanarPoint(r.object.up, r.target), he.intersectPlane(ge, r.target))));
            } else r.object.isOrthographicCamera && ((r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / l))), r.object.updateProjectionMatrix(), (b = !0));
            return (
              (l = 1),
              (ee = !1),
              b || f.distanceToSquared(r.object.position) > o || 8 * (1 - m.dot(r.object.quaternion)) > o || h.distanceToSquared(r.target) > 0
                ? (r.dispatchEvent(fe), f.copy(r.object.position), m.copy(r.object.quaternion), h.copy(r.target), !0)
                : !1
            );
          };
        })()),
        (this.dispose = function () {
          (r.domElement.removeEventListener(`contextmenu`, Re),
            r.domElement.removeEventListener(`pointerdown`, ke),
            r.domElement.removeEventListener(`pointercancel`, R),
            r.domElement.removeEventListener(`wheel`, je),
            r.domElement.removeEventListener(`pointermove`, L),
            r.domElement.removeEventListener(`pointerup`, R),
            r._domElementKeyEvents !== null && (r._domElementKeyEvents.removeEventListener(`keydown`, Fe), (r._domElementKeyEvents = null)));
        }));
      let r = this,
        i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 },
        a = i.NONE,
        o = 1e-6,
        s = new t(),
        c = new t(),
        l = 1,
        d = new F(),
        f = new u(),
        m = new u(),
        h = new u(),
        g = new u(),
        _ = new u(),
        v = new u(),
        b = new u(),
        x = new u(),
        S = new u(),
        C = new F(),
        T = new u(),
        ee = !1,
        E = [],
        D = {},
        O = !1;
      function k(e) {
        return e === null ? ((2 * Math.PI) / 60 / 60) * r.autoRotateSpeed : ((2 * Math.PI) / 60) * r.autoRotateSpeed * e;
      }
      function te(e) {
        let t = Math.abs(e * 0.01);
        return 0.95 ** (r.zoomSpeed * t);
      }
      function A(e) {
        c.theta -= e;
      }
      function j(e) {
        c.phi -= e;
      }
      let M = (function () {
          let e = new F();
          return function (t, n) {
            (e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), d.add(e));
          };
        })(),
        ne = (function () {
          let e = new F();
          return function (t, n) {
            (r.screenSpacePanning === !0 ? e.setFromMatrixColumn(n, 1) : (e.setFromMatrixColumn(n, 0), e.crossVectors(r.object.up, e)), e.multiplyScalar(t), d.add(e));
          };
        })(),
        N = (function () {
          let e = new F();
          return function (t, n) {
            let i = r.domElement;
            if (r.object.isPerspectiveCamera) {
              let a = r.object.position;
              e.copy(a).sub(r.target);
              let o = e.length();
              ((o *= Math.tan(((r.object.fov / 2) * Math.PI) / 180)), M((2 * t * o) / i.clientHeight, r.object.matrix), ne((2 * n * o) / i.clientHeight, r.object.matrix));
            } else
              r.object.isOrthographicCamera
                ? (M((t * (r.object.right - r.object.left)) / r.object.zoom / i.clientWidth, r.object.matrix),
                  ne((n * (r.object.top - r.object.bottom)) / r.object.zoom / i.clientHeight, r.object.matrix))
                : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`), (r.enablePan = !1));
          };
        })();
      function P(e) {
        r.object.isPerspectiveCamera || r.object.isOrthographicCamera
          ? (l /= e)
          : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`), (r.enableZoom = !1));
      }
      function re(e) {
        r.object.isPerspectiveCamera || r.object.isOrthographicCamera
          ? (l *= e)
          : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`), (r.enableZoom = !1));
      }
      function ie(e, t) {
        if (!r.zoomToCursor) return;
        ee = !0;
        let n = r.domElement.getBoundingClientRect(),
          i = e - n.left,
          a = t - n.top,
          o = n.width,
          s = n.height;
        ((T.x = (i / o) * 2 - 1), (T.y = -(a / s) * 2 + 1), C.set(T.x, T.y, 1).unproject(r.object).sub(r.object.position).normalize());
      }
      function ae(e) {
        return Math.max(r.minDistance, Math.min(r.maxDistance, e));
      }
      function oe(e) {
        f.set(e.clientX, e.clientY);
      }
      function se(e) {
        (ie(e.clientX, e.clientX), b.set(e.clientX, e.clientY));
      }
      function ce(e) {
        g.set(e.clientX, e.clientY);
      }
      function le(e) {
        (m.set(e.clientX, e.clientY), h.subVectors(m, f).multiplyScalar(r.rotateSpeed));
        let t = r.domElement;
        (A((2 * Math.PI * h.x) / t.clientHeight), j((2 * Math.PI * h.y) / t.clientHeight), f.copy(m), r.update());
      }
      function ue(e) {
        (x.set(e.clientX, e.clientY), S.subVectors(x, b), S.y > 0 ? P(te(S.y)) : S.y < 0 && re(te(S.y)), b.copy(x), r.update());
      }
      function de(e) {
        (_.set(e.clientX, e.clientY), v.subVectors(_, g).multiplyScalar(r.panSpeed), N(v.x, v.y), g.copy(_), r.update());
      }
      function ve(e) {
        (ie(e.clientX, e.clientY), e.deltaY < 0 ? re(te(e.deltaY)) : e.deltaY > 0 && P(te(e.deltaY)), r.update());
      }
      function ye(e) {
        let t = !1;
        switch (e.code) {
          case r.keys.UP:
            (e.ctrlKey || e.metaKey || e.shiftKey ? j((2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight) : N(0, r.keyPanSpeed), (t = !0));
            break;
          case r.keys.BOTTOM:
            (e.ctrlKey || e.metaKey || e.shiftKey ? j((-2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight) : N(0, -r.keyPanSpeed), (t = !0));
            break;
          case r.keys.LEFT:
            (e.ctrlKey || e.metaKey || e.shiftKey ? A((2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight) : N(r.keyPanSpeed, 0), (t = !0));
            break;
          case r.keys.RIGHT:
            (e.ctrlKey || e.metaKey || e.shiftKey ? A((-2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight) : N(-r.keyPanSpeed, 0), (t = !0));
            break;
        }
        t && (e.preventDefault(), r.update());
      }
      function be(e) {
        if (E.length === 1) f.set(e.pageX, e.pageY);
        else {
          let t = He(e),
            n = 0.5 * (e.pageX + t.x),
            r = 0.5 * (e.pageY + t.y);
          f.set(n, r);
        }
      }
      function xe(e) {
        if (E.length === 1) g.set(e.pageX, e.pageY);
        else {
          let t = He(e),
            n = 0.5 * (e.pageX + t.x),
            r = 0.5 * (e.pageY + t.y);
          g.set(n, r);
        }
      }
      function Se(e) {
        let t = He(e),
          n = e.pageX - t.x,
          r = e.pageY - t.y,
          i = Math.sqrt(n * n + r * r);
        b.set(0, i);
      }
      function Ce(e) {
        (r.enableZoom && Se(e), r.enablePan && xe(e));
      }
      function we(e) {
        (r.enableZoom && Se(e), r.enableRotate && be(e));
      }
      function Te(e) {
        if (E.length == 1) m.set(e.pageX, e.pageY);
        else {
          let t = He(e),
            n = 0.5 * (e.pageX + t.x),
            r = 0.5 * (e.pageY + t.y);
          m.set(n, r);
        }
        h.subVectors(m, f).multiplyScalar(r.rotateSpeed);
        let t = r.domElement;
        (A((2 * Math.PI * h.x) / t.clientHeight), j((2 * Math.PI * h.y) / t.clientHeight), f.copy(m));
      }
      function Ee(e) {
        if (E.length === 1) _.set(e.pageX, e.pageY);
        else {
          let t = He(e),
            n = 0.5 * (e.pageX + t.x),
            r = 0.5 * (e.pageY + t.y);
          _.set(n, r);
        }
        (v.subVectors(_, g).multiplyScalar(r.panSpeed), N(v.x, v.y), g.copy(_));
      }
      function De(e) {
        let t = He(e),
          n = e.pageX - t.x,
          i = e.pageY - t.y,
          a = Math.sqrt(n * n + i * i);
        (x.set(0, a), S.set(0, (x.y / b.y) ** +r.zoomSpeed), P(S.y), b.copy(x), ie((e.pageX + t.x) * 0.5, (e.pageY + t.y) * 0.5));
      }
      function I(e) {
        (r.enableZoom && De(e), r.enablePan && Ee(e));
      }
      function Oe(e) {
        (r.enableZoom && De(e), r.enableRotate && Te(e));
      }
      function ke(e) {
        r.enabled !== !1 &&
          (E.length === 0 && (r.domElement.setPointerCapture(e.pointerId), r.domElement.addEventListener(`pointermove`, L), r.domElement.addEventListener(`pointerup`, R)),
          ze(e),
          e.pointerType === `touch` ? Ie(e) : z(e));
      }
      function L(e) {
        r.enabled !== !1 && (e.pointerType === `touch` ? Le(e) : Ae(e));
      }
      function R(e) {
        (Be(e),
          E.length === 0 && (r.domElement.releasePointerCapture(e.pointerId), r.domElement.removeEventListener(`pointermove`, L), r.domElement.removeEventListener(`pointerup`, R)),
          r.dispatchEvent(me),
          (a = i.NONE));
      }
      function z(e) {
        let t;
        switch (e.button) {
          case 0:
            t = r.mouseButtons.LEFT;
            break;
          case 1:
            t = r.mouseButtons.MIDDLE;
            break;
          case 2:
            t = r.mouseButtons.RIGHT;
            break;
          default:
            t = -1;
        }
        switch (t) {
          case w.DOLLY:
            if (r.enableZoom === !1) return;
            (se(e), (a = i.DOLLY));
            break;
          case w.ROTATE:
            if (e.ctrlKey || e.metaKey || e.shiftKey) {
              if (r.enablePan === !1) return;
              (ce(e), (a = i.PAN));
            } else {
              if (r.enableRotate === !1) return;
              (oe(e), (a = i.ROTATE));
            }
            break;
          case w.PAN:
            if (e.ctrlKey || e.metaKey || e.shiftKey) {
              if (r.enableRotate === !1) return;
              (oe(e), (a = i.ROTATE));
            } else {
              if (r.enablePan === !1) return;
              (ce(e), (a = i.PAN));
            }
            break;
          default:
            a = i.NONE;
        }
        a !== i.NONE && r.dispatchEvent(pe);
      }
      function Ae(e) {
        switch (a) {
          case i.ROTATE:
            if (r.enableRotate === !1) return;
            le(e);
            break;
          case i.DOLLY:
            if (r.enableZoom === !1) return;
            ue(e);
            break;
          case i.PAN:
            if (r.enablePan === !1) return;
            de(e);
            break;
        }
      }
      function je(e) {
        r.enabled === !1 || r.enableZoom === !1 || a !== i.NONE || (e.preventDefault(), r.dispatchEvent(pe), ve(Me(e)), r.dispatchEvent(me));
      }
      function Me(e) {
        let t = e.deltaMode,
          n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
        switch (t) {
          case 1:
            n.deltaY *= 16;
            break;
          case 2:
            n.deltaY *= 100;
            break;
        }
        return (e.ctrlKey && !O && (n.deltaY *= 10), n);
      }
      function Ne(e) {
        e.key === `Control` && ((O = !0), document.addEventListener(`keyup`, Pe, { passive: !0, capture: !0 }));
      }
      function Pe(e) {
        e.key === `Control` && ((O = !1), document.removeEventListener(`keyup`, Pe, { passive: !0, capture: !0 }));
      }
      function Fe(e) {
        r.enabled === !1 || r.enablePan === !1 || ye(e);
      }
      function Ie(e) {
        switch ((Ve(e), E.length)) {
          case 1:
            switch (r.touches.ONE) {
              case y.ROTATE:
                if (r.enableRotate === !1) return;
                (be(e), (a = i.TOUCH_ROTATE));
                break;
              case y.PAN:
                if (r.enablePan === !1) return;
                (xe(e), (a = i.TOUCH_PAN));
                break;
              default:
                a = i.NONE;
            }
            break;
          case 2:
            switch (r.touches.TWO) {
              case y.DOLLY_PAN:
                if (r.enableZoom === !1 && r.enablePan === !1) return;
                (Ce(e), (a = i.TOUCH_DOLLY_PAN));
                break;
              case y.DOLLY_ROTATE:
                if (r.enableZoom === !1 && r.enableRotate === !1) return;
                (we(e), (a = i.TOUCH_DOLLY_ROTATE));
                break;
              default:
                a = i.NONE;
            }
            break;
          default:
            a = i.NONE;
        }
        a !== i.NONE && r.dispatchEvent(pe);
      }
      function Le(e) {
        switch ((Ve(e), a)) {
          case i.TOUCH_ROTATE:
            if (r.enableRotate === !1) return;
            (Te(e), r.update());
            break;
          case i.TOUCH_PAN:
            if (r.enablePan === !1) return;
            (Ee(e), r.update());
            break;
          case i.TOUCH_DOLLY_PAN:
            if (r.enableZoom === !1 && r.enablePan === !1) return;
            (I(e), r.update());
            break;
          case i.TOUCH_DOLLY_ROTATE:
            if (r.enableZoom === !1 && r.enableRotate === !1) return;
            (Oe(e), r.update());
            break;
          default:
            a = i.NONE;
        }
      }
      function Re(e) {
        r.enabled !== !1 && e.preventDefault();
      }
      function ze(e) {
        E.push(e.pointerId);
      }
      function Be(e) {
        delete D[e.pointerId];
        for (let t = 0; t < E.length; t++)
          if (E[t] == e.pointerId) {
            E.splice(t, 1);
            return;
          }
      }
      function Ve(e) {
        let t = D[e.pointerId];
        (t === void 0 && ((t = new u()), (D[e.pointerId] = t)), t.set(e.pageX, e.pageY));
      }
      function He(e) {
        return D[e.pointerId === E[0] ? E[1] : E[0]];
      }
      (r.domElement.addEventListener(`contextmenu`, Re),
        r.domElement.addEventListener(`pointerdown`, ke),
        r.domElement.addEventListener(`pointercancel`, R),
        r.domElement.addEventListener(`wheel`, je, { passive: !1 }),
        document.addEventListener(`keydown`, Ne, { passive: !0, capture: !0 }),
        this.update());
    }
  };
function ye(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    s = e[0].morphTargetsRelative,
    c = new re(),
    l = 0;
  for (let u = 0; u < e.length; ++u) {
    let d = e[u],
      f = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`,
          ),
          null
        );
      (a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++);
    }
    if (f !== r.size)
      return (console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. Make sure all geometries have the same number of attributes.`), null);
    if (s !== d.morphTargetsRelative)
      return (console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. .morphTargetsRelative must be consistent throughout all geometries.`), null);
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `.  .morphAttributes must be consistent throughout all geometries.`), null);
      (o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]));
    }
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0) e = d.attributes.position.count;
      else return (console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u + `. The geometry must have either an index or a position attribute`), null);
      (c.addGroup(l, e, u), (l += e));
    }
  }
  if (n) {
    let t = 0,
      n = [];
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index;
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
      t += e[r].attributes.position.count;
    }
    c.setIndex(n);
  }
  for (let e in a) {
    let t = be(a[e]);
    if (!t) return (console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e + ` attribute.`), null);
    c.setAttribute(e, t);
  }
  for (let e in o) {
    let t = o[e][0].length;
    if (t === 0) break;
    ((c.morphAttributes = c.morphAttributes || {}), (c.morphAttributes[e] = []));
    for (let n = 0; n < t; ++n) {
      let t = [];
      for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
      let r = be(t);
      if (!r) return (console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e + ` morphAttribute.`), null);
      c.morphAttributes[e].push(r);
    }
  }
  return c;
}
function be(e) {
  let t,
    n,
    r,
    i = -1,
    a = 0;
  for (let o = 0; o < e.length; ++o) {
    let s = e[o];
    if (s.isInterleavedBufferAttribute) return (console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.`), null);
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`), null);
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`), null);
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`), null);
    if ((i === -1 && (i = s.gpuType), i !== s.gpuType))
      return (console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`), null);
    a += s.array.length;
  }
  let o = new t(a),
    s = 0;
  for (let t = 0; t < e.length; ++t) (o.set(e[t].array, s), (s += e[t].array.length));
  let c = new ne(o, n, r);
  return (i !== void 0 && (c.gpuType = i), c);
}
var xe = [
  [1, 1, 0],
  [-1, 1, 0],
  [1, -1, 0],
  [-1, -1, 0],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 0, -1],
  [-1, 0, -1],
  [0, 1, 1],
  [0, -1, 1],
  [0, 1, -1],
  [0, -1, -1],
];
function Se(e) {
  let t = new Uint8Array(256);
  for (let e = 0; e < 256; e++) t[e] = e;
  let n = e >>> 0 || 1,
    r = () => ((n = (n * 1664525 + 1013904223) >>> 0), n / 4294967296);
  for (let e = 255; e > 0; e--) {
    let n = (r() * (e + 1)) | 0,
      i = t[e];
    ((t[e] = t[n]), (t[n] = i));
  }
  let i = new Uint16Array(512),
    a = new Uint16Array(512);
  for (let e = 0; e < 512; e++) ((i[e] = t[e & 255]), (a[e] = i[e] % 12));
  return { perm: i, pm: a };
}
var Ce = 1 / 3,
  we = 1 / 6;
function Te(e) {
  let { perm: t, pm: n } = Se(e);
  return function (e, r, i) {
    let a,
      o,
      s,
      c,
      l = (e + r + i) * Ce,
      u = Math.floor(e + l),
      d = Math.floor(r + l),
      f = Math.floor(i + l),
      p = (u + d + f) * we,
      m = e - (u - p),
      h = r - (d - p),
      g = i - (f - p),
      _,
      v,
      y,
      b,
      x,
      S;
    m >= h
      ? h >= g
        ? ((_ = 1), (v = 0), (y = 0), (b = 1), (x = 1), (S = 0))
        : m >= g
          ? ((_ = 1), (v = 0), (y = 0), (b = 1), (x = 0), (S = 1))
          : ((_ = 0), (v = 0), (y = 1), (b = 1), (x = 0), (S = 1))
      : h < g
        ? ((_ = 0), (v = 0), (y = 1), (b = 0), (x = 1), (S = 1))
        : m < g
          ? ((_ = 0), (v = 1), (y = 0), (b = 0), (x = 1), (S = 1))
          : ((_ = 0), (v = 1), (y = 0), (b = 1), (x = 1), (S = 0));
    let C = m - _ + we,
      w = h - v + we,
      T = g - y + we,
      ee = m - b + 2 * we,
      E = h - x + 2 * we,
      D = g - S + 2 * we,
      O = m - 1 + 3 * we,
      k = h - 1 + 3 * we,
      te = g - 1 + 3 * we,
      A = u & 255,
      j = d & 255,
      M = f & 255,
      ne = 0.6 - m * m - h * h - g * g;
    if (ne < 0) a = 0;
    else {
      let e = xe[n[A + t[j + t[M]]]];
      ((ne *= ne), (a = ne * ne * (e[0] * m + e[1] * h + e[2] * g)));
    }
    let N = 0.6 - C * C - w * w - T * T;
    if (N < 0) o = 0;
    else {
      let e = xe[n[A + _ + t[j + v + t[M + y]]]];
      ((N *= N), (o = N * N * (e[0] * C + e[1] * w + e[2] * T)));
    }
    let P = 0.6 - ee * ee - E * E - D * D;
    if (P < 0) s = 0;
    else {
      let e = xe[n[A + b + t[j + x + t[M + S]]]];
      ((P *= P), (s = P * P * (e[0] * ee + e[1] * E + e[2] * D)));
    }
    let F = 0.6 - O * O - k * k - te * te;
    if (F < 0) c = 0;
    else {
      let e = xe[n[A + 1 + t[j + 1 + t[M + 1]]]];
      ((F *= F), (c = F * F * (e[0] * O + e[1] * k + e[2] * te)));
    }
    return 32 * (a + o + s + c);
  };
}
var Ee = Te(20260628);
Te(917);
function De(e) {
  return function () {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}
var I = (e, t, n) => Math.min(n, Math.max(t, e)),
  Oe = (e) => ((e = I(e, 0, 1)), e * e * (3 - 2 * e)),
  ke = (e, t, n = 6) => e / (1 + (e / t) ** +n) ** (1 / n);
function L(e, t = {}) {
  let n = new ce({ color: e, roughness: t.rough ?? 0.42, metalness: t.metal ?? 0, clearcoat: t.clear ?? 0.5, clearcoatRoughness: t.ccr ?? 0.2, envMapIntensity: t.env ?? 0.85, transparent: !0 });
  return (t.op != null && (n.opacity = t.op), (n.userData.baseOpacity = t.op ?? 1), n);
}
var R = {
    backbone: 9090774,
    base: { A: 3120708, T: 13183530, G: 7041664, C: 1867478 },
    core: 10467014,
    H3: 7245769,
    H4: 5024655,
    H2A: 14263387,
    H2B: 13466475,
    H1: 12098777,
    CPK: { C: 3817287, N: 2841559, O: 14692906, P: 15765535, H: 15265266 },
  },
  z = {
    base: { A: `#2f9e44`, T: `#e0584f`, G: `#6b7280`, C: `#1c7ed6` },
    CPK: { C: `#3a3f47`, N: `#2b5bd7`, O: `#e0322a`, P: `#f0901f`, H: `#e8edf2` },
    H3: `#6e8fc9`,
    H4: `#4cab8f`,
    H2A: `#d9a45b`,
    H2B: `#cd7b6b`,
    H1: `#b89cd9`,
    struct: `#9fb6c6`,
  },
  Ae = { A: `Adénine`, T: `Thymine`, C: `Cytosine`, G: `Guanine` },
  je = { A: `Purine`, G: `Purine`, T: `Pyrimidine`, C: `Pyrimidine` },
  Me = { A: `T`, T: `A`, C: `G`, G: `C` },
  Ne = { C: `Carbone`, N: `Azote`, O: `Oxygène`, P: `Phosphore`, H: `Hydrogène` },
  Pe = { phosphate: `Groupe phosphate`, sucre: `Sucre · désoxyribose`, base: `Base azotée` },
  Fe = { H3: `Histone H3`, H4: `Histone H4`, H2A: `Histone H2A`, H2B: `Histone H2B`, H1: `Histone H1` },
  Ie = {
    TTT: `Phe`,
    TTC: `Phe`,
    TTA: `Leu`,
    TTG: `Leu`,
    CTT: `Leu`,
    CTC: `Leu`,
    CTA: `Leu`,
    CTG: `Leu`,
    ATT: `Ile`,
    ATC: `Ile`,
    ATA: `Ile`,
    ATG: `Met`,
    GTT: `Val`,
    GTC: `Val`,
    GTA: `Val`,
    GTG: `Val`,
    TCT: `Ser`,
    TCC: `Ser`,
    TCA: `Ser`,
    TCG: `Ser`,
    CCT: `Pro`,
    CCC: `Pro`,
    CCA: `Pro`,
    CCG: `Pro`,
    ACT: `Thr`,
    ACC: `Thr`,
    ACA: `Thr`,
    ACG: `Thr`,
    GCT: `Ala`,
    GCC: `Ala`,
    GCA: `Ala`,
    GCG: `Ala`,
    TAT: `Tyr`,
    TAC: `Tyr`,
    TAA: `Stop`,
    TAG: `Stop`,
    CAT: `His`,
    CAC: `His`,
    CAA: `Gln`,
    CAG: `Gln`,
    AAT: `Asn`,
    AAC: `Asn`,
    AAA: `Lys`,
    AAG: `Lys`,
    GAT: `Asp`,
    GAC: `Asp`,
    GAA: `Glu`,
    GAG: `Glu`,
    TGT: `Cys`,
    TGC: `Cys`,
    TGA: `Stop`,
    TGG: `Trp`,
    CGT: `Arg`,
    CGC: `Arg`,
    CGA: `Arg`,
    CGG: `Arg`,
    AGT: `Ser`,
    AGC: `Ser`,
    AGA: `Arg`,
    AGG: `Arg`,
    GGT: `Gly`,
    GGC: `Gly`,
    GGA: `Gly`,
    GGG: `Gly`,
  },
  Le = {
    chromosome: {
      title: `Territoire chromosomique`,
      size: `≈ 1-2 µm, région diffuse`,
      kind: `structure`,
      chip: `⟲`,
      chipBg: z.struct,
      meta: `Chromosome au repos (interphase)`,
      tip: [`Fibre de chromatine repliée en boucles irrégulières`, `Chaque chromosome occupe un domaine distinct du noyau`],
      rows: [
        [`Forme`, `boucles lâches, sans centromère visible`],
        [`Organisation`, `territoire chromosomique dédié`],
        [`État`, `interphase — pas de condensation mitotique`],
        [`Extrémités`, `télomères`],
        [`Boucles`, `ancrées sur un échafaudage (cohésines · CTCF)`],
        [`À la mitose`, `se condense alors en bâtonnet à 2 chromatides (forme en X)`],
      ],
      note: `En dehors de la division cellulaire, l’ADN n’est pas condensé en bâtonnet : chaque chromosome occupe un territoire distinct du noyau, sous forme de boucles de chromatine ancrées sur un échafaudage protéique (cohésines, CTCF). La forme en X à deux chromatides n’apparaît que brièvement en mitose/méiose, lors de la condensation maximale.`,
    },
    fibre30: {
      title: `Fibre de chromatine 30 nm`,
      size: `≈ 30 nm`,
      kind: `structure`,
      chip: `≋`,
      chipBg: z.struct,
      meta: `Enroulement de la fibre de 10 nm`,
      tip: [`Empilement hélicoïdal de nucléosomes (~30 nm)`, `Modèles : solénoïde ou zigzag`],
      rows: [
        [`Diamètre`, `≈ 30 nm`],
        [`Modèles`, `solénoïde · zigzag`],
        [`Nucléosomes/tour`, `≈ 6 (zigzag) à 11 (solénoïde)`],
        [`Stabilisée par`, `histone H1`],
        [`Niveau`, `3ᵉ degré de compaction`],
      ],
      note: `⚠ Modèle classique des manuels, observé surtout in vitro. Sa présence in vivo est largement réfutée : l’imagerie en cellule (ChromEMT, Ou et al. 2017) montre plutôt un repliement irrégulier de la fibre de 10 nm, sauf dans de rares cellules très spécialisées.`,
    },
    beads: {
      title: `Collier de perles · fibre 10 nm`,
      size: `≈ 11 nm`,
      kind: `structure`,
      chip: `⦿`,
      chipBg: z.struct,
      meta: `1er niveau de compaction de l’ADN`,
      tip: [`Nucléosomes espacés par l’ADN de liaison`, `Aspect « perles sur un fil » (~10 nm)`],
      rows: [
        [`Diamètre`, `≈ 10–11 nm`],
        [`ADN de liaison`, `≈ 20–80 pb (~50 pb)`],
        [`Répétition`, `≈ 200 pb / nucléosome`],
        [`Aspect`, `perles sur un fil`],
      ],
      note: `Premier repliement de l’ADN nu : les nucléosomes, reliés par l’ADN de liaison, forment un collier d’environ 10 nm de diamètre.`,
    },
    nucleosome: {
      title: `Nucléosome`,
      size: `≈ 11 nm`,
      kind: `structure`,
      chip: `◉`,
      chipBg: z.struct,
      meta: `Unité de base de la chromatine`,
      tip: [`≈ 147 pb enroulés sur ~1,65 tour gauche`, `Octamère : (H3-H4)₂ + 2× (H2A-H2B)`],
      rows: [
        [`ADN enroulé`, `≈ 147 pb (particule cœur)`],
        [`Tours`, `≈ 1,65 (superhélice gauche)`],
        [`Dimensions`, `≈ 11 nm × 5,5 nm`],
        [`Cœur`, `(H3-H4)₂ + 2× (H2A-H2B)`],
        [`Répétition`, `≈ 200 pb (avec ADN de liaison)`],
        [`Verrou`, `histone H1`],
      ],
      note: `L’ADN, chargé négativement, s’enroule autour de l’octamère d’histones (basique). Les queues d’histones portent les marques épigénétiques (acétylation, méthylation).`,
    },
    helix: {
      title: `Double hélice d’ADN`,
      size: `≈ 2 nm de diamètre`,
      kind: `structure`,
      chip: `⊷`,
      chipBg: z.struct,
      meta: `ADN-B · forme physiologique`,
      tip: [`Hélice droite, brins antiparallèles`, `≈ 10,5 pb/tour · 0,34 nm par paire`],
      rows: [
        [`Diamètre`, `≈ 2 nm`],
        [`Pas`, `≈ 10,5 pb/tour`],
        [`Rise`, `0,34 nm/pb`],
        [`Brins`, `antiparallèles 5′→3′ / 3′→5′`],
        [`Sillons`, `grand et petit sillon`],
        [`Appariement`, `A=T · G≡C`],
      ],
      note: `Survolez ou cliquez une base pour ses informations détaillées (appariement, liaisons H, codon).`,
    },
  },
  Re = {
    H3: { role: `Forme le tétramère central (H3-H4)₂`, mod: `H3K4me, H3K9ac, H3K27me…` },
    H4: { role: `Forme le tétramère central (H3-H4)₂`, mod: `H4K16ac…` },
    H2A: { role: `Dimère H2A-H2B périphérique`, mod: `ubiquitination, variants (H2A.Z)` },
    H2B: { role: `Dimère H2A-H2B périphérique`, mod: `ubiquitination` },
    H1: { role: `Histone de liaison — scelle l’entrée/sortie de l’ADN`, mod: `compacte la fibre` },
  };
function ze(e) {
  let t = Re[e] || { role: ``, mod: `` };
  return {
    kind: `histone`,
    chip: e,
    chipBg: z[e],
    chipColor: `#06090d`,
    title: Fe[e],
    meta: `Protéine du nucléosome`,
    tip: [t.role, `Riche en lysine/arginine (basique)`],
    rows: [
      [`Type`, e === `H1` ? `Histone de liaison` : `Histone de cœur`],
      [`Rôle`, t.role],
      [`Charge`, `Basique (Lys/Arg)`],
      [`Modifications`, t.mod],
    ],
  };
}
function Be(e) {
  let t = Le[e];
  return { kind: `structure`, chip: t.chip, chipBg: t.chipBg, chipColor: `#06090d`, title: t.title, meta: t.meta, tip: t.tip, rows: t.rows, note: t.note, size: t.size };
}
function Ve(e, t, n, r, i) {
  let a = Me[e],
    o = e === `G` || e === `C` ? 3 : 2,
    s = [
      [`Type de base`, je[e]],
      [`Brin`, t === 0 ? `Sens (5′→3′)` : `Complémentaire`],
      [`Squelette`, `Phosphate — désoxyribose`],
      [`Liaisons H`, o + ` (avec ` + a + `)`],
    ];
  if (t === 0 && i) {
    let e = Math.floor(n / 3) * 3,
      t = i.slice(e, e + 3);
    t.length === 3 && s.push([`Codon ` + (Math.floor(n / 3) + 1), t + ` → ` + (Ie[t] || `?`)]);
  }
  return {
    kind: `base`,
    chip: e,
    chipBg: z.base[e],
    chipColor: `#06090d`,
    title: Ae[e],
    meta: je[e] + ` · position ` + (n + 1) + ` / ` + r,
    tip: [(t === 0 ? `Brin sens (5′→3′)` : `Brin complémentaire (3′→5′)`) + ` · n°` + (n + 1), `Apparié à ` + a + ` (` + Ae[a] + `) — ` + o + ` liaisons H`],
    rows: s,
    pair: { a: e, b: a, aColor: z.base[e], bColor: z.base[a], nH: o, text: o + ` liaisons hydrogène` + (o === 3 ? ` (G≡C)` : ` (A=T)`) },
  };
}
function He(e) {
  let t = e.el;
  return {
    kind: `atom`,
    chip: t,
    chipBg: z.CPK[t],
    chipColor: t === `H` ? `#06090d` : `#fff`,
    title: Ne[t],
    meta: (Pe[e.role] || ``) + ` · nucléotide ` + e.base,
    tip: [Pe[e.role] || ``, `Nucléotide ` + e.base + ` · brin ` + (e.strand === 0 ? `sens` : `complémentaire`)],
    rows: [
      [`Élément`, Ne[t] + ` (` + t + `)`],
      [`Partie`, Pe[e.role] || `—`],
      [`Base portée`, e.base + ` · ` + Ae[e.base]],
      [`Brin`, e.strand === 0 ? `Sens (5′→3′)` : `Complémentaire`],
    ],
  };
}
var Ue = new F(0, 1, 0);
function We(e, t, n = 6, r = !1) {
  return new o(new N(e, r, `catmullrom`, 0.5), Math.max(8, Math.round(e.length * 1.25)), t, n, r);
}
function Ge(e, t = {}) {
  let { hr: n = 0.8, bbR: r = 0.16, rungR: i = 0.1, twist: a = 8, rungsPerTurn: o = 10, rad: s = 6 } = t,
    c = new N(e, !1, `catmullrom`, 0.5);
  c.arcLengthDivisions = 400;
  let l = Math.max(60, Math.round(e.length * 7)),
    u = c.computeFrenetFrames(l, !1),
    d = [],
    f = [],
    p = [];
  for (let e = 0; e <= l; e++) {
    let t = e / l,
      r = c.getPointAt(t),
      i = u.normals[e],
      o = u.binormals[e];
    p.push(r);
    let s = a * Math.PI * 2 * t,
      m = Math.cos(s),
      h = Math.sin(s);
    d.push(new F(r.x + (i.x * m + o.x * h) * n, r.y + (i.y * m + o.y * h) * n, r.z + (i.z * m + o.z * h) * n));
    let g = Math.cos(s + Math.PI),
      _ = Math.sin(s + Math.PI);
    f.push(new F(r.x + (i.x * g + o.x * _) * n, r.y + (i.y * g + o.y * _) * n, r.z + (i.z * g + o.z * _) * n));
  }
  let m = ye([We(d, r, s), We(f, r, s)], !1),
    h = Math.max(1, Math.round(l / (a * o))),
    g = [];
  for (let e = 0; e <= l; e += h) g.push(We([d[e], p[e], f[e]], i, 5));
  return { backbones: m, rungs: ye(g, !1) };
}
function Ke(e, t = 2) {
  return new O(e, t);
}
function qe() {
  let e = 0.5,
    t = 0.25,
    n = 0.14,
    r = [];
  r.push(new u(1e-4, -0.25), new u(e - n, -0.25));
  for (let t = 1; t <= 6; t++) {
    let i = -Math.PI / 2 + (t / 6) * (Math.PI / 2);
    r.push(new u(e - n + Math.cos(i) * n, -0.10999999999999999 + Math.sin(i) * n));
  }
  for (let i = 1; i <= 6; i++) {
    let a = (i / 6) * (Math.PI / 2);
    r.push(new u(e - n + Math.cos(a) * n, t - n + Math.sin(a) * n));
  }
  r.push(new u(1e-4, t));
  let i = new S(r, 24);
  return (i.computeVertexNormals(), i);
}
function Je() {
  return {
    coreGeo: qe(),
    coreMat: L(R.core, { rough: 0.45, clear: 0.45, env: 0.8 }),
    ringGeo: new x(0.62, 0.18, 12, 32),
    ringMat: L(R.backbone, { rough: 0.36, clear: 0.6, env: 0.85 }),
    linkGeo: new j(0.075, 0.075, 1, 8, 1, !0),
    linkMat: L(7312296, { rough: 0.5, env: 0.7 }),
  };
}
function Ye(e, t) {
  let n = De((e * 2654435761) >>> 0),
    r = [],
    i = n() < 0.5,
    a = 0,
    o = 0,
    s = 0;
  for (let e = 0; e < 13; e++) {
    (a >= 2 + Math.floor(n() * 2) && ((i = !i), (a = 0), (o += (n() - 0.5) * 7), (s += (n() - 0.5) * 7)), a++);
    let c = i ? 1.1 : 4.3,
      l = new F(o + (n() - 0.5) * c, 10.5 * 0.5 - e * 0.875, s + (n() - 0.5) * c),
      u = new F(n() - 0.5, n() - 0.5, n() - 0.5).normalize(),
      d = Math.abs(u.y) > 0.85 ? new F(1, 0, 0) : new F(0, 1, 0),
      f = new F().crossVectors(u, d).normalize(),
      p = new F().crossVectors(u, f).normalize(),
      m = (i ? 0.85 + 0.55 * n() : 2.3 + 2 * n()) * (1 + t),
      h = (0.6 + 0.34 * n()) * Math.PI * 2,
      g = n() * Math.PI * 2;
    for (let e = 0; e <= 22; e++) {
      let t = g + (e / 22) * h;
      r.push(
        l
          .clone()
          .addScaledVector(f, Math.cos(t) * m)
          .addScaledVector(p, Math.sin(t) * m),
      );
    }
  }
  return r;
}
function Xe(e, t) {
  let r = new N(e, !1, `catmullrom`, 0.5);
  r.arcLengthDivisions = 1e3;
  let a = r.getLength(),
    s = Math.max(t.minN || 40, Math.min(t.maxN || 700, Math.round(a * (t.density || 2.4)))),
    c = r.computeFrenetFrames(s, !1),
    l = [],
    u = [],
    d = t.perTurn || 6,
    f = t.coilR;
  for (let e = 0; e <= s; e++) {
    let t = e / s,
      n = r.getPoint(t),
      i = c.normals[e],
      a = c.binormals[e],
      o = (e * Math.PI * 2) / d,
      p = new F().addScaledVector(i, Math.cos(o)).addScaledVector(a, Math.sin(o)).normalize();
    (l.push(n.clone().addScaledVector(p, f)), u.push(p));
  }
  let m = new P(),
    h = l.length,
    g = new D(t.coreGeo, t.coreMat, h);
  g.frustumCulled = !1;
  let _ = t.withRing ? new D(t.ringGeo, t.ringMat, h) : null;
  _ && (_.frustumCulled = !1);
  let v = new i(),
    y = new p(),
    b = new p(),
    x = new F(0, 0, 1),
    S = t.discScale || 1;
  for (let e = 0; e < h; e++)
    (y.setFromUnitVectors(Ue, u[e]),
      v.position.copy(l[e]),
      v.quaternion.copy(y),
      v.scale.setScalar(S),
      v.updateMatrix(),
      g.setMatrixAt(e, v.matrix),
      _ && (b.setFromUnitVectors(x, u[e]), v.quaternion.copy(b), v.scale.setScalar(S), v.updateMatrix(), _.setMatrixAt(e, v.matrix)));
  ((g.instanceMatrix.needsUpdate = !0), m.add(g), _ && ((_.instanceMatrix.needsUpdate = !0), m.add(_)));
  let C = null;
  return (
    t.tubeMat && ((C = new n(new o(new N(l, !1, `catmullrom`, 0.5), Math.min(700, h * 2), t.tubeR || 0.06, 6, !1), t.tubeMat)), m.add(C)),
    { group: m, pos: l, cores: g, rings: _, tube: C, mid: Math.floor(h / 2) }
  );
}
function Ze(e = 0) {
  let t = new P(),
    n = new P();
  t.add(n);
  let { coreGeo: r, coreMat: i, ringGeo: a, ringMat: o } = Je(),
    s = L(9416918, { op: 0.5, rough: 0.5, env: 0.6 }),
    c = Xe(Ye(7, e), { coilR: 0.86, perTurn: 7, density: 3.7, maxN: 800, discScale: 0.8, coreGeo: r, coreMat: i, ringGeo: a, ringMat: o, withRing: !0, tubeMat: s, tubeR: 0.1 });
  (n.add(c.group), n.position.copy(c.pos[c.mid]).multiplyScalar(-1));
  let l = () => Be(`chromosome`);
  ((c.cores.userData.getInfo = l), c.rings && (c.rings.userData.getInfo = l), c.tube && (c.tube.userData.getInfo = l));
  let u = [c.cores];
  (c.rings && u.push(c.rings), c.tube && u.push(c.tube));
  let d = c.pos[c.mid],
    f = c.pos[Math.floor(c.pos.length * 0.2)].clone().sub(d),
    p = c.pos[Math.floor(c.pos.length * 0.8)].clone().sub(d);
  return {
    group: t,
    pickables: u,
    anchors: [
      { p: [0, 0, 0.15], text: `point de plongée`, cls: `tag` },
      { p: [f.x, f.y, f.z], text: `territoire chromosomique`, cls: `tag` },
      { p: [p.x, p.y, p.z], text: `fibre de chromatine enroulée`, cls: `` },
    ],
  };
}
var Qe = new F(0.22, 1, 0.16).normalize();
function $e() {
  let e = (Math.PI * 2) / 6,
    t = new F(1, 0, 0),
    n = new F(0, 1, 0),
    r = new F(0, 0, 1),
    a = new P(),
    { coreGeo: o, coreMat: s, ringGeo: c, ringMat: l, linkGeo: u, linkMat: d } = Je(),
    f = new D(o, s, 26);
  f.frustumCulled = !1;
  let m = new D(c, l, 26);
  m.frustumCulled = !1;
  let h = new D(u, d, 25);
  ((h.frustumCulled = !1), a.add(f, m, h));
  let g = 0.62,
    _ = [];
  {
    let e = Math.PI * (3 - Math.sqrt(5));
    for (let t = 0; t < 7; t++) {
      let n = 1 - (2 * (t + 0.5)) / 7,
        r = Math.sqrt(Math.max(0, 1 - n * n)),
        i = e * t;
      _.push(new F(Math.cos(i) * r, n, Math.sin(i) * r).normalize());
    }
  }
  let v = new T(0.055, g, 5);
  v.translate(0, g / 2, 0);
  let y = new D(v, L(13208502, { rough: 0.6, clear: 0.2, env: 0.5, op: 0.9 }), 182);
  ((y.frustumCulled = !1), a.add(y));
  let b = new F(0, 0, 1),
    x = new p().setFromUnitVectors(Ue, Qe),
    S = new p().setFromUnitVectors(b, Qe),
    C = new i(),
    w = -1,
    ee = -1,
    E = new p(),
    O = new p(),
    k = new p(),
    te = new p(),
    A = new F(),
    j = new F(),
    M = new p();
  function ne(i, a) {
    let o = 0.18 + I(i, 0, 1) * 0.74,
      s = [],
      c = [],
      l = [],
      u = 0;
    for (let i = 0; i < 26; i++) {
      let a = i / 25,
        d = Oe(I((a - o) / 0.12 + 0.5, 0, 1)),
        f = 1.9 * (1 - d) + 0.42 * d;
      i > 0 && (u += f);
      let p = i * e,
        m = 1.55 * d,
        h = 0.24 * (1 - d) * Math.sin(a * 26 * 0.7);
      (s.push(
        t
          .clone()
          .multiplyScalar(u)
          .addScaledVector(n, Math.cos(p) * m + h)
          .addScaledVector(r, Math.sin(p) * m),
      ),
        c.push(d),
        l.push(p));
    }
    let d = s[2].clone();
    for (let e of s) e.sub(d).multiplyScalar(a);
    return { pos: s, cis: c, angs: l };
  }
  function N(e, t = 0) {
    if (((e = I(e, 0, 1)), (t = Math.max(0, t || 0)), w >= 0 && Math.abs(e - w) < 0.0015 && Math.abs(t - ee) < 0.0015)) return;
    ((w = e), (ee = t));
    let i = 1 + t * 1,
      { pos: a, cis: o, angs: s } = ne(e, i);
    for (let e = 0; e < 26; e++) {
      let t = o[e];
      (A.copy(n).multiplyScalar(Math.cos(s[e])).addScaledVector(r, Math.sin(s[e])).normalize(),
        E.setFromUnitVectors(Ue, A),
        k.copy(x).slerp(E, t),
        O.setFromUnitVectors(b, A),
        te.copy(S).slerp(O, t),
        C.position.copy(a[e]),
        C.quaternion.copy(k),
        C.scale.set(1, 1, 1),
        C.updateMatrix(),
        f.setMatrixAt(e, C.matrix),
        C.quaternion.copy(te),
        C.updateMatrix(),
        m.setMatrixAt(e, C.matrix));
      for (let t = 0; t < 7; t++)
        (j.copy(_[t]).applyQuaternion(k),
          M.setFromUnitVectors(Ue, j),
          C.position.copy(a[e]).addScaledVector(j, 0.42),
          C.quaternion.copy(M),
          C.scale.set(1, 1, 1),
          C.updateMatrix(),
          y.setMatrixAt(e * 7 + t, C.matrix));
    }
    for (let e = 0; e < 25; e++) {
      let t = a[e],
        n = a[e + 1],
        r = new F().subVectors(n, t),
        i = r.length() || 1e-4;
      (r.normalize(), C.position.copy(t).addScaledVector(r, i / 2), C.quaternion.setFromUnitVectors(Ue, r), C.scale.set(1, i, 1), C.updateMatrix(), h.setMatrixAt(e, C.matrix));
    }
    ((f.instanceMatrix.needsUpdate = !0), (m.instanceMatrix.needsUpdate = !0), (h.instanceMatrix.needsUpdate = !0), (y.instanceMatrix.needsUpdate = !0));
  }
  N(0);
  let re = () =>
    w < 0.5
      ? Be(`fibre30`)
      : {
          kind: `structure`,
          chip: `⊷`,
          chipBg: z.struct,
          chipColor: `#06090d`,
          title: `ADN nucléosomal`,
          meta: `≈ 147 pb`,
          tip: [`ADN enroulé autour de l’octamère`, `≈ 147 pb sur ~1,65 tour`],
          rows: [[`Longueur`, `≈ 147 pb`]],
        };
  return (
    (f.userData.getInfo = () => Be(w < 0.5 ? `fibre30` : `nucleosome`)),
    (m.userData.getInfo = re),
    (h.userData.getInfo = () => ({
      kind: `structure`,
      chip: `⊷`,
      chipBg: z.struct,
      chipColor: `#06090d`,
      title: `ADN de liaison`,
      meta: `Entre deux nucléosomes`,
      tip: [`ADN reliant les nucléosomes`, `≈ 20–80 pb (souvent ~50 pb)`],
      rows: [
        [`Longueur`, `≈ 50 pb`],
        [`Rôle`, `espace les nucléosomes`],
      ],
    })),
    (y.userData.getInfo = () => ({
      kind: `structure`,
      chip: `⌇`,
      chipBg: `#c98bb6`,
      chipColor: `#1a0713`,
      title: `Queues d’histones`,
      meta: `Extrémités N-terminales`,
      tip: [`Émergent du cœur de l’octamère`, `Portent les marques épigénétiques`],
      rows: [
        [`Nature`, `extrémités N-term des histones`],
        [`Modifications`, `acétylation · méthylation…`],
        [`Rôle`, `régulent la compaction de la chromatine`],
      ],
    })),
    { group: a, setFold: N, getFold: () => w, pickables: [f, m, h, y], anchors: [] }
  );
}
function et() {
  return [
    { t: `H3`, p: [0.55, 0.55, 0.45] },
    { t: `H3`, p: [-0.55, -0.55, -0.45] },
    { t: `H4`, p: [1.05, -0.35, 0.55] },
    { t: `H4`, p: [-1.05, 0.35, -0.55] },
    { t: `H2A`, p: [1.95, 0.85, -0.15] },
    { t: `H2A`, p: [-1.95, -0.85, 0.15] },
    { t: `H2B`, p: [1.55, -1.55, 0.1] },
    { t: `H2B`, p: [-1.55, 1.55, -0.1] },
  ];
}
function tt(e = 0, t = 1) {
  let r = new P(),
    i = De((t * 22695477 + e * 97) >>> 0),
    a = [];
  for (let t of et()) {
    let i;
    if (e === 1) {
      i = Ke(1.12, 3);
      let e = i.attributes.position,
        n = new F();
      for (let r = 0; r < e.count; r++) {
        n.fromBufferAttribute(e, r);
        let i = 1 + 0.16 * Ee(n.x * 1.6 + t.p[0], n.y * 1.6 + t.p[1], n.z * 1.6 + t.p[2]);
        (n.multiplyScalar(i), e.setXYZ(r, n.x, n.y, n.z * 0.78));
      }
      i.computeVertexNormals();
    } else ((i = Ke(1.08, 3)), i.scale(1, 1, 0.78));
    let o = L(R[t.t], { rough: e === 1 ? 0.55 : 0.45, clear: 0.45, ccr: 0.25, env: 0.8 }),
      s = new n(i, o);
    (s.position.set(t.p[0], t.p[1], t.p[2]), (s.userData.spreadBase = s.position.clone()), (s.userData.getInfo = () => ze(t.t)), r.add(s), a.push(s));
  }
  let o = 3.35,
    s = [];
  for (let e = 0; e <= 150; e++) {
    let t = e / 150,
      n = -1.67 * Math.PI * 2 * t;
    s.push(new F(Math.cos(n) * o, Math.sin(n) * o, (t - 0.5) * 2.5));
  }
  let c = s[0].clone().sub(s[2]).normalize(),
    l = [];
  for (let e = 5; e >= 1; e--) l.push(s[0].clone().add(c.clone().multiplyScalar(0.55 * e)));
  let u = s[150].clone().sub(s[148]).normalize(),
    d = [];
  for (let e = 1; e <= 5; e++) d.push(s[150].clone().add(u.clone().multiplyScalar(0.55 * e)));
  let f = [...l, ...s, ...d],
    p = Ge(f, { hr: 0.62, bbR: 0.16, rungR: 0.11, twist: f.length * 0.62, rungsPerTurn: 9, rad: 7 }),
    m = L(R.backbone, { rough: 0.34, clear: 0.6, env: 0.85 }),
    h = L(7312296, { rough: 0.5, env: 0.7 }),
    g = new n(p.backbones, m),
    _ = new n(p.rungs, h);
  ((g.userData.getInfo = () => ({
    kind: `structure`,
    chip: `⊷`,
    chipBg: z.struct,
    chipColor: `#06090d`,
    title: `ADN nucléosomal`,
    meta: `≈ 147 pb · ~1,65 tour`,
    tip: [`ADN enroulé autour de l’octamère`, `≈ 147 pb sur ~1,65 tour gauche`],
    rows: [
      [`Longueur`, `≈ 147 pb`],
      [`Tours`, `≈ 1,65 (gauche)`],
    ],
  })),
    (_.userData.getInfo = g.userData.getInfo),
    r.add(g, _),
    a.push(g, _));
  let v = L(R.H1, { rough: 0.5, clear: 0.4, env: 0.75 }),
    y = new n(Ke(0.85, 3), v);
  (y.position.set(o * 0.96, -0.2, -2.5 * 0.5 - 0.7), y.scale.set(1, 0.8, 0.8), (y.userData.spreadBase = y.position.clone()), (y.userData.getInfo = () => ze(`H1`)), r.add(y), a.push(y));
  let b = [`H3`, `H4`, `H2A`, `H2B`, `H3`, `H2A`];
  for (let e = 0; e < b.length; e++) {
    let t = (e / b.length) * Math.PI * 2 + 0.4,
      o = new F(Math.cos(t) * 2, Math.sin(t) * 2, (i() - 0.5) * 1.2),
      s = [o.clone()],
      c = o.clone(),
      l = o.clone().normalize();
    for (let e = 0; e < 4; e++)
      ((l.x += (i() - 0.5) * 0.5), (l.y += (i() - 0.5) * 0.5), (l.z += (i() - 0.5) * 0.5), l.normalize(), (c = c.clone().add(l.clone().multiplyScalar(0.55))), s.push(c.clone()));
    let u = L(R[b[e]], { rough: 0.6, env: 0.6 }),
      d = new n(We(s, 0.05, 5), u);
    ((d.userData.getInfo = () => ({
      kind: `structure`,
      chip: `⌇`,
      chipBg: z.struct,
      chipColor: `#06090d`,
      title: `Queue d’histone`,
      meta: `Extrémité N-terminale`,
      tip: [`Queue flexible riche en lysine`, `Site des marques épigénétiques`],
      rows: [
        [`Nature`, `extrémité N-terminale`],
        [`Modifications`, `acétylation, méthylation…`],
      ],
    })),
      r.add(d),
      a.push(d));
  }
  return (
    r.quaternion.setFromUnitVectors(new F(0, 0, 1), Qe),
    {
      group: r,
      pickables: a,
      anchors: [
        { p: [-2.2, -2, 0.5], text: `octamère d’histones`, cls: `tag` },
        { p: [0.2, 1.7, 1.2], text: `H3`, cls: `k` },
        { p: [1.9, 0.5, 1.2], text: `H4`, cls: `k` },
        { p: [2.4, 1.5, 0.3], text: `H2A`, cls: `k` },
        { p: [1.9, -1.9, 0.5], text: `H2B`, cls: `k` },
        { p: [3.2, 2.2, 0.2], text: `ADN ≈ 1,7 tour`, cls: `` },
        { p: [3, -1.2, -2.1], text: `histone H1`, cls: `` },
        { p: [-1.9, 2.8, 0.6], text: `queues d’histones`, cls: `tag` },
      ],
    }
  );
}
var B = { R: 2.4, RISE: 0.46, TWIST: 0.595, PHI: 2.42, HAND: -1, IN: 0.74, capR: 0.165, PURINE: { A: !0, G: !0 }, ATR: { C: 0.17, N: 0.17, O: 0.155, P: 0.235, H: 0.105 } };
function nt(e, t) {
  return new F(B.R * Math.cos(e), t, B.HAND * B.R * Math.sin(e));
}
function rt(e) {
  let t = new P(),
    r = e.length,
    i = (r - 1) * B.RISE,
    a = [],
    s = L(R.backbone, { rough: 0.34, clear: 0.6, ccr: 0.2, env: 0.85 });
  for (let e of [0, B.PHI]) {
    let a = [];
    for (let t = 0; t <= (r - 1) * 12; t++) {
      let n = t / 12,
        r = n * B.TWIST + e,
        o = -i / 2 + n * B.RISE;
      a.push(new F(B.R * Math.cos(r), o, B.HAND * B.R * Math.sin(r)));
    }
    let c = new N(a, !1, `catmullrom`, 0.5);
    t.add(new n(new o(c, Math.max(8, a.length), 0.12, 14, !1), s));
  }
  let c = {
      A: L(R.base.A, { rough: 0.4, clear: 0.55, env: 0.5 }),
      T: L(R.base.T, { rough: 0.4, clear: 0.55, env: 0.5 }),
      G: L(R.base.G, { rough: 0.4, clear: 0.55, env: 0.5 }),
      C: L(R.base.C, { rough: 0.4, clear: 0.55, env: 0.5 }),
    },
    l = 2 * B.R * Math.sin(B.PHI / 2),
    u = new C(B.capR, Math.max(0.05, l / 2 - 2 * B.capR), 8, 18),
    d = (e, r, i, o) => {
      let s = new n(u, i),
        c = new F().subVectors(r, e),
        l = c.length();
      (c.normalize(), s.position.copy(e).addScaledVector(c, l / 2), s.quaternion.setFromUnitVectors(Ue, c), (s.userData.getInfo = () => o), t.add(s), a.push(s));
    };
  for (let t = 0; t < r; t++) {
    let n = t * B.TWIST,
      a = -i / 2 + t * B.RISE,
      o = nt(n, a),
      s = nt(n + B.PHI, a),
      l = o.clone().add(s).multiplyScalar(0.5),
      u = e[t],
      f = Me[u];
    (d(o, l, c[u], Ve(u, 0, t, r, e)), d(l, s, c[f], Ve(f, 1, t, r, e)));
  }
  return (
    (t.userData.capGeo = u),
    {
      group: t,
      pickables: a,
      anchors: [
        { p: [B.R + 0.5, i * 0.32, 0], text: `squelette sucre-phosphate`, cls: `` },
        { p: [0, -0.2, B.R + 0.4], text: `paires de bases · A·T / G·C`, cls: `` },
        { p: [-B.R - 0.4, -i * 0.34, 0], text: `≈ 2 nm de diamètre`, cls: `tag` },
      ],
    }
  );
}
function it(e) {
  if (B.PURINE[e]) {
    let t = [
        [`N`, 1.2, 0.3],
        [`C`, 1.35, 0.85],
        [`N`, 1.9, 0.9],
        [`C`, 2.05, 0.4],
        [`C`, 1.65, 0.05],
        [`N`, 1.85, -0.45],
        [`C`, 2.35, -0.55],
        [`N`, 2.65, -0.1],
        [`C`, 2.5, 0.45],
      ],
      n = [
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 8],
        [8, 3],
        [3, 4],
        [4, 0],
        [0, 1],
        [1, 2],
        [2, 3],
      ];
    (t.push([e === `G` ? `O` : `N`, 2.82, 0.92]), n.push([8, 9]));
    let r;
    return (
      e === `G`
        ? (t.push([`N`, 2.55, -1.05]),
          n.push([6, 10]),
          (r = [
            [2.95, 0.85],
            [2.8, 0.05],
            [2.65, -0.7],
          ]))
        : (r = [
            [2.88, 0.78],
            [2.78, 0.05],
          ]),
      { atoms: t, bonds: n, attach: 0, anchors: r, center: [2, 0.05] }
    );
  } else {
    let t = [
        [`N`, 1.1, 0],
        [`C`, 1.3, -0.45],
        [`C`, 1.8, -0.5],
        [`C`, 2.15, -0.1],
        [`N`, 1.95, 0.4],
        [`C`, 1.45, 0.45],
        [`O`, 1.3, 0.95],
      ],
      n = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 0],
        [5, 6],
      ];
    (t.push([e === `C` ? `N` : `O`, 2.6, 0.15]), n.push([3, 7]));
    let r;
    return (
      e === `C`
        ? (t.push([`H`, 2.3, -0.9]),
          (r = [
            [2.55, 0.2],
            [2.35, -0.1],
            [2.18, 0.5],
          ]))
        : (t.push([`C`, 2.05, -1]),
          n.push([2, 8]),
          (r = [
            [2.5, -0.05],
            [2.28, 0.45],
          ])),
      { atoms: t, bonds: n, attach: 0, anchors: r, center: [1.7, 0] }
    );
  }
}
function at(e, t, n, r, i) {
  let a = new F().subVectors(t, e).normalize(),
    o = new F().crossVectors(Ue, a).normalize(),
    s = (t, n, r) => new F(e.x + a.x * t + o.x * r, e.y + n, e.z + a.z * t + o.z * r),
    c = `phosphate`,
    l = (e, t) => {
      (r.atoms[e].push(t), r.meta[e].push({ el: e, role: c, base: n, strand: i.strand, i: i.i }));
    },
    u = (e, t) => r.bonds.push([e, t]);
  c = `phosphate`;
  let d = s(0, 0, 0);
  l(`P`, d);
  let f = s(-0.16, 0.34, 0.24),
    p = s(-0.16, -0.32, 0.26);
  (l(`O`, f), l(`O`, p), u(d, f), u(d, p), (c = `sucre`));
  let m = [
    [`C`, 1.04, 0],
    [`O`, 0.75, 0.4],
    [`C`, 0.28, 0.25],
    [`C`, 0.28, -0.25],
    [`C`, 0.75, -0.4],
  ].map(([e, t, n]) => {
    let r = s(t, n, 0);
    return (l(e, r), r);
  });
  for (let e = 0; e < 5; e++) u(m[e], m[(e + 1) % 5]);
  u(m[2], d);
  let h = s(0.1, -0.62, 0);
  (l(`O`, h), u(m[3], h), (c = `base`));
  let g = it(n),
    _ = B.IN,
    v = g.atoms.map(([e, t, n]) => {
      let r = s(t * _, 0, n * _);
      return (l(e, r), r);
    });
  return (
    g.bonds.forEach(([e, t]) => u(v[e], v[t])),
    u(m[0], v[g.attach]),
    {
      anchors: g.anchors.map(([e, t]) => s(e * _, 0, t * _)),
      labelPos: s(g.center[0] * _, 0.62, g.center[1] * _),
      labelChar: n,
      Ppos: d,
      sugarPos: s(0.55, 0, 0),
      basePos: s(g.center[0] * _, 0, g.center[1] * _),
    }
  );
}
function ot(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 128), (t.height = 88));
  let n = t.getContext(`2d`);
  ((n.fillStyle = z.base[e] || `#444`),
    ((e, t, r, i, a) => {
      (n.beginPath(), n.moveTo(e + a, t), n.arcTo(e + r, t, e + r, t + i, a), n.arcTo(e + r, t + i, e, t + i, a), n.arcTo(e, t + i, e, t, a), n.arcTo(e, t, e + r, t, a), n.closePath());
    })(8, 8, 112, 72, 18),
    n.fill(),
    (n.lineWidth = 6),
    (n.strokeStyle = `rgba(255,255,255,.92)`),
    n.stroke(),
    (n.fillStyle = `#fff`),
    (n.font = `bold 58px "IBM Plex Sans", sans-serif`),
    (n.textAlign = `center`),
    (n.textBaseline = `middle`),
    n.fillText(e, 64, 47));
  let r = new k(t);
  r.colorSpace = c;
  let i = new s({ map: r, transparent: !0, depthWrite: !1 });
  i.userData.baseOpacity = 1;
  let a = new b(i);
  return (a.scale.set(0.7, 0.48, 1), a);
}
function st(e) {
  let t = `500 30px "IBM Plex Mono", monospace`,
    n = document.createElement(`canvas`).getContext(`2d`);
  n.font = t;
  let r = Math.ceil(n.measureText(e).width) + 40,
    i = document.createElement(`canvas`);
  ((i.width = r), (i.height = 56));
  let a = i.getContext(`2d`);
  ((a.fillStyle = `rgba(12,16,21,.9)`),
    ((e, t, n, r, i) => {
      (a.beginPath(), a.moveTo(e + i, t), a.arcTo(e + n, t, e + n, t + r, i), a.arcTo(e + n, t + r, e, t + r, i), a.arcTo(e, t + r, e, t, i), a.arcTo(e, t, e + n, t, i), a.closePath());
    })(2, 2, r - 4, 52, 13),
    a.fill(),
    (a.lineWidth = 2.5),
    (a.strokeStyle = `rgba(255,255,255,.32)`),
    a.stroke(),
    (a.font = t),
    (a.fillStyle = `#eef3f8`),
    (a.textAlign = `center`),
    (a.textBaseline = `middle`),
    a.fillText(e, r / 2, 29));
  let o = new k(i);
  o.colorSpace = c;
  let l = new s({ map: o, transparent: !0, depthWrite: !1, depthTest: !1 });
  l.userData.baseOpacity = 1;
  let u = new b(l);
  return (u.scale.set(r / 200, 56 / 200, 1), u);
}
function ct(e, t = {}) {
  let r = new P(),
    a = e.length,
    s = [],
    c = { atoms: { C: [], N: [], O: [], P: [], H: [] }, meta: { C: [], N: [], O: [], P: [], H: [] }, bonds: [], hdots: [] },
    l = Math.floor((a - 1) / 2),
    u = t.win ?? 2,
    d = Math.max(0, l - u),
    f = Math.min(a - 1, l + u),
    p = (a - 1) * B.RISE,
    m = null;
  for (let t = d; t <= f; t++) {
    let n = t * B.TWIST,
      i = -p / 2 + t * B.RISE,
      a = nt(n, i),
      o = nt(n + B.PHI, i),
      s = e[t],
      u = Me[s],
      d = at(a, o, s, c, { i: t, strand: 0 }),
      f = at(o, a, u, c, { i: t, strand: 1 }),
      h = Math.min(d.anchors.length, f.anchors.length);
    for (let e = 0; e < h; e++) {
      let t = d.anchors[e],
        n = f.anchors[e],
        r = new F().subVectors(n, t),
        i = r.length(),
        a = Math.max(2, Math.round(i / 0.17));
      for (let e = 1; e < a; e++) c.hdots.push(t.clone().addScaledVector(r, e / a));
    }
    ([d, f].forEach((e) => {
      let t = ot(e.labelChar);
      (t.position.copy(e.labelPos), r.add(t));
    }),
      t === l && (m = d));
  }
  if (f > d) {
    let e = L(10467014, { rough: 0.4, env: 0.7 });
    for (let t of [0, B.PHI]) {
      let i = [];
      for (let e = d * 12; e <= f * 12; e++) {
        let n = e / 12,
          r = n * B.TWIST + t,
          a = -p / 2 + n * B.RISE;
        i.push(new F(B.R * Math.cos(r), a, B.HAND * B.R * Math.sin(r)));
      }
      let a = new N(i, !1, `catmullrom`, 0.5);
      r.add(new n(new o(a, Math.max(8, i.length), 0.085, 12, !1), e));
    }
  }
  let h = new de(1, 16, 12),
    g = new i();
  for (let e of [`C`, `N`, `O`, `P`, `H`]) {
    let t = c.atoms[e];
    if (!t.length) continue;
    let n = new D(h, L(R.CPK[e], { rough: 0.36, clear: 0.45, env: 0.85 }), t.length),
      i = B.ATR[e];
    (t.forEach((e, t) => {
      (g.position.copy(e), g.scale.set(i, i, i), g.rotation.set(0, 0, 0), g.updateMatrix(), n.setMatrixAt(t, g.matrix));
    }),
      (n.instanceMatrix.needsUpdate = !0),
      (n.frustumCulled = !1));
    let a = c.meta[e];
    ((n.userData.getInfo = (e) => He(a[e])), r.add(n), s.push(n));
  }
  if (c.bonds.length) {
    let e = new D(new j(1, 1, 1, 8, 1, !0), L(12765906, { rough: 0.5, env: 0.7 }), c.bonds.length),
      t = 0.052;
    (c.bonds.forEach(([n, r], i) => {
      let a = new F().subVectors(r, n),
        o = a.length();
      (a.normalize(), g.position.copy(n).addScaledVector(a, o / 2), g.quaternion.setFromUnitVectors(Ue, a), g.scale.set(t, o, t), g.updateMatrix(), e.setMatrixAt(i, g.matrix));
    }),
      (e.instanceMatrix.needsUpdate = !0),
      (e.frustumCulled = !1),
      r.add(e));
  }
  if (t.hbond !== !1 && c.hdots.length) {
    let e = new de(1, 10, 8),
      t = new v({ color: 15660024, emissive: 7309990, emissiveIntensity: 0.4, roughness: 0.6, transparent: !0 });
    t.userData.baseOpacity = 1;
    let n = new D(e, t, c.hdots.length);
    (c.hdots.forEach((e, t) => {
      (g.position.copy(e), g.scale.set(0.045, 0.045, 0.045), g.rotation.set(0, 0, 0), g.updateMatrix(), n.setMatrixAt(t, g.matrix));
    }),
      (n.instanceMatrix.needsUpdate = !0),
      (n.frustumCulled = !1),
      r.add(n));
  }
  let _ = [];
  if (t.annot && m) {
    let e = (e) => {
        let t = new F(e.x, 0, e.z);
        return t.lengthSq() < 1e-4 ? Ue.clone() : t.normalize();
      },
      t = (e, t, n) => {
        let i = st(e),
          a = t.clone().add(n);
        (i.position.copy(a), r.add(i));
        let o = new re().setFromPoints([t, a]),
          s = new ue({ color: 12766422, transparent: !0, depthTest: !1 });
        ((s.userData.baseOpacity = 0.9), r.add(new se(o, s)));
      };
    (t(`groupe phosphate`, m.Ppos, e(m.Ppos).multiplyScalar(1).add(Ue.clone().multiplyScalar(1.5))),
      t(`sucre · désoxyribose`, m.sugarPos, e(m.sugarPos).multiplyScalar(2.3).add(Ue.clone().multiplyScalar(-0.4))),
      t(`base azotée`, m.basePos, Ue.clone().multiplyScalar(2.1).add(e(m.basePos).multiplyScalar(0.6))));
  } else
    _.push(
      { p: [4.4, 2.2, 0], text: `phosphate (P)`, cls: `` },
      { p: [2.6, -1.4, 2.4], text: `désoxyribose`, cls: `` },
      { p: [0.3, 0.5, 0.7], text: `liaisons H · A·T (2) / G·C (3)`, cls: `` },
      { p: [-3.4, -2.6, 0], text: `bases azotées (N)`, cls: `tag` },
    );
  return { group: r, pickables: s, anchors: _ };
}
var lt = document.getElementById(`stage`),
  ut = document.getElementById(`mount`),
  dt = document.getElementById(`bgLayer`),
  ft = document.getElementById(`bgLayerCell`),
  V = new l({ antialias: !0, alpha: !0, powerPreference: `high-performance`, preserveDrawingBuffer: !0 });
(V.setPixelRatio(Math.min(devicePixelRatio, 2)),
  V.setSize(innerWidth, innerHeight),
  V.setClearColor(0, 0),
  (V.toneMapping = 4),
  (V.toneMappingExposure = 1),
  (V.outputColorSpace = c),
  (V.localClippingEnabled = !0),
  ut.appendChild(V.domElement));
var pt = new d(),
  mt = new A(34, innerWidth / innerHeight, 0.05, 400);
mt.position.set(2, 0.8, 14.5);
function ht() {
  let e = document.createElement(`canvas`);
  ((e.width = 512), (e.height = 256));
  let t = e.getContext(`2d`),
    n = t.createLinearGradient(0, 0, 0, 256);
  (n.addColorStop(0, `#eef0f2`),
    n.addColorStop(0.42, `#c4d2de`),
    n.addColorStop(0.5, `#dde6ee`),
    n.addColorStop(0.58, `#8ea2b3`),
    n.addColorStop(1, `#222d36`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 512, 256));
  let r = t.createRadialGradient(360, 60, 8, 360, 60, 150);
  (r.addColorStop(0, `rgba(255,255,255,.6)`), r.addColorStop(1, `rgba(255,255,255,0)`), (t.fillStyle = r), t.fillRect(0, 0, 512, 256));
  let i = new k(e);
  return ((i.mapping = 303), (i.colorSpace = c), i);
}
var gt = new m(V);
((pt.environment = gt.fromEquirectangular(ht()).texture), gt.dispose());
var _t = new oe(16777215, 1.55);
(_t.position.set(-5, 9, 8), pt.add(_t));
var vt = new oe(12375295, 0.5);
(vt.position.set(8, -3, 5), pt.add(vt));
var yt = new oe(16777215, 0.85);
(yt.position.set(-4, 5, -9), pt.add(yt), pt.add(new M(15660280, 1712940, 0.45)));
var bt = new P();
pt.add(bt);
var xt = new ve(mt, V.domElement);
((xt.enableDamping = !0), (xt.dampingFactor = 0.08), (xt.enablePan = !1), (xt.enableZoom = !1), (xt.autoRotate = !0), (xt.autoRotateSpeed = 0.9), xt.target.set(0, 0, 0));
var H = [],
  St = 8.6;
function Ct(e) {
  e.updateMatrixWorld(!0);
  let t = new ae(),
    n = !1;
  (e.traverse((e) => {
    (e.isMesh || e.isInstancedMesh) && e.geometry && (t.expandByObject(e), (n = !0));
  }),
    (!n || t.isEmpty()) && t.setFromObject(e));
  let r = new F();
  return (t.getSize(r), Math.max(r.x, r.y, r.z) || 1);
}
function wt(e, t, n, r, i, a) {
  let o = i.group;
  ((o.visible = !1), bt.add(o));
  let s = St / Ct(o);
  H.push({ name: e, shortLabel: t, scaleLabel: n, V: r, group: o, baseScale: s, pickables: i.pickables || [], anchors: i.anchors || [], factsKey: a, alpha: 0, labelAlpha: 0 });
}
var Tt = `GCTAGCATCGGATTACCGTAGCTAGGCATCGA`,
  Et = 0;
function U(e) {
  let t = Math.random(),
    n = Math.random(),
    r = e * Math.cbrt(Math.random()),
    i = Math.acos(2 * n - 1),
    a = 2 * Math.PI * t;
  return new F(r * Math.sin(i) * Math.cos(a), r * Math.sin(i) * Math.sin(a), r * Math.cos(i));
}
function Dt(e, t) {
  let n = [],
    r = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < e; i++) {
    let a = 1 - (i / (e - 1)) * 2,
      o = Math.sqrt(Math.max(0, 1 - a * a)),
      s = r * i;
    n.push(new F(Math.cos(s) * o, a, Math.sin(s) * o).multiplyScalar(t));
  }
  return n;
}
function Ot(e, t, n, r) {
  let i = e.attributes.position,
    a = new F(),
    o = new F();
  for (let e = 0; e < i.count; e++) {
    (a.fromBufferAttribute(i, e), o.copy(a).normalize());
    let s = Math.sin(o.x * n + r) * Math.cos(o.y * n * 1.3 + r);
    ((s += 0.5 * Math.sin(o.y * n * 2.1 + r * 2) * Math.cos(o.z * n * 1.7 + r)), (s += 0.25 * Math.sin(o.z * n * 3.3 + r * 3)));
    let c = a.length() * (1 + t * s);
    (a.copy(o).multiplyScalar(c), i.setXYZ(e, a.x, a.y, a.z));
  }
  ((i.needsUpdate = !0), e.computeVertexNormals());
}
function kt(e, t, n, r) {
  let i = [],
    a = t;
  for (let t = 0; t <= 22; t++) {
    let n = (t / 22) * a;
    i.push(new u(e * Math.sin(n), e * Math.cos(n)));
  }
  let o = new u(e * Math.sin(a), e * Math.cos(a)),
    s = new u((e - n) * Math.sin(a), (e - n) * Math.cos(a)),
    c = o.clone().add(s).multiplyScalar(0.5),
    l = o.clone().sub(s).multiplyScalar(0.5),
    d = new u(Math.sin(a), Math.cos(a));
  for (let e = 1; e < 8; e++) {
    let t = (e / 8) * Math.PI;
    i.push(
      c
        .clone()
        .addScaledVector(l, Math.cos(t))
        .addScaledVector(d, n * 0.5 * Math.sin(t)),
    );
  }
  for (let t = 0; t <= 22; t++) {
    let r = a * (1 - t / 22);
    i.push(new u((e - n) * Math.sin(r), (e - n) * Math.cos(r)));
  }
  let f = new S(i, r, 0, Math.PI * 2);
  return (f.computeVertexNormals(), f);
}
function At() {
  let e = new de(0.021, 12, 9),
    t = new de(0.014, 10, 7);
  return (e.scale(1, 0.88, 1), t.scale(1, 0.9, 1), t.translate(0.006, 0.02, -0.003), ye([e, t]));
}
var jt = {
  envelope: {
    chip: `◯`,
    title: `Enveloppe nucléaire`,
    meta: `Double membrane du noyau`,
    tip: [`2 membranes : interne et externe`, `Chacune est une bicouche de phospholipides`],
    rows: [
      [`Structure`, `2 membranes (interne, externe)`],
      [`Chaque membrane`, `bicouche de phospholipides`],
      [`Percée de`, `pores nucléaires`],
    ],
  },
  pores: {
    chip: `⊙`,
    title: `Pores nucléaires`,
    meta: `Passages de l’enveloppe`,
    tip: [`« Trous » dans l’enveloppe nucléaire`, `Là où les 2 membranes se rejoignent`],
    rows: [
      [`Définition`, `« trous » de l’enveloppe`],
      [`Formation`, `les 2 membranes se rejoignent`],
      [`Rôle`, `échanges noyau ↔ cytoplasme`],
    ],
  },
  nucleolus: {
    chip: `●`,
    title: `Nucléole`,
    meta: `Synthèse de l’ARNr`,
    tip: [`« Organite » sans membrane, dans le noyau`, `Synthétise l’ARN ribosomique (ARNr)`],
    rows: [
      [`Nature`, `structure sans membrane`],
      [`Composition`, `chromatine + protéines`],
      [`Produit`, `sous-unités des ribosomes`],
    ],
  },
  chromatin: {
    chip: `⦿`,
    title: `Chromatine (ADN)`,
    meta: `ADN + histones`,
    tip: [`ADN enroulé autour d’histones, décondensé`, `Condensée au maximum = chromosome`],
    rows: [
      [`Composition`, `ADN + protéines (histones)`],
      [`État`, `décondensé`],
      [`Condensée au max.`, `chromosome`],
    ],
  },
  erRough: {
    chip: `▤`,
    title: `Réticulum endoplasmique rugueux`,
    meta: `Citernes tapissées de ribosomes`,
    tip: [`Citernes empilées, continues avec l’enveloppe externe`, `Face cytosolique couverte de ribosomes`],
    rows: [
      [`Structure`, `sacs membranaires aplatis (citernes)`],
      [`Continuité`, `enveloppe nucléaire externe`],
      [`Rôle`, `synthèse des protéines par les ribosomes`],
      [`Ribosomes`, `arrimés à la face cytosolique`],
    ],
  },
  erSmooth: {
    chip: `〰`,
    title: `Réticulum endoplasmique lisse`,
    meta: `Tubules sans ribosomes`,
    tip: [`Réseau de tubules ramifiés`, `Prolonge le RE rugueux, dépourvu de ribosomes`],
    rows: [
      [`Structure`, `tubules ramifiés`],
      [`Rôle`, `synthèse des lipides · stockage du calcium`],
      [`Ribosomes`, `absents`],
    ],
  },
};
function Mt(e) {
  let t = jt[e];
  return { kind: `structure`, chip: t.chip, chipBg: `#b48ce6`, chipColor: `#0b0518`, title: t.title, meta: t.meta, tip: t.tip, rows: t.rows };
}
var Nt = new e(new F(0, -1, 0), 0),
  Pt = { R: 3.4, sy: 0.9 },
  Ft = { cy: -0.5, r: 1.5 },
  It = 1,
  Lt = 0;
function Rt() {
  return Pt.R * Pt.sy * (1 - It * 0.95);
}
var zt = new e(new F(0, -1, 0), 1e6),
  Bt = { rim: null, group: null };
function Vt(e, t, n, r, i, a) {
  let o = new g({
    uniforms: { colInner: { value: new ie(e) }, colRim: { value: new ie(t) }, baseAlpha: { value: n }, rimPow: { value: r }, time: { value: 0 }, uOpacity: { value: 1 } },
    vertexShader: `#include <clipping_planes_pars_vertex>
varying vec3 vN; varying vec3 vV;
void main(){
  vec4 wp=modelMatrix*vec4(position,1.0);
  vN=normalize(mat3(modelMatrix)*normal); vV=normalize(cameraPosition-wp.xyz);
  vec4 mvPosition=viewMatrix*wp; gl_Position=projectionMatrix*mvPosition;
  #include <clipping_planes_vertex>
}`,
    fragmentShader: `#include <clipping_planes_pars_fragment>
uniform vec3 colInner; uniform vec3 colRim; uniform float baseAlpha; uniform float rimPow; uniform float time; uniform float uOpacity;
varying vec3 vN; varying vec3 vV;
void main(){
  #include <clipping_planes_fragment>
  vec3 N=normalize(vN), V=normalize(vV);
  float f=1.0-abs(dot(N,V)); float rim=pow(clamp(f,0.0,1.0),rimPow);
  vec3 col=mix(colInner,colRim,rim);
  col+=0.04*vec3(sin(vN.x*7.0+time),sin(vN.y*7.0+time*1.2),sin(vN.z*7.0+time*0.8));
  float a=mix(baseAlpha,0.9,rim)*uOpacity;
  gl_FragColor=vec4(col,a);
}`,
    transparent: !0,
    depthWrite: !1,
    side: i || 2,
    clipping: !0,
    clippingPlanes: [a || Nt],
  });
  return ((o.userData.baseOpacity = 1), o);
}
var W = {
    membrane: `#df7f68`,
    cytoplasm: `#8f6fb0`,
    noyau: `#5f83cf`,
    nucleole: `#e8b24a`,
    erRough: `#bf6c97`,
    erSmooth: `#d3a6db`,
    golgi: `#6273c9`,
    mitochondria: `#5f93c8`,
    centrioles: `#3fb6c9`,
    lysosomes: `#7b57c0`,
    peroxisomes: `#6f93d8`,
    vesicles: `#8d9ee6`,
    vacuole: `#67b7cc`,
    cytoskeleton: `#c6b8ee`,
    ribosomes: `#c65a97`,
  },
  Ht = {
    membrane: {
      title: `Membrane plasmique`,
      meta: `Barrière sélective`,
      tip: [`Bicouche de phospholipides + protéines`, `Délimite la cellule ; structure dynamique`],
      rows: [
        [`Composition`, `bicouche de phospholipides`],
        [`Contient aussi`, `des protéines`],
        [`Propriétés`, `sélective et dynamique`],
      ],
    },
    cytoplasm: {
      title: `Cytoplasme`,
      meta: `Milieu interne`,
      tip: [`Cytosol : substance semi-liquide (« gelée »)`, `Cytoplasme = cytosol + organites`],
      rows: [
        [`Définition`, `cytosol + organites`],
        [`Cytosol`, `remplit la cellule`],
        [`Chez`, `toutes les cellules`],
      ],
    },
    noyau: {
      title: `Noyau`,
      meta: `Siège de l’ADN`,
      tip: [`Entouré d’une enveloppe nucléaire`, `Contient chromatine, nucléole et lamina`],
      rows: [
        [`Contenu`, `chromatine, nucléole, lamina`],
        [`Milieu interne`, `nucléoplasme`],
        [`Eucaryotes`, `ADN dans une double membrane`],
      ],
    },
    nucleole: {
      title: `Nucléole`,
      meta: `Synthèse de l’ARNr`,
      tip: [`« Organite » sans membrane, dans le noyau`, `Synthétise l’ARN ribosomique (ARNr)`],
      rows: [
        [`Nature`, `structure sans membrane`],
        [`Composition`, `chromatine + protéines`],
        [`Produit`, `sous-unités des ribosomes`],
      ],
    },
    erRough: {
      title: `Réticulum endoplasmique rugueux`,
      meta: `Synthèse des protéines`,
      tip: [`Doit son nom aux ribosomes liés à sa surface`, `Protéines membranaires, d’organites, excrétées`],
      rows: [
        [`Nom dû à`, `ribosomes liés à sa surface`],
        [`Rôle`, `synthèse de protéines`],
        [`Destination`, `membrane, organites, excrétion`],
      ],
    },
    erSmooth: {
      title: `Réticulum endoplasmique lisse`,
      meta: `Lipides et détoxication`,
      tip: [`Synthèse des lipides, stockage du calcium`, `Métabolisme des glucides, désintoxication`],
      rows: [
        [`Synthèse`, `lipides`],
        [`Stockage`, `calcium`],
        [`Désintoxication`, `médicaments, drogues, poisons`],
      ],
    },
    golgi: {
      title: `Appareil de Golgi`,
      meta: `Tri et expédition`,
      tip: [`Saccules empilés recevant les vésicules du RE`, `Modifie, entrepose et expédie les molécules`],
      rows: [
        [`Structure`, `saccules empilés`],
        [`Reçoit`, `vésicules de transport du RE`],
        [`Fabrique`, `certains polysaccharides`],
      ],
    },
    mitochondria: {
      title: `Mitochondries`,
      meta: `Production d’ATP`,
      tip: [`Respiration cellulaire : glucides + O₂ → ATP`, `Double membrane et ADN circulaire propre`],
      rows: [
        [`Rôle`, `créer de l’ATP`],
        [`Processus`, `respiration cellulaire`],
        [`Endosymbiose`, `double membrane, ADN circulaire`],
      ],
    },
    centrioles: {
      title: `Centrioles (centrosome)`,
      meta: `Organise les microtubules`,
      tip: [`Zone près du noyau où naissent les microtubules`, `Contient 2 centrioles ; cellules animales`],
      rows: [
        [`Centrosome`, `zone de formation des microtubules`],
        [`Contient`, `une paire de centrioles`],
        [`Un centriole`, `9 triplets de microtubules`],
      ],
    },
    lysosomes: {
      title: `Lysosomes`,
      meta: `Digestion cellulaire`,
      tip: [`Enzymes hydrolytiques en milieu acide`, `Bourgeonnent à partir de l’appareil de Golgi`],
      rows: [
        [`Contenu`, `enzymes hydrolytiques`],
        [`Milieu`, `acide`],
        [`Surtout dans`, `les cellules animales`],
      ],
    },
    peroxisomes: {
      title: `Peroxysomes`,
      meta: `Détoxication cellulaire`,
      tip: [`Transfère de l’hydrogène à l’O₂ → H₂O₂`, `La catalase transforme ce H₂O₂ en eau`],
      rows: [
        [`Produit`, `peroxyde d’hydrogène (H₂O₂)`],
        [`Enzyme`, `catalase : H₂O₂ → eau`],
        [`Fonctions`, `acides gras, détoxifier l’alcool`],
      ],
    },
    vesicles: {
      title: `Vésicules`,
      meta: `Transport de molécules`,
      tip: [`Vésicules de transport du RE vers le Golgi`, `Naissent par bourgeonnement d’une membrane`],
      rows: [
        [`Rôle`, `transporter des molécules`],
        [`Trajet`, `RE → appareil de Golgi`],
        [`Origine`, `bourgeonnement (ex. Golgi)`],
      ],
    },
    vacuole: {
      title: `Vacuole`,
      meta: `Stockage et réserve`,
      tip: [`Vacuole centrale : stockage et croissance`, `Aussi : de réserve, pulsatile, digestive`],
      rows: [
        [`Centrale`, `Végétaux : stockage, croissance`],
        [`De réserve`, `nutriments, toxiques, pigments`],
        [`Digestive`, `se forme après phagocytose`],
      ],
    },
    cytoskeleton: {
      title: `Cytosquelette`,
      meta: `Soutien et forme`,
      tip: [`Soutien mécanique, modèle la forme de la cellule`, `Points d’ancrage de nombreux organites`],
      rows: [
        [`Rôles`, `soutien, forme, ancrage`],
        [`Composants`, `microfilaments, microtubules`],
        [`Et aussi`, `filaments intermédiaires`],
      ],
    },
    ribosomes: {
      title: `Ribosomes libres`,
      meta: `Synthèse des protéines`,
      tip: [`Faits d’ARNr et de protéines spécifiques`, `Libres dans le cytosol ou liés au RE rugueux`],
      rows: [
        [`Composition`, `ARNr + protéines`],
        [`Libres`, `protéines pour le cytosol`],
        [`Liés au RER`, `protéines excrétées, membranes`],
      ],
    },
  };
function Ut(e) {
  let t = Ht[e];
  return { kind: `structure`, chip: `●`, chipBg: W[e] || `#df7f68`, chipColor: `#0b0518`, title: t.title, meta: t.meta, tip: t.tip, rows: t.rows };
}
function Wt() {
  let e = new P(),
    t = [];
  Bt.group = e;
  let a = Pt.R,
    s = Pt.sy,
    c = a - 0.22,
    l = (e) => {
      e.onBeforeRender = () => {
        let t = e.material;
        ((t.uniforms.uOpacity.value = t.opacity), (t.uniforms.time.value = performance.now() * 0.001), (t.depthWrite = !1));
      };
    },
    u = (e, t, n, r, i, a) => {
      let o = Object.assign({ color: e, emissive: t || `#000000`, emissiveIntensity: n || 0, roughness: r ?? 0.6, metalness: 0.02, transparent: !0 }, i || {}),
        s = new v(o);
      return ((s.clippingPlanes = [a || Nt]), (s.userData.baseOpacity = o.opacity == null ? 1 : o.opacity), s);
    },
    d = (e, n) => ((e.userData.structure = n), (e.userData.getInfo = () => Ut(n)), t.push(e), e),
    m = (e, n, r) => ((e.userData.structure = r), (e.userData.getInfo = () => Mt(n)), t.push(e), e),
    h = (e, t) => new F(Math.sin(e) * Math.cos(t), Math.cos(e), Math.sin(e) * Math.sin(t)),
    g = new P();
  e.add(g);
  let _ = new O(a, 26);
  (Ot(_, 0.02, 3.1, 2.4), _.scale(1, s, 1));
  let y = new n(_, Vt(W.membrane, `#f0b09f`, 0.5, 1.7, 0));
  ((y.renderOrder = 8), l(y), d(y, `membrane`), g.add(y));
  let b = new O(c, 24);
  (Ot(b, 0.022, 3.3, 8.1), b.scale(1, s, 1));
  let S = new n(b, Vt(`#7a4f70`, `#c79ab0`, 0.34, 2.2, 1));
  ((S.renderOrder = 7), l(S), d(S, `cytoplasm`), g.add(S));
  let C = u(`#e79684`, `#7a2f22`, 0.16, 0.5, { side: 2 });
  C.clippingPlanes = [];
  let w = new n(new x(1, 0.14, 14, 140), C);
  ((w.rotation.x = Math.PI / 2), (w.userData.structure = `membrane`), (w.userData.getInfo = () => Ut(`membrane`)), g.add(w), t.push(w), (Bt.rim = w));
  let T = new P();
  e.add(T);
  let E = (e, t, n, r, i) => {
    let a = new Float32Array(e * 3);
    for (let n = 0; n < e; n++) {
      let e = U(t);
      ((a[n * 3] = e.x), (a[n * 3 + 1] = e.y * s), (a[n * 3 + 2] = e.z));
    }
    let o = new re();
    o.setAttribute(`position`, new ne(a, 3));
    let c = new f({ color: i, size: n, transparent: !0, opacity: r, depthWrite: !1, sizeAttenuation: !0 });
    ((c.userData.baseOpacity = r), (c.clippingPlanes = [Nt]), T.add(new te(o, c)));
  };
  (E(3400, 3, 0.03, 0.34, `#b7a3e6`), E(700, 3, 0.1, 0.14, `#cabcf0`), E(240, 2.9, 0.26, 0.06, `#8f6fb0`));
  let k = new F(0.25, -0.5, -0.2),
    A = 1.5,
    M = new P();
  (M.position.copy(k), e.add(M));
  let ae = new O(A, 20);
  Ot(ae, 0.026, 4, 6.3);
  let oe = new n(ae, Vt(W.noyau, `#d3dcff`, 0.2, 2, void 0, zt));
  ((oe.renderOrder = 18), l(oe), m(oe, `envelope`, `nuc_env`), M.add(oe));
  let se = new O(A * 0.9, 18);
  Ot(se, 0.028, 4.4, 11.1);
  let ce = new n(se, Vt(W.noyau, `#bcacff`, 0.16, 2.5, void 0, zt));
  ((ce.renderOrder = 17), l(ce), m(ce, `envelope`, `nuc_env`), M.add(ce));
  let le = u(`#3f57ab`, `#22326f`, 0.4, 0.5, { metalness: 0.15, opacity: 0.96 }, zt),
    ue = new D(new x(0.1, 0.036, 8, 16), le, 64);
  ue.frustumCulled = !1;
  let de = new i();
  (Dt(64, A * 0.99).forEach((e, t) => {
    (de.position.copy(e), de.lookAt(0, 0, 0), de.updateMatrix(), ue.setMatrixAt(t, de.matrix));
  }),
    (ue.instanceMatrix.needsUpdate = !0),
    m(ue, `pores`, `nuc_pores`),
    M.add(ue));
  let fe = new O(0.5, 4);
  Ot(fe, 0.13, 5, 7.7);
  let pe = new n(fe, u(W.nucleole, `#c47a10`, 0.5, 0.7, {}, zt));
  (pe.position.set(0.26, -0.18, 0.14), m(pe, `nucleolus`, `nuc_nucleolus`), M.add(pe));
  let me = u(`#ffffff`, `#332a70`, 0.14, 0.4, { opacity: 0.92 }, zt),
    he = u(`#8fb0ff`, `#33407a`, 0.16, 0.55, { opacity: 0.6 }, zt),
    ge = new O(1, 2),
    _e = [],
    ve = [],
    be = [`#7aa2ff`, `#9d7bff`, `#8fb0ff`, `#b98cff`],
    xe = new ie();
  for (let e = 0; e < 7; e++) {
    let t = 4 + Math.floor(Math.random() * 3),
      r = [];
    for (let e = 0; e < t; e++) r.push(U(A * 0.82));
    let i = new N(r, !1, `catmullrom`, 0.5),
      a = new n(new o(i, 120, 0.011, 5, !1), he);
    (m(a, `chromatin`, `nuc_chromatin`), M.add(a));
    let s = i.getLength(),
      c = Math.max(5, Math.floor(s / 0.14)),
      l = be[e % be.length];
    for (let e = 0; e <= c; e++) (_e.push({ p: i.getPoint(e / c), s: 0.044 + Math.random() * 0.02 }), xe.set(l).offsetHSL(0, 0, (Math.random() - 0.5) * 0.14), ve.push(xe.clone()));
  }
  let Se = new D(ge, me, _e.length);
  Se.frustumCulled = !1;
  let Ce = new i();
  (_e.forEach((e, t) => {
    (Ce.position.copy(e.p),
      Ce.scale.setScalar(e.s),
      Ce.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      Ce.updateMatrix(),
      Se.setMatrixAt(t, Ce.matrix),
      Se.setColorAt(t, ve[t]));
  }),
    (Se.instanceMatrix.needsUpdate = !0),
    Se.instanceColor && (Se.instanceColor.needsUpdate = !0),
    m(Se, `chromatin`, `nuc_chromatin`),
    M.add(Se));
  let we = new P();
  M.add(we);
  let Te = u(W.erRough, `#6e2a4d`, 0.32, 0.5, { side: 2 }),
    Ee = u(W.ribosomes, `#3a0f28`, 0.24, 0.28, { metalness: 0.05 }),
    De = At(),
    I = (e, r) => {
      let a = new p().setFromUnitVectors(new F(0, 1, 0), e.clone().normalize()),
        s = new P();
      (s.quaternion.copy(a), we.add(s));
      let c = [],
        l = [];
      for (let e = 0; e < r.NC; e++) {
        let i = r.r0 + e * r.dr,
          a = r.cap0 - e * r.dcap,
          o = kt(i, a, 0.11, 56);
        Ot(o, 0.006, 5.2, r.seed + e * 1.7);
        let u = new n(o, Te);
        ((u.renderOrder = 14),
          (u.userData.structure = `erRough`),
          (u.userData.getInfo = () => Ut(`erRough`)),
          s.add(u),
          t.push(u),
          c.push({ r: i, cap: a }),
          l.push(h(a * 0.82, e * 1.4).multiplyScalar(i - 0.04)));
      }
      for (let e = 0; e < l.length - 1; e++) {
        let r = new n(
          new o(
            new N([
              l[e],
              l[e]
                .clone()
                .lerp(l[e + 1], 0.5)
                .multiplyScalar(1.01),
              l[e + 1],
            ]),
            14,
            0.05,
            6,
            !1,
          ),
          Te,
        );
        ((r.userData.structure = `erRough`), (r.userData.getInfo = () => Ut(`erRough`)), s.add(r), t.push(r));
      }
      let u = [];
      c.forEach(({ r: e, cap: t }) => {
        let n = Math.floor(130 * t * Math.sqrt(e) * r.riboScale);
        for (let r = 0; r < n; r++) {
          let n = h(Math.random() * t * 0.99, Math.random() * Math.PI * 2);
          u.push({ p: n.clone().multiplyScalar(e + 0.008), nrm: n, s: 0.8 + Math.random() * 0.3 });
        }
      });
      let d = new D(De, Ee, u.length),
        f = new i(),
        m = new F(0, 1, 0);
      return (
        u.forEach((e, t) => {
          (f.position.copy(e.p), f.quaternion.setFromUnitVectors(m, e.nrm.clone().normalize()), f.rotateY(Math.random() * 6.28), f.scale.setScalar(e.s), f.updateMatrix(), d.setMatrixAt(t, f.matrix));
        }),
        (d.userData.structure = `erRough`),
        (d.userData.getInfo = () => Ut(`erRough`)),
        s.add(d),
        t.push(d),
        { cl: s, cist: c }
      );
    };
  I(new F(0.85, -0.45, 0.5), { NC: 5, r0: 1.72, dr: 0.15, cap0: 0.9, dcap: 0.05, riboScale: 1, seed: 4 });
  let Oe = I(new F(-0.8, -0.4, -0.5), { NC: 4, r0: 1.66, dr: 0.15, cap0: 0.82, dcap: 0.05, riboScale: 0.8, seed: 17 }),
    ke = u(W.erSmooth, `#43203a`, 0.24, 0.55, { opacity: 0.96 }),
    L = new P();
  Oe.cl.add(L);
  let R = Oe.cist[Oe.cist.length - 1],
    z = [];
  for (let e = 0; e < 9; e++) {
    let r = (e / 9) * Math.PI * 2 + Math.random() * 0.4,
      i = h(R.cap * (0.55 + Math.random() * 0.28), r),
      a = i.clone().multiplyScalar(R.r + 0.05),
      s = [a.clone()],
      c = i
        .clone()
        .multiplyScalar(0.42)
        .add(new F(0, -0.15, 0))
        .normalize();
    for (let e = 0; e < 4; e++) {
      let e = c
        .clone()
        .multiplyScalar(0.26 + Math.random() * 0.26)
        .add(U(1).normalize().multiplyScalar(0.2));
      ((a = a.clone().add(e)), a.length() > 2.5 && a.setLength(2.5), s.push(a.clone()), z.push(a.clone()));
    }
    let l = new n(new o(new N(s, !1, `catmullrom`, 0.4), 60, 0.07, 8, !1), ke);
    ((l.userData.structure = `erSmooth`), (l.userData.getInfo = () => Ut(`erSmooth`)), L.add(l), t.push(l));
  }
  for (let e = 0; e < z.length; e++)
    for (let r = e + 1; r < z.length; r++) {
      let i = z[e].distanceTo(z[r]);
      if (i > 0.3 && i < 0.95 && Math.random() < 0.22) {
        let i = z[e].clone().lerp(z[r], 0.5).add(U(1).normalize().multiplyScalar(0.12)),
          a = new n(new o(new N([z[e], i, z[r]]), 24, 0.055, 6, !1), ke);
        ((a.userData.structure = `erSmooth`), (a.userData.getInfo = () => Ut(`erSmooth`)), L.add(a), t.push(a));
      }
    }
  let Ae = new P();
  (Ae.position.set(-1.95, -1.35, 0.75), Ae.rotation.set(0.5, 0.4, -0.35), e.add(Ae));
  let je = u(W.golgi, `#2a3576`, 0.2, 0.5, { side: 2, opacity: 0.96 }),
    Me = u(`#c3ccff`, `#3a4890`, 0.3, 0.45, { side: 2 });
  for (let e = 0; e < 6; e++) {
    let t = kt(1.5 - e * 0.05, 0.42, 0.05, 44);
    Ot(t, 0.006, 6, e * 2.1);
    let r = new n(t, e >= 4 ? Me : je);
    (r.scale.setScalar(0.8), (r.position.y = e * 0.17 - 0.42), d(r, `golgi`), Ae.add(r));
  }
  let Ne = new O(1, 2),
    Pe = u(`#8d9ee6`, `#2a3576`, 0.16, 0.5, { opacity: 0.9 });
  for (let e = 0; e < 10; e++) {
    let t = new n(Ne, Pe),
      r = Math.random() * 6.28,
      i = 0.5 + Math.random() * 0.35;
    (t.position.set(Math.cos(r) * i, (e / 10) * 0.95 - 0.55, Math.sin(r) * i), t.scale.setScalar(0.05 + Math.random() * 0.07), d(t, `golgi`), Ae.add(t));
  }
  [
    { p: [-1.5, -1, 1.5], L: 0.6, R: 0.29, e: [0.4, 0.9, 0.2] },
    { p: [1.9, -1.7, -1.1], L: 0.55, R: 0.27, e: [1.1, 0.3, 0.6] },
    { p: [-1.9, -1.5, -0.4], L: 0.5, R: 0.25, e: [0.2, 1.4, 0.9] },
    { p: [0.3, -1.9, 1.6], L: 0.56, R: 0.27, e: [0.7, 0.5, 1.3] },
    { p: [1.7, -2, -0.7], L: 0.5, R: 0.25, e: [1.3, 1, 0.3] },
    { p: [-0.7, -1.7, 2], L: 0.48, R: 0.24, e: [0.3, 0.2, 0.8] },
  ].forEach((t, r) => {
    let i = new P();
    (i.position.set(t.p[0], t.p[1], t.p[2]), i.rotation.set(t.e[0], t.e[1], t.e[2]), e.add(i));
    let a = new O(1, 4);
    (Ot(a, 0.05, 6, r * 3.7), a.scale(t.L, t.R, t.R));
    let s = new n(a, Vt(`#4f86bf`, `#bcd6f5`, 0.62, 1.9));
    ((s.renderOrder = 16), l(s), d(s, `mitochondria`), i.add(s));
    let c = u(`#9fc2ec`, `#26507e`, 0.35, 0.55, { side: 2, opacity: 0.96 });
    for (let e = 0; e < 2; e++) {
      let r = [],
        a = (e === 0 ? 0.42 : -0.42) * t.R;
      for (let e = 0; e <= 8; e++) {
        let n = (-0.72 + (e / 8) * 1.44) * t.L,
          i = (e % 2 ? 0.6 : -0.6) * t.R * 0.72;
        r.push(new F(n, i, a + (Math.random() - 0.5) * 0.03));
      }
      let s = new n(new o(new N(r, !1, `catmullrom`, 0.4), 80, (0.045 * t.R) / 0.28, 6, !1), c);
      ((s.userData.structure = `mitochondria`), (s.userData.getInfo = () => Ut(`mitochondria`)), i.add(s));
    }
  });
  let Fe = new P();
  (Fe.position.set(-0.4, -0.5, 1.35), Fe.rotation.set(0.3, 0.4, 0.1), e.add(Fe));
  let Ie = u(W.centrioles, `#0c5763`, 0.42, 0.35, { metalness: 0.25 }),
    Le = (e, t) => {
      let r = new P();
      for (let e = 0; e < 9; e++) {
        let t = (e / 9) * Math.PI * 2,
          i = new n(new j(0.026, 0.026, 0.4, 7), Ie);
        (i.position.set(Math.cos(t) * 0.15, 0, Math.sin(t) * 0.15), (i.rotation.z = 0.34), (i.rotation.y = t), d(i, `centrioles`), r.add(i));
      }
      return (r.quaternion.copy(e), r.position.copy(t), r);
    };
  (Fe.add(Le(new p(), new F(0, 0, 0))), Fe.add(Le(new p().setFromEuler(new ee(Math.PI / 2, 0, 0)), new F(0.34, 0.05, 0.22))));
  let Re = (e) => {
      for (let t = 0; t < 50; t++) {
        let t = U(1).normalize(),
          n = 1 + Math.random() * 1.9,
          r = new F(t.x * n, (t.y * 0.55 - 0.55) * n * s, t.z * n);
        if (!(r.y > Rt() - 0.2) && !(r.length() > a - 0.4) && !(r.distanceTo(k) < (e || 0) + A + 0.12)) return r;
      }
      return new F((Math.random() - 0.5) * 2, -1.8, (Math.random() - 0.5) * 2);
    },
    ze = new O(1, 3),
    Be = new r(1, 0),
    Ve = u(W.lysosomes, `#2a1656`, 0.26, 0.82),
    He = u(`#b9a6ff`, `#4a2f8a`, 0.4, 0.6);
  for (let t = 0; t < 8; t++) {
    let t = Re(0.2),
      r = 0.14 + Math.random() * 0.1,
      i = new n(ze, Ve);
    (i.position.copy(t), i.scale.setScalar(r), d(i, `lysosomes`), e.add(i));
    for (let i = 0; i < 3; i++) {
      let i = new n(ze, He);
      (i.position.copy(t).add(
        U(1)
          .normalize()
          .multiplyScalar(r * 0.5),
      ),
        i.scale.setScalar(r * 0.2),
        e.add(i));
    }
  }
  let Ue = u(W.peroxisomes, `#1f2f66`, 0.2, 0.5, { opacity: 0.62 }),
    We = u(`#dfeaff`, `#8fb0ff`, 0.5, 0.3);
  for (let t = 0; t < 6; t++) {
    let t = Re(0.15),
      r = 0.12 + Math.random() * 0.07,
      i = new n(ze, Ue);
    (i.position.copy(t), i.scale.setScalar(r), d(i, `peroxisomes`), e.add(i));
    let a = new n(Be, We);
    (a.position.copy(t), a.scale.setScalar(r * 0.42), a.rotation.set(Math.random() * 6, Math.random() * 6, 0), e.add(a));
  }
  let Ge = u(W.vesicles, `#2a3576`, 0.16, 0.5, { opacity: 0.9 });
  for (let t = 0; t < 14; t++) {
    let t = Re(0.1),
      r = 0.07 + Math.random() * 0.1,
      i = new n(ze, Ge);
    (i.position.copy(t), i.scale.setScalar(r), d(i, `vesicles`), e.add(i));
  }
  let Ke = u(W.vacuole, `#20505f`, 0.14, 0.35, { opacity: 0.34 }),
    qe = Vt(W.vacuole, `#cdeef4`, 0.28, 2);
  [
    [1.75, -1.25, 0.9, 0.6],
    [-1.35, -1.95, -0.95, 0.42],
  ].forEach((r) => {
    let i = new O(r[3], 3);
    Ot(i, 0.05, 4, r[0] * 3);
    let a = new n(i, Ke);
    (a.position.set(r[0], r[1], r[2]), d(a, `vacuole`), e.add(a));
    let o = new n(new O(r[3] * 1.02, 3), qe);
    (o.position.set(r[0], r[1], r[2]), (o.renderOrder = 15), l(o), (o.userData.structure = `vacuole`), (o.userData.getInfo = () => Ut(`vacuole`)), e.add(o), t.push(o));
  });
  let Je = new P();
  e.add(Je);
  let Ye = u(W.cytoskeleton, `#5a4a8e`, 0.18, 0.6, { opacity: 0.8 }),
    Xe = u(`#d8ccf4`, `#5a4a8e`, 0.16, 0.6, { opacity: 0.62 }),
    Ze = new F(-0.4, -0.5, 1.35),
    Qe = [],
    $e = [];
  for (let e = 0; e < 15; e++) {
    let e = U(1).normalize();
    e.y = e.y * 0.7 - 0.35;
    let t = new F(e.x * 2.8, Math.min(Rt() - 0.3, e.y * 2.5), e.z * 2.8),
      n = Ze.clone().lerp(t, 0.5).add(U(1).normalize().multiplyScalar(0.25)),
      r = new N([Ze.clone(), n, t]);
    Qe.push(new o(r, 30, 0.006, 5, !1));
  }
  for (let e = 0; e < 18; e++) {
    let e = U(1).normalize(),
      t = -0.5 - Math.random() * 0.7,
      n = new F(e.x, t, e.z).normalize().multiplyScalar(2.7);
    ((n.y *= s), n.y > Rt() - 0.3 && (n.y = Rt() - 0.3));
    let r = new F(-e.z, 0, e.x).normalize(),
      i = n.clone().addScaledVector(r, -0.4).add(U(1).normalize().multiplyScalar(0.1)),
      a = n.clone().addScaledVector(r, 0.4).add(U(1).normalize().multiplyScalar(0.1)),
      c = new N([i, n.clone().add(U(1).normalize().multiplyScalar(0.08)), a]);
    $e.push(new o(c, 16, 0.0034, 4, !1));
  }
  let et = new n(ye(Qe), Ye);
  ((et.userData.structure = `cytoskeleton`), (et.userData.getInfo = () => Ut(`cytoskeleton`)), Je.add(et), t.push(et));
  let tt = new n(ye($e), Xe);
  ((tt.userData.structure = `cytoskeleton`), (tt.userData.getInfo = () => Ut(`cytoskeleton`)), Je.add(tt), t.push(tt));
  let B = u(W.ribosomes, `#3a0f28`, 0.2, 0.28, { metalness: 0.05 }),
    nt = new D(At(), B, 260),
    rt = new i();
  for (let e = 0; e < 260; e++) {
    let t = U(1).normalize(),
      n = 0.9 + Math.random() * 2,
      r = new F(t.x * n, Math.min(Rt() - 0.1, (t.y * 0.6 - 0.4) * n * s), t.z * n);
    if (r.distanceTo(k) < 1.55) {
      let e = r.clone().sub(k).normalize().multiplyScalar(1.6);
      r.copy(k).add(e);
    }
    (rt.position.copy(r), rt.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6), rt.scale.setScalar(0.75 + Math.random() * 0.45), rt.updateMatrix(), nt.setMatrixAt(e, rt.matrix));
  }
  return ((nt.userData.structure = `ribosomes`), (nt.userData.getInfo = () => Ut(`ribosomes`)), e.add(nt), t.push(nt), Gt(), { group: e, pickables: t, anchors: [] });
}
function Gt() {
  let e = Rt();
  if (Bt.rim) {
    let t = (t) => {
        let n = e / (t * Pt.sy);
        return Math.abs(n) >= 0.999 ? 0.04 : t * Math.sqrt(1 - n * n);
      },
      n = t(Pt.R),
      r = t(Pt.R - 0.22),
      i = (n + r) / 2,
      a = Math.max(0.08, (n - r) / 2 + 0.05);
    (Bt.rim.geometry.dispose(), (Bt.rim.geometry = new x(i, a, 14, 140)), (Bt.rim.position.y = e));
  }
}
var Kt = { cellule: Wt(), chromo: Ze(), chromatin: $e(), nuc: tt(Et, 1), helix: rt(Tt), atom: ct(Tt, { annot: !1, hbond: !0, win: 2 }) };
(wt(`cellule`, `Cellule animale`, `≈ 20 µm`, 7e4, Kt.cellule, null),
  wt(`chromo`, `Chromosome métaphasique`, `≈ 1,4 µm`, 2600, Kt.chromo, `chromosome`),
  wt(`chromatin`, `Fibre de chromatine`, `≈ 30 nm`, 140, Kt.chromatin, `fibre30`),
  wt(`nuc`, `Nucléosome`, `≈ 11 nm`, 15, Kt.nuc, `nucleosome`),
  wt(`helix`, `Double hélice d’ADN`, `≈ 2 nm`, 5, Kt.helix, `helix`),
  wt(`atom`, `Échelle atomique`, `≈ 0,3 nm`, 1.6, Kt.atom, null));
var qt = H.find((e) => e.name === `chromatin`);
((qt.setFold = Kt.chromatin.setFold), (qt.getFold = Kt.chromatin.getFold));
var Jt = H.find((e) => e.name === `chromo`),
  Yt = H.find((e) => e.name === `nuc`),
  Xt = H.find((e) => e.name === `cellule`);
(Xt && (Xt.baseScale *= 0.72),
  [`atom`, `chromo`].forEach((e) => {
    let t = H.find((t) => t.name === e);
    t.fixedScale = t.baseScale;
  }));
var Zt = H[0].V,
  Qt = H[H.length - 1].V,
  $t = Math.log10(Zt / Qt),
  en = 6,
  tn = 0,
  nn = 0;
function rn(e, t) {
  e.traverse((e) => {
    (e.isMesh || e.isSprite || e.isLine || e.isPoints) &&
      (Array.isArray(e.material) ? e.material : [e.material]).forEach((n) => {
        n &&
          ((n.opacity = t * (n.userData && n.userData.baseOpacity != null ? n.userData.baseOpacity : 1)),
          (n.transparent = !0),
          `depthWrite` in n && !e.isSprite && !e.isLine && !e.isPoints && (n.depthWrite = t > 0.85));
      });
  });
}
function an(e, t) {
  let n = U(1).normalize(),
    r = e + Math.random() * (t - e);
  return n.multiplyScalar(r);
}
function on() {
  let e = new P(),
    t = new O(0.26, 3);
  for (let r = 0; r < 14; r++) {
    let r = new v({ color: `#c680a8`, emissive: `#3a1830`, emissiveIntensity: 0.25, roughness: 0.85, metalness: 0, transparent: !0, opacity: 0.62 });
    r.userData.baseOpacity = 0.62;
    let i = new n(t, r);
    (i.position.copy(an(11, 20)), i.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6));
    let a = 0.7 + Math.random() * 0.9;
    (i.scale.set(a * 0.72, a * 0.72, a * 1.7), e.add(i));
  }
  let r = new O(1, 2);
  for (let t = 0; t < 22; t++) {
    let t = new v({ color: `#8f7fd0`, emissive: `#241748`, emissiveIntensity: 0.2, roughness: 0.6, metalness: 0.05, transparent: !0, opacity: 0.5 });
    t.userData.baseOpacity = 0.5;
    let i = new n(r, t);
    (i.position.copy(an(10, 22)), i.scale.setScalar(0.16 + Math.random() * 0.32), e.add(i));
  }
  let i = new x(0.5, 0.06, 8, 22);
  for (let t = 0; t < 9; t++) {
    let t = new v({ color: `#d98fb4`, emissive: `#3a1c2e`, emissiveIntensity: 0.2, roughness: 0.7, transparent: !0, opacity: 0.42 });
    t.userData.baseOpacity = 0.42;
    let r = new n(i, t);
    (r.position.copy(an(11, 20)), r.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6), r.scale.setScalar(0.6 + Math.random() * 1.1), e.add(r));
  }
  let a = 1700,
    o = new Float32Array(a * 3);
  for (let e = 0; e < a; e++) {
    let t = an(8, 32);
    ((o[e * 3] = t.x), (o[e * 3 + 1] = t.y), (o[e * 3 + 2] = t.z));
  }
  let s = new re();
  s.setAttribute(`position`, new ne(o, 3));
  let c = new f({ color: `#b79ae0`, size: 0.05, transparent: !0, opacity: 0.5, depthWrite: !1, sizeAttenuation: !0 });
  return ((c.userData.baseOpacity = 0.5), e.add(new te(s, c)), e);
}
var sn = null;
function cn() {
  if (sn) return sn;
  let e = document.createElement(`canvas`);
  e.width = e.height = 128;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
  return (
    n.addColorStop(0, `rgba(255,255,255,0.95)`),
    n.addColorStop(0.45, `rgba(255,255,255,0.32)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 128, 128),
    (sn = new k(e)),
    sn
  );
}
function ln() {
  let e = new P(),
    t = (e, t) => {
      ((e.renderOrder = t),
        (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
          e && ((e.depthTest = !1), (e.depthWrite = !1), (e.transparent = !0));
        }));
    },
    r = cn(),
    i = [`#3b2a6e`, `#4a2f7a`, `#39397e`, `#52306f`, `#2f2a66`];
  for (let t = 0; t < 10; t++) {
    let n = new s({ map: r, color: new ie(i[t % i.length]), transparent: !0, opacity: 0.2, depthWrite: !1, depthTest: !1 });
    n.userData.baseOpacity = 0.2;
    let a = new b(n);
    a.position.copy(an(14, 32));
    let o = 9 + Math.random() * 15;
    (a.scale.set(o, o, 1), (a.renderOrder = -8), e.add(a));
  }
  let a = new j(0.5, 0.5, 0.5, 10, 1),
    o = new v({ color: `#7d7cb2`, emissive: `#2a1c52`, emissiveIntensity: 0.3, roughness: 0.8, metalness: 0.02, transparent: !0, opacity: 0.64 });
  o.userData.baseOpacity = 0.64;
  let c = new v({ color: `#55558a`, emissive: `#1c1338`, emissiveIntensity: 0.28, roughness: 0.85, transparent: !0, opacity: 0.52 });
  c.userData.baseOpacity = 0.52;
  for (let n of [
    [
      [-21, 11, -15],
      [-9, 15, -9],
      [3, 12, -17],
      [15, 7, -11],
      [24, 1, -19],
    ],
    [
      [-23, -9, -17],
      [-11, -3, -21],
      [2, -11, -13],
      [13, -6, -19],
      [23, -13, -13],
    ],
  ]) {
    let r = Xe(
      n.map((e) => new F(e[0], e[1], e[2])),
      { coilR: 0.92, perTurn: 6, density: 1.35, minN: 30, maxN: 150, discScale: 1.75, coreGeo: a, coreMat: o, tubeMat: c, tubeR: 0.18 },
    );
    (r.group.traverse((e) => {
      (e.isMesh || e.isInstancedMesh) && t(e, -7);
    }),
      e.add(r.group));
  }
  let l = new O(1, 2),
    u = [`#7aa2ff`, `#9d7bff`, `#8fb0ff`, `#a7c0ff`];
  for (let r = 0; r < 8; r++) {
    let i = new v({ color: u[r % u.length], emissive: `#241748`, emissiveIntensity: 0.18, roughness: 0.7, metalness: 0.03, transparent: !0, opacity: 0.26 });
    i.userData.baseOpacity = 0.26;
    let a = new n(l, i);
    (a.position.copy(an(12, 22)), a.scale.setScalar(0.5 + Math.random() * 1.1), t(a, -6), e.add(a));
  }
  let d = 1200,
    p = new Float32Array(d * 3);
  for (let e = 0; e < d; e++) {
    let t = an(7, 26);
    ((p[e * 3] = t.x), (p[e * 3 + 1] = t.y), (p[e * 3 + 2] = t.z));
  }
  let m = new re();
  m.setAttribute(`position`, new ne(p, 3));
  let h = new f({ color: `#a9bcff`, size: 0.045, transparent: !0, opacity: 0.45, depthWrite: !1, sizeAttenuation: !0 });
  return ((h.userData.baseOpacity = 0.45), e.add(new te(m, h)), e);
}
var un = on();
(pt.add(un), rn(un, 0), (un.visible = !1));
var dn = ln();
(pt.add(dn), rn(dn, 0), (dn.visible = !1));
var fn = document.getElementById(`ladder`),
  pn = fn.querySelector(`.ltrack`),
  mn = fn.querySelector(`.rail`);
H.forEach((e, t) => {
  let n = document.createElement(`div`);
  ((n.className = `step`),
    (n.dataset.i = t),
    (n.innerHTML = `<span class="pip"></span><span class="num">${String(t + 1).padStart(2, `0`)}</span><span class="lab"><b>${e.shortLabel}</b><span>${e.scaleLabel}</span></span>`),
    n.addEventListener(`click`, () => {
      (yr(), (nn = I(Math.log10(Zt / e.V), 0, $t)));
    }),
    pn.appendChild(n));
});
var hn = [...pn.querySelectorAll(`.step`)],
  gn = 109,
  _n = -1,
  vn = 0;
function yn(e) {
  ((vn = e), e !== _n && ((_n = e), (pn.style.top = `calc(50% - ${e * gn + gn / 2}px)`)));
}
function bn() {
  ((gn = hn[0] ? hn[0].offsetHeight : 109), (mn.style.top = gn / 2 + `px`), (mn.style.height = (hn.length - 1) * gn + `px`), (_n = -1), yn(vn));
}
bn();
var xn = {
    cellule: {
      items: [
        [`Membrane plasmique`, `bicouche de phospholipides sélective`, W.membrane, `membrane`],
        [`Cytoplasme`, `cytosol + organites`, W.cytoplasm, `cytoplasm`],
        [`Noyau · enveloppe`, `deux membranes percées de pores`, W.noyau, `nuc_env`],
        [`Pores nucléaires`, `« trous » dans l’enveloppe`, `#3f57ab`, `nuc_pores`],
        [`Nucléole`, `synthétise l’ARNr, sans membrane`, W.nucleole, `nuc_nucleolus`],
        [`Chromatine`, `ADN enroulé autour d’histones`, `#8fb0ff`, `nuc_chromatin`],
        [`Réticulum rugueux (REG)`, `RE couvert de ribosomes : protéines`, W.erRough, `erRough`],
        [`Réticulum lisse (REL)`, `lipides, calcium, désintoxication`, W.erSmooth, `erSmooth`],
        [`Appareil de Golgi`, `modifie, entrepose et expédie`, W.golgi, `golgi`],
        [`Mitochondries`, `produit l’ATP par respiration`, W.mitochondria, `mitochondria`],
        [`Centrioles`, `forme les microtubules (cell. animale)`, W.centrioles, `centrioles`],
        [`Lysosomes`, `enzymes digestives en milieu acide`, W.lysosomes, `lysosomes`],
        [`Peroxysomes`, `détoxication ; H₂O₂ neutralisé`, W.peroxisomes, `peroxisomes`],
        [`Vésicules`, `transportent les molécules RE → Golgi`, W.vesicles, `vesicles`],
        [`Vacuole`, `stockage ; centrale chez les Végétaux`, W.vacuole, `vacuole`],
        [`Cytosquelette`, `soutien, forme, ancrage des organites`, W.cytoskeleton, `cytoskeleton`],
        [`Ribosomes libres`, `synthétisent les protéines`, W.ribosomes, `ribosomes`],
      ],
    },
    chromo: {
      items: [
        [`Chromosome`, `ADN + protéines, condensé au maximum`, `#8fb0ff`, ``],
        [`Chromatides sœurs`, `les 2 copies d’un chromosome répliqué`, `#a7c0ff`, ``],
        [`Centromère`, `point d’attache des chromatides sœurs`, `#e8b24a`, ``],
        [`ADN + histones`, `double hélice enroulée sur des histones`, `#9d7bff`, ``],
      ],
    },
    chromatin: {
      items: [
        [`Nucléosomes`, `« perle » d’ADN enroulé sur histones`, `#7aa2ff`, ``],
        [`ADN`, `double hélice, 2 nm`, `#8fb0ff`, ``],
        [`Histones`, `protéines d’enroulement (dont H1)`, `#e8b24a`, ``],
        [`Fibre 30 nm`, `nucléosomes compacts`, `#b98cff`, ``],
      ],
    },
    nuc: {
      items: [
        [`ADN (~147 pb)`, `~1,7 tour autour des histones`, `#8fb0ff`, ``],
        [`Octamère d’histones`, `2× H2A, H2B, H3, H4`, `#e8b24a`, ``],
        [`Histone H3`, `tétramère central`, `#6e8fc9`, ``],
        [`Histone H4`, `tétramère central`, `#4cab8f`, ``],
        [`Histones H2A · H2B`, `dimères externes`, `#cd7b6b`, ``],
        [`Histone H1`, `de liaison`, `#d9a45b`, ``],
      ],
    },
    helix: {
      items: [
        [`Deux brins`, `antiparallèles et complémentaires`, `#8fb0ff`, ``],
        [`Squelette sucre-phosphate`, `l’ossature de chaque brin`, `#f0901f`, ``],
        [`Paires de bases`, `A-T · G-C`, `#2f9e44`, ``],
        [`Liaisons hydrogène`, `A=T (2) · G≡C (3)`, `#e0584f`, ``],
        [`Diamètre ≈ 2 nm`, `~10,5 pb par tour`, `#9aa7b4`, ``],
      ],
    },
    atom: {
      items: [
        [`Carbone (C)`, `ossature des molécules`, `#3a3f47`, ``],
        [`Oxygène (O)`, `très présent`, `#e0322a`, ``],
        [`Azote (N)`, `dans les bases azotées`, `#2b5bd7`, ``],
        [`Phosphore (P)`, `dans le squelette`, `#f0901f`, ``],
        [`Hydrogène (H)`, `liaisons hydrogène`, `#dfe9f5`, ``],
      ],
    },
  },
  Sn = document.getElementById(`scalePanel`),
  Cn = Sn.querySelector(`.sptitle`),
  wn = Sn.querySelector(`.spbody`),
  Tn = null,
  En = 0;
function Dn(e, t, n) {
  if (!e) return null;
  if (t) {
    for (let n of e.pickables) if (n.userData.structure === t) return n;
    return null;
  }
  for (let t of e.pickables)
    try {
      let e = t.userData.getInfo && t.userData.getInfo(0);
      if (e && e.title === n) return t;
    } catch {}
  return null;
}
var On = new ae(),
  kn = new F(),
  An = new _();
function jn(e, t, n) {
  let r = H.find((t) => t.name === e);
  if (!r) return;
  let i = Dn(r, t, n);
  if (!i || !i.userData.getInfo) return;
  let a = null;
  try {
    a = i.userData.getInfo(0);
  } catch {}
  if (!a) return;
  if (i.isInstancedMesh && i.count > 0) (i.getMatrixAt(0, An), kn.setFromMatrixPosition(An), i.localToWorld(kn));
  else {
    if ((On.setFromObject(i), On.isEmpty())) return;
    On.getCenter(kn);
  }
  let o = r.name + `|` + (i.userData.structure || a.title) + `|`;
  if (dr.has(o)) {
    gr(o);
    return;
  }
  hr({ info: a, tier: r, ti: H.indexOf(r), localPos: r.group.worldToLocal(kn.clone()), key: o });
}
function Mn(e) {
  let t = H.find((t) => t.name === e),
    n = xn[e];
  return !t || !n
    ? !1
    : ((Tn = e),
      (Cn.textContent = t.shortLabel),
      (wn.innerHTML = n.items
        .map(
          ([e, t, n], r) => `<div class="spitem" data-i="${r}"><span class="spdot" style="background:${n};color:${n}"></span><div><div class="spn">${e}</div><div class="spd">${t}</div></div></div>`,
        )
        .join(``)),
      wn.querySelectorAll(`.spitem`).forEach((r) => {
        let i = n.items[+r.dataset.i],
          a = !!Dn(t, i[3], i[0]);
        ((r.style.cursor = a ? `pointer` : `default`), a || (r.style.opacity = `.62`), a && r.addEventListener(`click`, () => jn(e, i[3], i[0])));
      }),
      !0);
}
function Nn(e) {
  e !== Tn && Mn(e);
}
function Pn(e) {
  Mn(e) && document.body.classList.add(`scale-open`);
}
function Fn() {
  document.body.classList.remove(`scale-open`);
}
function In() {
  document.body.classList.contains(`scale-open`) ? Fn() : Pn(H[En].name);
}
Sn.querySelector(`.spclose`).addEventListener(`click`, (e) => {
  (e.stopPropagation(), Fn());
});
var Ln = document.getElementById(`title`);
(Ln.addEventListener(`click`, In),
  Ln.addEventListener(`keydown`, (e) => {
    (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), In());
  }));
var Rn = document.getElementById(`labels`),
  zn = [];
function Bn() {
  ((Rn.innerHTML = ``),
    (zn = []),
    H.forEach((e, t) => {
      e.anchors.forEach((e) => {
        let n = document.createElement(`div`);
        ((n.className = `flabel ` + (e.cls || ``)), (n.innerHTML = `<span class="dot"></span>${e.text}`), Rn.appendChild(n), zn.push({ ti: t, el: n, pos: new F(e.p[0], e.p[1], e.p[2]) }));
      });
    }));
}
Bn();
var Vn = document.getElementById(`scaleval`),
  Hn = document.getElementById(`scalebar`);
function Un(e) {
  return e >= 1e3 ? (e / 1e3).toPrecision(3).replace(/\.?0+$/, ``) + ` µm` : e >= 1 ? (e >= 10 ? Math.round(e) : e.toPrecision(2)) + ` nm` : (e * 10).toPrecision(2) + ` Å`;
}
function Wn(e) {
  let t = fi > 0 || pi > 0 ? ` · <small>écarté</small>` : ``;
  Vn.innerHTML = `${Un(e)} <small>champ</small>${t}`;
  let n = innerWidth * 0.16,
    r = e / innerWidth,
    i = r * n,
    a = 10 ** Math.floor(Math.log10(i)),
    o = i / a;
  ((i = (o < 1.5 ? 1 : o < 3.5 ? 2 : o < 7.5 ? 5 : 10) * a), (Hn.style.width = Math.round(i / r) + `px`));
}
var Gn = document.getElementById(`titleT`),
  Kn = document.getElementById(`titleS`),
  qn = document.getElementById(`legend`);
function Jn(e) {
  return e === `helix`
    ? [
        [`sw`, `#2f9e44`, `A`],
        [`sw`, `#e0584f`, `T`],
        [`sw`, `#1c7ed6`, `C`],
        [`sw`, `#6b7280`, `G`],
        [`tx`, `bases azotées`],
      ]
    : e === `atom`
      ? [
          [`sw`, `#f0901f`, `P`],
          [`sw`, `#e0322a`, `O`],
          [`sw`, `#2b5bd7`, `N`],
          [`sw`, `#3a3f47`, `C`],
          [`tx`, `atomes (CPK)`],
        ]
      : e === `nuc`
        ? [
            [`sw`, `#6e8fc9`, `H3`],
            [`sw`, `#4cab8f`, `H4`],
            [`sw`, `#d9a45b`, `H2A`],
            [`sw`, `#cd7b6b`, `H2B`],
            [`tx`, `histones`],
          ]
        : null;
}
function Yn(e) {
  let t = Jn(e);
  if (!t) {
    qn.style.opacity = 0;
    return;
  }
  ((qn.innerHTML = t
    .map((e) => (e[0] === `tx` ? `<span class="it" style="color:rgba(255,255,255,.45)">${e[1]}</span>` : `<span class="it"><span class="sw" style="background:${e[1]}"></span>${e[2]}</span>`))
    .join(``)),
    (qn.style.opacity = 0.96));
}
var Xn = document.getElementById(`tip`),
  Zn = document.getElementById(`tipChip`),
  Qn = document.getElementById(`tipName`),
  $n = document.getElementById(`tipSub`),
  er = document.getElementById(`detail`);
(document.getElementById(`dChip`), document.getElementById(`dName`), document.getElementById(`dMeta`), document.getElementById(`dRows`), document.getElementById(`dExtra`));
var tr = new a(),
  nr = new u();
function rr(e) {
  let t = V.domElement.getBoundingClientRect();
  return (nr.set(((e.clientX - t.left) / t.width) * 2 - 1, -((e.clientY - t.top) / t.height) * 2 + 1), t);
}
function ir(e) {
  let t = e.object.material ? (Array.isArray(e.object.material) ? e.object.material : [e.object.material]) : [];
  for (let n of t) {
    let t = n && n.clippingPlanes;
    if (t) {
      for (let n of t) if (n.distanceToPoint(e.point) < -1e-4) return !1;
    }
  }
  return !0;
}
function ar() {
  let e = [];
  for (let t of H) if (t.alpha > 0.2) for (let n of t.pickables) e.push(n);
  if (!e.length) return null;
  tr.setFromCamera(nr, mt);
  let t = tr.intersectObjects(e, !1);
  for (let e of t) {
    if (!ir(e)) continue;
    let t = e.object;
    if (t.userData.getInfo) return t.userData.getInfo(e.instanceId);
  }
  return null;
}
function or() {
  ((Xn.style.opacity = `0`), (Xn.style.display = `none`));
}
function sr(e, t, n) {
  ((Zn.textContent = e.chip),
    (Zn.style.background = e.chipBg),
    (Zn.style.color = e.chipColor || `#06090d`),
    (Qn.textContent = e.title),
    ($n.innerHTML = (e.tip || []).filter(Boolean).join(`<br>`)),
    (Xn.style.display = `block`));
  let r = lt.getBoundingClientRect(),
    i = t + 16,
    a = n + 14;
  (i + 255 > r.width && (i = t - 255),
    a + 90 > r.height && (a = n - 90),
    (Xn.style.left = i + `px`),
    (Xn.style.top = a + `px`),
    requestAnimationFrame(() => {
      Xn.style.opacity = `1`;
    }));
}
document.getElementById(`detailClose`).addEventListener(`click`, () => {
  er.style.display = `none`;
});
var cr = document.getElementById(`leaders`),
  lr = document.getElementById(`pins`);
(cr.setAttribute(`width`, innerWidth), cr.setAttribute(`height`, innerHeight));
var ur = `http://www.w3.org/2000/svg`,
  dr = new Map();
function fr() {
  let e = new Map(),
    t = [];
  for (let n of H) if (n.alpha > 0.2) for (let r of n.pickables) (t.push(r), e.set(r, n));
  if (!t.length) return null;
  tr.setFromCamera(nr, mt);
  let n = tr.intersectObjects(t, !1);
  for (let t of n) {
    if (!ir(t)) continue;
    let n = t.object;
    if (!n.userData.getInfo) continue;
    let r = e.get(n);
    if (!r) continue;
    let i = n.userData.getInfo(t.instanceId);
    return { info: i, tier: r, ti: H.indexOf(r), localPos: r.group.worldToLocal(t.point.clone()), key: r.name + `|` + (n.userData.structure || i.title) + `|` + (t.instanceId ?? ``) };
  }
  return null;
}
function pr(e) {
  let t = (e.rows || []).map(([e, t]) => `<div class="prow"><span class="k">${e}</span><span class="v">${t}</span></div>`).join(``),
    n = e.note ? `<div class="pnote">${e.note}</div>` : ``;
  return (
    `<div class="ph"><span class="pchip" style="background:${e.chipBg};color:${e.chipBg}"></span><span class="pname">${e.title}</span><span class="pclose" data-noplace title="Fermer">✕</span></div>` +
    (e.meta ? `<div class="pmeta">${e.meta}</div>` : ``) +
    t +
    n
  );
}
function mr(e) {
  dr.has(e.key) ? gr(e.key) : hr(e);
}
function hr(e) {
  let t = document.createElement(`div`);
  ((t.className = `pincard`),
    (t.innerHTML = pr(e.info)),
    t.querySelector(`.pclose`).addEventListener(`pointerdown`, (t) => {
      (t.stopPropagation(), gr(e.key));
    }),
    t.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
    lr.appendChild(t));
  let n = document.createElementNS(ur, `line`);
  (n.setAttribute(`class`, `pinline`), cr.appendChild(n));
  let r = document.createElementNS(ur, `circle`);
  (r.setAttribute(`class`, `pindot`), r.setAttribute(`r`, `3.4`), cr.appendChild(r), dr.set(e.key, { el: t, line: n, dot: r, ti: e.ti, pos: e.localPos }));
}
function gr(e) {
  let t = dr.get(e);
  t && (t.el.remove(), t.line.remove(), t.dot.remove(), dr.delete(e));
}
var _r = !1,
  vr = document.getElementById(`hint`);
function yr() {
  _r || ((_r = !0), vr.classList.add(`gone`));
}
var br = () => document.body.classList.contains(`atlas-open`),
  xr = (e) => !!(e && e.closest && e.closest(`#panel,#detail`));
addEventListener(
  `wheel`,
  (e) => {
    br() || xr(e.target) || (e.preventDefault(), yr(), (nn = I(nn - e.deltaY * 0.0016, 0, $t)), or());
  },
  { passive: !1 },
);
var Sr = null;
(addEventListener(
  `touchmove`,
  (e) => {
    if (!br() && e.touches.length === 2) {
      if (xr(e.target)) return;
      (e.preventDefault(), yr());
      let t = e.touches[0].clientX - e.touches[1].clientX,
        n = e.touches[0].clientY - e.touches[1].clientY,
        r = Math.hypot(t, n);
      (Sr != null && (nn = I(nn + (r - Sr) * 0.006, 0, $t)), (Sr = r));
    }
  },
  { passive: !1 },
),
  addEventListener(`touchend`, () => {
    Sr = null;
  }),
  addEventListener(`keydown`, (e) => {
    if (br()) return;
    let t = e.target;
    (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || xr(t))) ||
      ((e.key === `ArrowDown` || e.key === `PageDown`) && (yr(), (nn = I(nn + 0.18, 0, $t))), (e.key === `ArrowUp` || e.key === `PageUp`) && (yr(), (nn = I(nn - 0.18, 0, $t))));
  }));
var Cr = 5,
  wr = null,
  Tr = !1,
  Er = 0,
  Dr = null;
function Or() {
  ((wr = null), (Tr = !1), ut.classList.remove(`grabbing`));
}
(V.domElement.addEventListener(`pointerdown`, (e) => {
  ((wr = { x: e.clientX, y: e.clientY, t: performance.now() }), (Tr = !1), ut.classList.add(`grabbing`), or());
}),
  addEventListener(`pointermove`, (e) => {
    if (wr) {
      Math.hypot(e.clientX - wr.x, e.clientY - wr.y) > Cr && ((Tr = !0), or());
      return;
    }
    Dr = e;
    let t = performance.now();
    if (t - Er < 40) return;
    Er = t;
    let n = rr(e),
      r = ar();
    if (!r) {
      or();
      return;
    }
    sr(r, e.clientX - n.left, e.clientY - n.top);
  }),
  addEventListener(`pointerup`, (e) => {
    if (!wr) {
      Or();
      return;
    }
    let t = Math.hypot(e.clientX - wr.x, e.clientY - wr.y),
      n = performance.now() - wr.t,
      r = !Tr && t < Cr && n < 400;
    if ((Or(), r)) {
      rr(e);
      let t = fr();
      t && mr(t);
    }
  }),
  addEventListener(`pointercancel`, Or),
  addEventListener(`blur`, () => {
    (Or(), or());
  }));
function kr(e, t) {
  if (!e) return null;
  let n = t.min ?? 0,
    r = t.max ?? 100;
  e.innerHTML = `<div class="dtrack"><div class="dfill"></div></div><div class="dthumb"><i></i></div>`;
  let i = e.querySelector(`.dfill`),
    a = e.querySelector(`.dthumb`),
    o = I(t.value ?? 0, n, r),
    s = () => {
      let t = (o - n) / (r - n);
      ((i.style.width = t * 100 + `%`), (a.style.left = t * 100 + `%`), e.setAttribute(`aria-valuenow`, Math.round(o * 100) / 100));
    },
    c = (i) => {
      let a = e.getBoundingClientRect();
      ((o = n + I((i - a.left) / a.width, 0, 1) * (r - n)), s(), t.onInput && t.onInput(o));
    },
    l = !1;
  (e.addEventListener(`pointerdown`, (t) => {
    l = !0;
    try {
      e.setPointerCapture(t.pointerId);
    } catch {}
    (c(t.clientX), t.preventDefault(), t.stopPropagation());
  }),
    e.addEventListener(`pointermove`, (e) => {
      l && (c(e.clientX), e.preventDefault(), e.stopPropagation());
    }));
  let u = (t) => {
    if (l) {
      l = !1;
      try {
        e.releasePointerCapture(t.pointerId);
      } catch {}
    }
  };
  (e.addEventListener(`pointerup`, u),
    e.addEventListener(`pointercancel`, u),
    (e.tabIndex = 0),
    e.setAttribute(`role`, `slider`),
    e.setAttribute(`aria-valuemin`, n),
    e.setAttribute(`aria-valuemax`, r),
    t.label && e.setAttribute(`aria-label`, t.label));
  let d = (r - n) / 50;
  return (
    e.addEventListener(`keydown`, (e) => {
      if (e.key === `ArrowLeft` || e.key === `ArrowDown`) o = I(o - d, n, r);
      else if (e.key === `ArrowRight` || e.key === `ArrowUp`) o = I(o + d, n, r);
      else if (e.key === `Home`) o = n;
      else if (e.key === `End`) o = r;
      else return;
      (e.preventDefault(), s(), t.onInput && t.onInput(o));
    }),
    s(),
    {
      set: (e) => {
        ((o = I(e, n, r)), s());
      },
      get: () => o,
    }
  );
}
var Ar = document.getElementById(`stRot`),
  jr = document.getElementById(`stAff`),
  Mr = document.getElementById(`stSeq`),
  Nr = document.getElementById(`stEcart`),
  Pr = [...document.querySelectorAll(`#panel .pcard`)];
function Fr(e, t, n) {
  let r = e.querySelector(`.pcardb`);
  if ((e.classList.toggle(`open`, t), e.querySelector(`.pcardh`).setAttribute(`aria-expanded`, t ? `true` : `false`), (r.inert = !t), n === !1)) {
    r.style.maxHeight = t ? `none` : `0px`;
    return;
  }
  t
    ? ((r.style.maxHeight = r.scrollHeight + `px`),
      r.addEventListener(`transitionend`, function t(n) {
        n.propertyName === `max-height` && (r.removeEventListener(`transitionend`, t), e.classList.contains(`open`) && (r.style.maxHeight = `none`));
      }))
    : (r.style.maxHeight === `none` && ((r.style.maxHeight = r.scrollHeight + `px`), r.offsetHeight), (r.style.maxHeight = `0px`));
}
Pr.forEach((e) => {
  (e.querySelector(`.pcardh`).addEventListener(`click`, () => Fr(e, !e.classList.contains(`open`), !0)), Fr(e, !1, !1));
});
var Ir = document.getElementById(`rotOn`),
  Lr = document.getElementById(`rotVal`),
  Rr = document.getElementById(`speedwrap`),
  zr = 30;
function Br() {
  let e = Ir.checked;
  ((xt.autoRotate = e && zr > 0),
    (xt.autoRotateSpeed = (zr / 100) * 2.4),
    (Lr.textContent = Math.round(zr) + ` %`),
    Rr.classList.toggle(`off`, !e),
    Ar && (Ar.textContent = e ? Math.round(zr) + ` %` : `off`));
}
(kr(document.getElementById(`sldSpeed`), {
  label: `Vitesse de rotation`,
  value: 30,
  onInput: (e) => {
    ((zr = e), Br());
  },
}),
  Ir.addEventListener(`change`, Br));
var Vr = { bleu: `radial-gradient(125% 110% at 50% 0%, #123048 0%, #0a1c2e 55%, #050d16 100%)`, clair: `radial-gradient(120% 105% at 50% 16%, #f5f8fa 0%, #dde7ed 58%, #c2d0da 100%)` },
  Hr = { bleu: document.getElementById(`bgBleu`), clair: document.getElementById(`bgClair`) };
function Ur(e) {
  ((lt.style.background = Vr[e]), (V.toneMappingExposure = e === `clair` ? 0.92 : 1));
  for (let t in Hr) Hr[t].classList.toggle(`active`, t === e);
  jr && (jr.textContent = e === `clair` ? `Studio` : `Bleu`);
}
(Hr.bleu.addEventListener(`click`, () => Ur(`bleu`)), Hr.clair.addEventListener(`click`, () => Ur(`clair`)));
var Wr = document.getElementById(`cutVal`),
  Gr = document.getElementById(`cellCutGroup`);
kr(document.getElementById(`sldCut`), {
  label: `Profondeur de coupe de la cellule`,
  min: 0,
  max: 1.5,
  value: It,
  onInput: (e) => {
    ((It = e), Wr && (Wr.textContent = e.toFixed(2)), Gt());
  },
});
var Kr = document.getElementById(`cutNucVal`);
kr(document.getElementById(`sldCutNuc`), {
  label: `Profondeur de coupe du noyau`,
  min: 0,
  max: 1.5,
  value: Lt,
  onInput: (e) => {
    ((Lt = e), Kr && (Kr.textContent = e.toFixed(2)));
  },
});
var qr = document.getElementById(`nucEpure`),
  Jr = document.getElementById(`nucSculpt`);
function Yr(e) {
  ((Et = e), qr.classList.toggle(`active`, e === 0), Jr.classList.toggle(`active`, e === 1), ri());
}
(qr.addEventListener(`click`, () => Yr(0)), Jr.addEventListener(`click`, () => Yr(1)));
var Xr = 0,
  Zr = 0,
  Qr = document.getElementById(`chromHet`),
  $r = document.getElementById(`chromEu`);
function ei(e) {
  ((Zr = e), Qr.classList.toggle(`active`, e === 0), $r.classList.toggle(`active`, e === 1));
}
(Qr.addEventListener(`click`, () => ei(0)), $r.addEventListener(`click`, () => ei(1)));
var ti = document.getElementById(`chromFoldGroup`);
function ni(e) {
  e.traverse((e) => {
    (e.geometry && e.geometry.dispose(),
      e.material &&
        (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
          (e.map && e.map.dispose(), e.dispose && e.dispose());
        }));
  });
}
function ri() {
  let e = H.find((e) => e.name === `nuc`),
    t = e.group,
    n = tt(Et, 1);
  ((n.group.visible = t.visible), bt.remove(t), ni(t), bt.add(n.group), (e.baseScale = St / Ct(n.group)), (e.group = n.group), (e.pickables = n.pickables), (e.anchors = n.anchors), Bn(), mi(pi));
}
var ii = document.getElementById(`seq`);
function ai(e) {
  return (e || ``)
    .toUpperCase()
    .replace(/[^ATGC]/g, ``)
    .slice(0, 60);
}
function oi(e) {
  Tt = e;
  let t = [
    [`helix`, () => rt(e)],
    [`atom`, () => ct(e, { annot: !1, hbond: !0, win: 2 })],
  ];
  for (let [e, n] of t) {
    let t = H.find((t) => t.name === e),
      r = t.group,
      i = n();
    ((i.group.visible = r.visible),
      bt.remove(r),
      ni(r),
      bt.add(i.group),
      (t.baseScale = t.fixedScale == null ? St / Ct(i.group) : t.fixedScale),
      (t.group = i.group),
      (t.pickables = i.pickables),
      (t.anchors = i.anchors));
  }
  Bn();
}
var si = !1;
function ci() {
  si = !0;
}
var li = () => {
  Mr && (Mr.textContent = Tt.length + ` pb`);
};
(ii.addEventListener(`input`, () => {
  let e = ai(ii.value);
  e.length >= 2 && ((Tt = e), li(), ci());
}),
  ii.addEventListener(`change`, () => {
    ii.value = Tt;
  }),
  document.getElementById(`randomize`).addEventListener(`click`, () => {
    let e = 24 + Math.floor(Math.random() * 17),
      t = ``;
    for (let n = 0; n < e; n++) t += `ATGC`[Math.floor(Math.random() * 4)];
    ((ii.value = t), (Tt = ai(t)), li(), ci());
  }),
  li());
var ui = B.R,
  di = B.RISE,
  fi = 0,
  pi = 0;
function mi(e) {
  let t = H.find((e) => e.name === `nuc`);
  t &&
    t.group.traverse((t) => {
      t.userData && t.userData.spreadBase && t.position.copy(t.userData.spreadBase).multiplyScalar(1 + e * 0.45);
    });
}
var hi = !1,
  gi = 0;
function _i(e) {
  let t = H.find((e) => e.name === `chromo`);
  if (!t) return;
  let n = t.group,
    r = Ze(e * 0.8);
  ((r.group.visible = n.visible),
    bt.remove(n),
    ni(n),
    bt.add(r.group),
    (t.baseScale = t.fixedScale == null ? St / Ct(r.group) : t.fixedScale),
    (t.group = r.group),
    (t.pickables = r.pickables),
    (t.anchors = r.anchors),
    (Kt.chromo = r),
    Bn());
}
function vi() {
  ((B.RISE = di * (1 + (fi + pi) * 1.2)), (B.R = ui * (1 + (fi + pi * 0.7) * 1.2)), ci(), mi(pi));
}
var yi = document.getElementById(`spreadVal`),
  bi = document.getElementById(`spreadFineVal`),
  xi = (e) => (e === 0 ? `compact` : `×` + (1 + e * 1.2).toFixed(1)),
  Si = (e) => (e === 0 ? `compact` : `×` + (1 + e).toFixed(2));
(kr(document.getElementById(`sldSpread`), {
  label: `Intensité de l'écartement`,
  value: 0,
  onInput: (e) => {
    ((pi = e / 100), (yi.textContent = Si(pi)), Nr && (Nr.textContent = Si(pi)), (hi = !0), vi());
  },
}),
  kr(document.getElementById(`sldFine`), {
    label: `Réglage fin de l'ADN`,
    value: 0,
    onInput: (e) => {
      ((fi = e / 100), (bi.textContent = xi(fi)), vi());
    },
  }));
var Ci = document.getElementById(`nucStyleGroup`),
  wi = document.getElementById(`spreadScope`),
  Ti = document.getElementById(`dnaFine`),
  Ei = { chromo: `· boucles`, chromatin: `· nucléosomes`, nuc: `· octamère`, helix: `· bases`, atom: `· atomes` },
  Di = () => window.matchMedia(`(max-width: 720px), (pointer: coarse)`).matches;
function Oi(e) {
  if (!e) return;
  e.classList.add(`draggable`);
  let t = null,
    n = null,
    r = !1;
  (e.addEventListener(`pointerdown`, (e) => {
    Di() || e.target.closest(`input,button,textarea,select,a,label,.switch,[contenteditable],.dslider,.pcollapse,[data-noplace]`) || ((t = { x: e.clientX, y: e.clientY, pid: e.pointerId }), (r = !1));
  }),
    e.addEventListener(`pointermove`, (i) => {
      if (!t) return;
      if (!r) {
        if (Math.hypot(i.clientX - t.x, i.clientY - t.y) < 4) return;
        r = !0;
        let a = e.getBoundingClientRect();
        ((n = { dx: t.x - a.left, dy: t.y - a.top }), (e.style.left = a.left + `px`), (e.style.top = a.top + `px`), (e.style.right = `auto`), (e.style.bottom = `auto`), (e.style.transform = `none`));
        try {
          e.setPointerCapture(t.pid);
        } catch {}
        e.classList.add(`dragging`);
      }
      (i.stopPropagation(), i.preventDefault());
      let a = e.offsetWidth,
        o = e.offsetHeight;
      ((e.style.left = I(i.clientX - n.dx, 6, innerWidth - a - 6) + `px`), (e.style.top = I(i.clientY - n.dy, 6, innerHeight - o - 6) + `px`));
    }));
  let i = (n) => {
    if ((t && r && n.stopPropagation(), t)) {
      e.classList.remove(`dragging`);
      try {
        e.releasePointerCapture(t.pid);
      } catch {}
    }
    ((t = null), (r = !1));
  };
  (e.addEventListener(`pointerup`, i), e.addEventListener(`pointercancel`, i));
}
[`panel`, `detail`].forEach((e) => Oi(document.getElementById(e)));
var ki = document.getElementById(`panel`),
  Ai = document.getElementById(`menuBtn`),
  ji = document.getElementById(`panelCollapse`);
function Mi(e) {
  (document.body.classList.toggle(`panel-collapsed`, e), (ki.inert = e), Ai.setAttribute(`aria-expanded`, e ? `false` : `true`), ji.setAttribute(`aria-expanded`, e ? `false` : `true`));
}
(ji.addEventListener(`click`, () => Mi(!0)), Ai.addEventListener(`click`, () => Mi(!1)));
var Ni = window.matchMedia(`(max-width: 720px), (pointer: coarse)`);
Mi(Ni.matches);
function Pi() {
  let e = document.getElementById(`atlasBar`);
  if (!(!ki || !e)) {
    if (Di()) {
      ((ki.style.maxHeight = ``), (ki.style.left = ki.style.top = ki.style.right = ki.style.bottom = ki.style.transform = ``));
      return;
    }
    ki.style.maxHeight = Math.max(210, e.getBoundingClientRect().top - ki.getBoundingClientRect().top - 12) + `px`;
  }
}
(Ni.addEventListener(`change`, () => {
  (Mi(Ni.matches), Pi());
}),
  Pi(),
  window.matchMedia(`(pointer: coarse)`).matches && (vr.textContent = `pincer pour plonger · glisser pour pivoter · toucher un élément pour les infos`));
var Fi = new F(),
  Ii = 0;
function Li() {
  if (document.body.classList.contains(`atlas-open`)) return;
  (si && ((si = !1), oi(Tt)), hi && performance.now() - gi > 110 && ((hi = !1), (gi = performance.now()), _i(pi)), (tn += (nn - tn) * 0.1));
  let e = Zt * 10 ** -tn,
    t = Math.log10(e);
  ((Xr += (Zr - Xr) * 0.12), qt.setFold(Xr, pi));
  let n = 0;
  for (; n < H.length - 2 && Math.log10(H[n + 1].V) > t;) n++;
  let r = H[n],
    i = H[n + 1],
    a = Math.log10(r.V),
    o = Math.log10(i.V),
    s = I((a - t) / (a - o || 1), 0, 1),
    c = 0.16,
    l = s < 0.5 - c ? 0 : s > 0.66 ? 1 : Oe((s - (0.5 - c)) / (2 * c));
  for (let e of H) ((e.alpha = 0), (e.diveScale = 1));
  ((r.alpha = 1 - l), (i.alpha = l), (r.diveScale = 1 + l * 0.85), (i.diveScale = 0.45 + 0.55 * l));
  for (let t of H) {
    if (t.alpha <= 0.004) {
      (t.group.visible && (t.group.visible = !1), (t.labelAlpha = 0));
      continue;
    }
    let n = ke(t.V / e, en) * t.baseScale * t.diveScale;
    ((t.group.visible = !0),
      t.group.scale.setScalar(n),
      rn(t.group, t.alpha),
      t === Xt && ((Nt.constant = Rt() * n), (zt.constant = Lt <= 0 ? 1e6 : (Ft.cy + Ft.r * (1 - Lt * 0.95)) * n)),
      (t.labelAlpha = I((t.alpha - 0.5) / 0.45, 0, 1)));
  }
  let u = Math.max(Jt ? Jt.alpha : 0, qt.alpha, Yt ? Yt.alpha : 0);
  ((un.visible = !1), u <= 0.004 ? (dn.visible = !1) : ((dn.visible = !0), rn(dn, u)));
  let d = 0,
    f = 1e9;
  (H.forEach((t, n) => {
    let r = Math.abs(Math.log10(t.V / e));
    r < f && ((f = r), (d = n));
  }),
    hn.forEach((e, t) => e.classList.toggle(`on`, t === d)),
    (En = d),
    yn(d),
    document.body.classList.contains(`scale-open`) && Nn(H[d].name));
  let p = H[d],
    m = p.shortLabel,
    h = p.scaleLabel;
  if (p.name === `chromatin`) {
    let e = Zr >= 0.5;
    ((m = e ? `Collier de perles` : `Fibre de chromatine`), (h = e ? `≈ 11 nm` : `≈ 30 nm`));
  }
  if (Gn.textContent !== m) {
    ((Gn.textContent = m), (Kn.textContent = h), Yn(p.name));
    let e = hn[d];
    if (e) {
      let t = e.querySelector(`.lab b`),
        n = e.querySelector(`.lab span`);
      (t && (t.textContent = m), n && (n.textContent = h));
    }
  }
  let g = H.find((e) => e.name === `nuc`).alpha > 0.3;
  if (
    ((Ci.style.display = g ? `block` : `none`),
    (ti.style.display = qt.alpha > 0.3 ? `block` : `none`),
    Gr && (Gr.style.display = Xt && Xt.alpha > 0.3 ? `block` : `none`),
    wi && (wi.textContent = Ei[p.name] || `· structure`),
    Ti)
  ) {
    let e = p.name === `helix` || p.name === `atom`;
    Ti.style.display = e ? `block` : `none`;
  }
  for (let e of zn) {
    let t = H[e.ti];
    if (t.labelAlpha < 0.04 || t.alpha <= 0.004) {
      e.el.style.opacity = 0;
      continue;
    }
    (Fi.copy(e.pos), t.group.localToWorld(Fi));
    let n = Fi.project(mt);
    if (n.z > 1) {
      e.el.style.opacity = 0;
      continue;
    }
    let r = (n.x * 0.5 + 0.5) * innerWidth,
      i = (-n.y * 0.5 + 0.5) * innerHeight;
    ((e.el.style.transform = `translate(${r}px,${i}px) translate(-50%,-50%)`), (e.el.style.opacity = t.labelAlpha * 0.96));
  }
  for (let [e, t] of dr) {
    let e = H[t.ti],
      n = !e || e.labelAlpha < 0.04 || e.alpha <= 0.004;
    (Fi.copy(t.pos), n || e.group.localToWorld(Fi));
    let r = n ? null : Fi.project(mt);
    if (n || r.z > 1) {
      ((t.el.style.display = `none`), (t.line.style.display = `none`), (t.dot.style.display = `none`));
      continue;
    }
    let i = (r.x * 0.5 + 0.5) * innerWidth,
      a = (-r.y * 0.5 + 0.5) * innerHeight,
      o = I(i + (i < innerWidth * 0.5 ? 150 : -150), 130, innerWidth - 130),
      s = I(a - 72, 80, innerHeight - 96),
      c = e.labelAlpha;
    ((t.el.style.display = `block`),
      (t.el.style.opacity = c),
      (t.el.style.left = o + `px`),
      (t.el.style.top = s + `px`),
      (t.line.style.display = ``),
      (t.line.style.opacity = c * 0.8),
      t.line.setAttribute(`x1`, i),
      t.line.setAttribute(`y1`, a),
      t.line.setAttribute(`x2`, o),
      t.line.setAttribute(`y2`, s),
      (t.dot.style.display = ``),
      (t.dot.style.opacity = c),
      t.dot.setAttribute(`cx`, i),
      t.dot.setAttribute(`cy`, a));
  }
  if (!wr && Dr && Xn.style.display === `block`) {
    let e = performance.now();
    if (e - Ii > 110) {
      Ii = e;
      let t = rr(Dr),
        n = ar();
      n ? sr(n, Dr.clientX - t.left, Dr.clientY - t.top) : or();
    }
  }
  (Wn(e), dt && (dt.style.opacity = Jt ? Jt.alpha.toFixed(3) : 0), ft && (ft.style.opacity = Xt ? Xt.alpha.toFixed(3) : 0), xt.update(), V.render(pt, mt));
}
function Ri() {
  (requestAnimationFrame(Ri), Li());
}
function zi() {
  ((mt.aspect = innerWidth / innerHeight),
    mt.updateProjectionMatrix(),
    V.setSize(innerWidth, innerHeight),
    cr && (cr.setAttribute(`width`, innerWidth), cr.setAttribute(`height`, innerHeight)),
    bn(),
    Pi());
}
addEventListener(`resize`, zi);

/* ---- init (moteur) — l’atlas est chargé séparément, voir le module atlas dans index.html ---- */
Ur(`bleu`);
Br();
Yn(`cellule`);
Ri();
setTimeout(() => document.getElementById(`loader`).classList.add(`gone`), 450);
setTimeout(() => { _r || vr.classList.remove(`gone`); }, 700);
