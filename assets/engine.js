import {
  A as Plane,
  B as Spherical,
  C as Mesh,
  D as OctahedronGeometry,
  E as Object3D,
  F as Raycaster,
  G as TubeGeometry,
  H as SpriteMaterial,
  I as SRGBColorSpace,
  J as WebGLRenderer,
  K as Vector2,
  L as Scene,
  M as PointsMaterial,
  N as Quaternion,
  O as PMREMGenerator,
  P as Ray,
  R as ShaderMaterial,
  S as Matrix4,
  T as MeshStandardMaterial,
  U as TOUCH,
  V as Sprite,
  W as TorusGeometry,
  _ as LatheGeometry,
  a as CapsuleGeometry,
  b as MOUSE,
  c as ConeGeometry,
  d as Euler,
  f as EventDispatcher,
  g as InstancedMesh,
  h as IcosahedronGeometry,
  i as CanvasTexture,
  j as Points,
  k as PerspectiveCamera,
  l as CylinderGeometry,
  m as HemisphereLight,
  n as BufferAttribute,
  o as CatmullRomCurve3,
  p as Group,
  q as Vector3,
  r as BufferGeometry,
  s as Color,
  t as Box3,
  u as DirectionalLight,
  v as Line,
  w as MeshPhysicalMaterial,
  x as MathUtils,
  y as LineBasicMaterial,
  z as SphereGeometry,
} from "./three.module-BIecrmCP.js";
var _changeEvent = {
    type: `change`,
  },
  startEvent = {
    type: `start`,
  },
  _endEvent = {
    type: `end`,
  },
  ray = new Ray(),
  ge = new Plane(),
  _e = Math.cos(70 * MathUtils.DEG2RAD),
  ve = class extends EventDispatcher {
    constructor(e, n) {
      (super(),
        (this.object = e),
        (this.domElement = n),
        (this.domElement.style.touchAction = `none`),
        (this.enabled = !0),
        (this.target = new Vector3()),
        (this.cursor = new Vector3()),
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
        (this.keys = {
          LEFT: `ArrowLeft`,
          UP: `ArrowUp`,
          RIGHT: `ArrowRight`,
          BOTTOM: `ArrowDown`,
        }),
        (this.mouseButtons = {
          LEFT: MOUSE.ROTATE,
          MIDDLE: MOUSE.DOLLY,
          RIGHT: MOUSE.PAN,
        }),
        (this.touches = {
          ONE: TOUCH.ROTATE,
          TWO: TOUCH.DOLLY_PAN,
        }),
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
          (r.target.copy(r.target0),
            r.object.position.copy(r.position0),
            (r.object.zoom = r.zoom0),
            r.object.updateProjectionMatrix(),
            r.dispatchEvent(_changeEvent),
            r.update(),
            (a = i.NONE));
        }),
        (this.update = (function () {
          let t = new Vector3(),
            n = new Quaternion().setFromUnitVectors(e.up, new Vector3(0, 1, 0)),
            u = n.clone().invert(),
            f = new Vector3(),
            m = new Quaternion(),
            h = new Vector3(),
            g = 2 * Math.PI;
          return function (p = null) {
            let _ = r.object.position;
            (t.copy(_).sub(r.target),
              t.applyQuaternion(n),
              s.setFromVector3(t),
              r.autoRotate && a === i.NONE && A(k(p)),
              r.enableDamping
                ? ((s.theta += c.theta * r.dampingFactor), (s.phi += c.phi * r.dampingFactor))
                : ((s.theta += c.theta), (s.phi += c.phi)));
            let v = r.minAzimuthAngle,
              y = r.maxAzimuthAngle;
            (isFinite(v) &&
              isFinite(y) &&
              (v < -Math.PI ? (v += g) : v > Math.PI && (v -= g),
              y < -Math.PI ? (y += g) : y > Math.PI && (y -= g),
              v <= y
                ? (s.theta = Math.max(v, Math.min(y, s.theta)))
                : (s.theta = s.theta > (v + y) / 2 ? Math.max(v, s.theta) : Math.min(y, s.theta))),
              (s.phi = Math.max(r.minPolarAngle, Math.min(r.maxPolarAngle, s.phi))),
              s.makeSafe(),
              r.enableDamping === !0 ? r.target.addScaledVector(d, r.dampingFactor) : r.target.add(d),
              r.target.sub(r.cursor),
              r.target.clampLength(r.minTargetRadius, r.maxTargetRadius),
              r.target.add(r.cursor),
              (r.zoomToCursor && ee) || r.object.isOrthographicCamera
                ? (s.radius = ae(s.radius))
                : (s.radius = ae(s.radius * l)),
              t.setFromSpherical(s),
              t.applyQuaternion(u),
              _.copy(r.target).add(t),
              r.object.lookAt(r.target),
              r.enableDamping === !0
                ? ((c.theta *= 1 - r.dampingFactor),
                  (c.phi *= 1 - r.dampingFactor),
                  d.multiplyScalar(1 - r.dampingFactor))
                : (c.set(0, 0, 0), d.set(0, 0, 0)));
            let b = !1;
            if (r.zoomToCursor && ee) {
              let n = null;
              if (r.object.isPerspectiveCamera) {
                let e = t.length();
                n = ae(e * l);
                let i = e - n;
                (r.object.position.addScaledVector(C, i), r.object.updateMatrixWorld());
              } else if (r.object.isOrthographicCamera) {
                let e = new Vector3(T.x, T.y, 0);
                (e.unproject(r.object),
                  (r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / l))),
                  r.object.updateProjectionMatrix(),
                  (b = !0));
                let i = new Vector3(T.x, T.y, 0);
                (i.unproject(r.object),
                  r.object.position.sub(i).add(e),
                  r.object.updateMatrixWorld(),
                  (n = t.length()));
              } else
                (console.warn(
                  `WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`,
                ),
                  (r.zoomToCursor = !1));
              n !== null &&
                (this.screenSpacePanning
                  ? r.target.set(0, 0, -1).transformDirection(r.object.matrix).multiplyScalar(n).add(r.object.position)
                  : (ray.origin.copy(r.object.position),
                    ray.direction.set(0, 0, -1).transformDirection(r.object.matrix),
                    Math.abs(r.object.up.dot(ray.direction)) < _e
                      ? e.lookAt(r.target)
                      : (ge.setFromNormalAndCoplanarPoint(r.object.up, r.target), ray.intersectPlane(ge, r.target))));
            } else
              r.object.isOrthographicCamera &&
                ((r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / l))),
                r.object.updateProjectionMatrix(),
                (b = !0));
            return (
              (l = 1),
              (ee = !1),
              b ||
              f.distanceToSquared(r.object.position) > o ||
              8 * (1 - m.dot(r.object.quaternion)) > o ||
              h.distanceToSquared(r.target) > 0
                ? (r.dispatchEvent(_changeEvent),
                  f.copy(r.object.position),
                  m.copy(r.object.quaternion),
                  h.copy(r.target),
                  !0)
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
            r._domElementKeyEvents !== null &&
              (r._domElementKeyEvents.removeEventListener(`keydown`, Fe), (r._domElementKeyEvents = null)));
        }));
      let r = this,
        i = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_PAN: 4,
          TOUCH_DOLLY_PAN: 5,
          TOUCH_DOLLY_ROTATE: 6,
        },
        a = i.NONE,
        o = 1e-6,
        s = new Spherical(),
        c = new Spherical(),
        l = 1,
        d = new Vector3(),
        f = new Vector2(),
        m = new Vector2(),
        h = new Vector2(),
        g = new Vector2(),
        _ = new Vector2(),
        v = new Vector2(),
        b = new Vector2(),
        x = new Vector2(),
        S = new Vector2(),
        C = new Vector3(),
        T = new Vector2(),
        ee = !1,
        E = [],
        D = {},
        O = !1;
      function k(e) {
        return e === null
          ? ((2 * Math.PI) / 60 / 60) * r.autoRotateSpeed
          : ((2 * Math.PI) / 60) * r.autoRotateSpeed * e;
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
          let e = new Vector3();
          return function (t, n) {
            (e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), d.add(e));
          };
        })(),
        ne = (function () {
          let e = new Vector3();
          return function (t, n) {
            (r.screenSpacePanning === !0
              ? e.setFromMatrixColumn(n, 1)
              : (e.setFromMatrixColumn(n, 0), e.crossVectors(r.object.up, e)),
              e.multiplyScalar(t),
              d.add(e));
          };
        })(),
        N = (function () {
          let e = new Vector3();
          return function (t, n) {
            let i = r.domElement;
            if (r.object.isPerspectiveCamera) {
              let a = r.object.position;
              e.copy(a).sub(r.target);
              let o = e.length();
              ((o *= Math.tan(((r.object.fov / 2) * Math.PI) / 180)),
                M((2 * t * o) / i.clientHeight, r.object.matrix),
                ne((2 * n * o) / i.clientHeight, r.object.matrix));
            } else
              r.object.isOrthographicCamera
                ? (M((t * (r.object.right - r.object.left)) / r.object.zoom / i.clientWidth, r.object.matrix),
                  ne((n * (r.object.top - r.object.bottom)) / r.object.zoom / i.clientHeight, r.object.matrix))
                : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),
                  (r.enablePan = !1));
          };
        })();
      function P(e) {
        r.object.isPerspectiveCamera || r.object.isOrthographicCamera
          ? (l /= e)
          : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),
            (r.enableZoom = !1));
      }
      function re(e) {
        r.object.isPerspectiveCamera || r.object.isOrthographicCamera
          ? (l *= e)
          : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),
            (r.enableZoom = !1));
      }
      function ie(e, t) {
        if (!r.zoomToCursor) return;
        ee = !0;
        let n = r.domElement.getBoundingClientRect(),
          i = e - n.left,
          a = t - n.top,
          o = n.width,
          s = n.height;
        ((T.x = (i / o) * 2 - 1),
          (T.y = -(a / s) * 2 + 1),
          C.set(T.x, T.y, 1).unproject(r.object).sub(r.object.position).normalize());
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
        (x.set(e.clientX, e.clientY),
          S.subVectors(x, b),
          S.y > 0 ? P(te(S.y)) : S.y < 0 && re(te(S.y)),
          b.copy(x),
          r.update());
      }
      function de(e) {
        (_.set(e.clientX, e.clientY),
          v.subVectors(_, g).multiplyScalar(r.panSpeed),
          N(v.x, v.y),
          g.copy(_),
          r.update());
      }
      function ve(e) {
        (ie(e.clientX, e.clientY), e.deltaY < 0 ? re(te(e.deltaY)) : e.deltaY > 0 && P(te(e.deltaY)), r.update());
      }
      function ye(e) {
        let t = !1;
        switch (e.code) {
          case r.keys.UP:
            (e.ctrlKey || e.metaKey || e.shiftKey
              ? j((2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight)
              : N(0, r.keyPanSpeed),
              (t = !0));
            break;
          case r.keys.BOTTOM:
            (e.ctrlKey || e.metaKey || e.shiftKey
              ? j((-2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight)
              : N(0, -r.keyPanSpeed),
              (t = !0));
            break;
          case r.keys.LEFT:
            (e.ctrlKey || e.metaKey || e.shiftKey
              ? A((2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight)
              : N(r.keyPanSpeed, 0),
              (t = !0));
            break;
          case r.keys.RIGHT:
            (e.ctrlKey || e.metaKey || e.shiftKey
              ? A((-2 * Math.PI * r.rotateSpeed) / r.domElement.clientHeight)
              : N(-r.keyPanSpeed, 0),
              (t = !0));
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
        (x.set(0, a),
          S.set(0, (x.y / b.y) ** +r.zoomSpeed),
          P(S.y),
          b.copy(x),
          ie((e.pageX + t.x) * 0.5, (e.pageY + t.y) * 0.5));
      }
      function I(e) {
        (r.enableZoom && De(e), r.enablePan && Ee(e));
      }
      function Oe(e) {
        (r.enableZoom && De(e), r.enableRotate && Te(e));
      }
      function ke(e) {
        r.enabled !== !1 &&
          (E.length === 0 &&
            (r.domElement.setPointerCapture(e.pointerId),
            r.domElement.addEventListener(`pointermove`, L),
            r.domElement.addEventListener(`pointerup`, R)),
          ze(e),
          e.pointerType === `touch` ? Ie(e) : z(e));
      }
      function L(e) {
        r.enabled !== !1 && (e.pointerType === `touch` ? Le(e) : Ae(e));
      }
      function R(e) {
        (Be(e),
          E.length === 0 &&
            (r.domElement.releasePointerCapture(e.pointerId),
            r.domElement.removeEventListener(`pointermove`, L),
            r.domElement.removeEventListener(`pointerup`, R)),
          r.dispatchEvent(_endEvent),
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
          case MOUSE.DOLLY:
            if (r.enableZoom === !1) return;
            (se(e), (a = i.DOLLY));
            break;
          case MOUSE.ROTATE:
            if (e.ctrlKey || e.metaKey || e.shiftKey) {
              if (r.enablePan === !1) return;
              (ce(e), (a = i.PAN));
            } else {
              if (r.enableRotate === !1) return;
              (oe(e), (a = i.ROTATE));
            }
            break;
          case MOUSE.PAN:
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
        a !== i.NONE && r.dispatchEvent(startEvent);
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
        r.enabled === !1 ||
          r.enableZoom === !1 ||
          a !== i.NONE ||
          (e.preventDefault(), r.dispatchEvent(startEvent), ve(Me(e)), r.dispatchEvent(_endEvent));
      }
      function Me(e) {
        let t = e.deltaMode,
          n = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaY: e.deltaY,
          };
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
        e.key === `Control` &&
          ((O = !0),
          document.addEventListener(`keyup`, Pe, {
            passive: !0,
            capture: !0,
          }));
      }
      function Pe(e) {
        e.key === `Control` &&
          ((O = !1),
          document.removeEventListener(`keyup`, Pe, {
            passive: !0,
            capture: !0,
          }));
      }
      function Fe(e) {
        r.enabled === !1 || r.enablePan === !1 || ye(e);
      }
      function Ie(e) {
        switch ((Ve(e), E.length)) {
          case 1:
            switch (r.touches.ONE) {
              case TOUCH.ROTATE:
                if (r.enableRotate === !1) return;
                (be(e), (a = i.TOUCH_ROTATE));
                break;
              case TOUCH.PAN:
                if (r.enablePan === !1) return;
                (xe(e), (a = i.TOUCH_PAN));
                break;
              default:
                a = i.NONE;
            }
            break;
          case 2:
            switch (r.touches.TWO) {
              case TOUCH.DOLLY_PAN:
                if (r.enableZoom === !1 && r.enablePan === !1) return;
                (Ce(e), (a = i.TOUCH_DOLLY_PAN));
                break;
              case TOUCH.DOLLY_ROTATE:
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
        a !== i.NONE && r.dispatchEvent(startEvent);
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
        (t === void 0 && ((t = new Vector2()), (D[e.pointerId] = t)), t.set(e.pageX, e.pageY));
      }
      function He(e) {
        return D[e.pointerId === E[0] ? E[1] : E[0]];
      }
      (r.domElement.addEventListener(`contextmenu`, Re),
        r.domElement.addEventListener(`pointerdown`, ke),
        r.domElement.addEventListener(`pointercancel`, R),
        r.domElement.addEventListener(`wheel`, je, {
          passive: !1,
        }),
        document.addEventListener(`keydown`, Ne, {
          passive: !0,
          capture: !0,
        }),
        this.update());
    }
  };
function mergeGeometries(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    s = e[0].morphTargetsRelative,
    c = new BufferGeometry(),
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
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (s !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `.  .morphAttributes must be consistent throughout all geometries.`,
          ),
          null
        );
      (o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]));
    }
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0) e = d.attributes.position.count;
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
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
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e + ` attribute.`,
        ),
        null
      );
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
      if (!r)
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e + ` morphAttribute.`,
          ),
          null
        );
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
    if (s.isInterleavedBufferAttribute)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.`,
        ),
        null
      );
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`,
        ),
        null
      );
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`,
        ),
        null
      );
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`,
        ),
        null
      );
    if ((i === -1 && (i = s.gpuType), i !== s.gpuType))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`,
        ),
        null
      );
    a += s.array.length;
  }
  let o = new t(a),
    s = 0;
  for (let t = 0; t < e.length; ++t) (o.set(e[t].array, s), (s += e[t].array.length));
  let c = new BufferAttribute(o, n, r);
  return (i !== void 0 && (c.gpuType = i), c);
}
var tc = [
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
  return {
    perm: i,
    pm: a,
  };
}
var Ce = 1 / 3,
  G3 = 1 / 6;
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
      p = (u + d + f) * G3,
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
    let C = m - _ + G3,
      w = h - v + G3,
      T = g - y + G3,
      ee = m - b + 2 * G3,
      E = h - x + 2 * G3,
      D = g - S + 2 * G3,
      O = m - 1 + 3 * G3,
      k = h - 1 + 3 * G3,
      te = g - 1 + 3 * G3,
      A = u & 255,
      j = d & 255,
      M = f & 255,
      ne = 0.6 - m * m - h * h - g * g;
    if (ne < 0) a = 0;
    else {
      let e = tc[n[A + t[j + t[M]]]];
      ((ne *= ne), (a = ne * ne * (e[0] * m + e[1] * h + e[2] * g)));
    }
    let N = 0.6 - C * C - w * w - T * T;
    if (N < 0) o = 0;
    else {
      let e = tc[n[A + _ + t[j + v + t[M + y]]]];
      ((N *= N), (o = N * N * (e[0] * C + e[1] * w + e[2] * T)));
    }
    let P = 0.6 - ee * ee - E * E - D * D;
    if (P < 0) s = 0;
    else {
      let e = tc[n[A + b + t[j + x + t[M + S]]]];
      ((P *= P), (s = P * P * (e[0] * ee + e[1] * E + e[2] * D)));
    }
    let F = 0.6 - O * O - k * k - te * te;
    if (F < 0) c = 0;
    else {
      let e = tc[n[A + 1 + t[j + 1 + t[M + 1]]]];
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
var clamp = (e, t, n) => Math.min(n, Math.max(t, e)),
  Oe = (e) => ((e = clamp(e, 0, 1)), e * e * (3 - 2 * e)),
  ke = (e, t, n = 6) => e / (1 + (e / t) ** +n) ** (1 / n);
function studioMat(e, t = {}) {
  let n = new MeshPhysicalMaterial({
    color: e,
    roughness: t.rough ?? 0.42,
    metalness: t.metal ?? 0,
    clearcoat: t.clear ?? 0.5,
    clearcoatRoughness: t.ccr ?? 0.2,
    envMapIntensity: t.env ?? 0.85,
    transparent: !0,
  });
  return (t.op != null && (n.opacity = t.op), (n.userData.baseOpacity = t.op ?? 1), n);
}
var COL = {
    backbone: 9090774,
    base: {
      A: 3120708,
      T: 13183530,
      G: 7041664,
      C: 1867478,
    },
    core: 10467014,
    H3: 7245769,
    H4: 5024655,
    H2A: 14263387,
    H2B: 13466475,
    H1: 12098777,
    CPK: {
      C: 3817287,
      N: 2841559,
      O: 14692906,
      P: 15765535,
      H: 15265266,
    },
  },
  CSS = {
    base: {
      A: `#2f9e44`,
      T: `#e0584f`,
      G: `#6b7280`,
      C: `#1c7ed6`,
    },
    CPK: {
      C: `#3a3f47`,
      N: `#2b5bd7`,
      O: `#e0322a`,
      P: `#f0901f`,
      H: `#e8edf2`,
    },
    H3: `#6e8fc9`,
    H4: `#4cab8f`,
    H2A: `#d9a45b`,
    H2B: `#cd7b6b`,
    H1: `#b89cd9`,
    struct: `#9fb6c6`,
  },
  BASE_NAME = {
    A: `Adénine`,
    T: `Thymine`,
    C: `Cytosine`,
    G: `Guanine`,
  },
  BASE_TYPE = {
    A: `Purine`,
    G: `Purine`,
    T: `Pyrimidine`,
    C: `Pyrimidine`,
  },
  COMP = {
    A: `T`,
    T: `A`,
    C: `G`,
    G: `C`,
  },
  ELEM_NAME = {
    C: `Carbone`,
    N: `Azote`,
    O: `Oxygène`,
    P: `Phosphore`,
    H: `Hydrogène`,
  },
  ROLE_LABEL = {
    phosphate: `Groupe phosphate`,
    sucre: `Sucre · désoxyribose`,
    base: `Base azotée`,
  },
  HIST_NAME = {
    H3: `Histone H3`,
    H4: `Histone H4`,
    H2A: `Histone H2A`,
    H2B: `Histone H2B`,
    H1: `Histone H1`,
  },
  CODON_AA = {
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
  FACTS = {
    chromosome: {
      title: `Territoire chromosomique`,
      size: `≈ 1-2 µm, région diffuse`,
      kind: `structure`,
      chip: `⟲`,
      chipBg: CSS.struct,
      meta: `Chromosome au repos (interphase)`,
      tip: [
        `Fibre de chromatine repliée en boucles irrégulières`,
        `Chaque chromosome occupe un domaine distinct du noyau`,
      ],
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
      chipBg: CSS.struct,
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
      chipBg: CSS.struct,
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
      chipBg: CSS.struct,
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
      chipBg: CSS.struct,
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
  HIST_FACTS = {
    H3: {
      role: `Forme le tétramère central (H3-H4)₂`,
      mod: `H3K4me, H3K9ac, H3K27me…`,
    },
    H4: {
      role: `Forme le tétramère central (H3-H4)₂`,
      mod: `H4K16ac…`,
    },
    H2A: {
      role: `Dimère H2A-H2B périphérique`,
      mod: `ubiquitination, variants (H2A.Z)`,
    },
    H2B: {
      role: `Dimère H2A-H2B périphérique`,
      mod: `ubiquitination`,
    },
    H1: {
      role: `Histone de liaison — scelle l’entrée/sortie de l’ADN`,
      mod: `compacte la fibre`,
    },
  };
function histoneInfo(e) {
  let t = HIST_FACTS[e] || {
    role: ``,
    mod: ``,
  };
  return {
    kind: `histone`,
    chip: e,
    chipBg: CSS[e],
    chipColor: `#06090d`,
    title: HIST_NAME[e],
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
function structInfo(e) {
  let t = FACTS[e];
  return {
    kind: `structure`,
    chip: t.chip,
    chipBg: t.chipBg,
    chipColor: `#06090d`,
    title: t.title,
    meta: t.meta,
    tip: t.tip,
    rows: t.rows,
    note: t.note,
    size: t.size,
  };
}
function baseInfo(e, t, n, r, i) {
  let a = COMP[e],
    o = e === `G` || e === `C` ? 3 : 2,
    s = [
      [`Type de base`, BASE_TYPE[e]],
      [`Brin`, t === 0 ? `Sens (5′→3′)` : `Complémentaire`],
      [`Squelette`, `Phosphate — désoxyribose`],
      [`Liaisons H`, o + ` (avec ` + a + `)`],
    ];
  if (t === 0 && i) {
    let e = Math.floor(n / 3) * 3,
      t = i.slice(e, e + 3);
    t.length === 3 && s.push([`Codon ` + (Math.floor(n / 3) + 1), t + ` → ` + (CODON_AA[t] || `?`)]);
  }
  return {
    kind: `base`,
    chip: e,
    chipBg: CSS.base[e],
    chipColor: `#06090d`,
    title: BASE_NAME[e],
    meta: BASE_TYPE[e] + ` · position ` + (n + 1) + ` / ` + r,
    tip: [
      (t === 0 ? `Brin sens (5′→3′)` : `Brin complémentaire (3′→5′)`) + ` · n°` + (n + 1),
      `Apparié à ` + a + ` (` + BASE_NAME[a] + `) — ` + o + ` liaisons H`,
    ],
    rows: s,
    pair: {
      a: e,
      b: a,
      aColor: CSS.base[e],
      bColor: CSS.base[a],
      nH: o,
      text: o + ` liaisons hydrogène` + (o === 3 ? ` (G≡C)` : ` (A=T)`),
    },
  };
}
function atomInfo(e) {
  let t = e.el;
  return {
    kind: `atom`,
    chip: t,
    chipBg: CSS.CPK[t],
    chipColor: t === `H` ? `#06090d` : `#fff`,
    title: ELEM_NAME[t],
    meta: (ROLE_LABEL[e.role] || ``) + ` · nucléotide ` + e.base,
    tip: [ROLE_LABEL[e.role] || ``, `Nucléotide ` + e.base + ` · brin ` + (e.strand === 0 ? `sens` : `complémentaire`)],
    rows: [
      [`Élément`, ELEM_NAME[t] + ` (` + t + `)`],
      [`Partie`, ROLE_LABEL[e.role] || `—`],
      [`Base portée`, e.base + ` · ` + BASE_NAME[e.base]],
      [`Brin`, e.strand === 0 ? `Sens (5′→3′)` : `Complémentaire`],
    ],
  };
}
var UP = new Vector3(0, 1, 0);
function tubePts(e, t, n = 6, r = !1) {
  return new TubeGeometry(
    new CatmullRomCurve3(e, r, `catmullrom`, 0.5),
    Math.max(8, Math.round(e.length * 1.25)),
    t,
    n,
    r,
  );
}
function makeDNA(e, t = {}) {
  let { hr: n = 0.8, bbR: r = 0.16, rungR: i = 0.1, twist: a = 8, rungsPerTurn: o = 10, rad: s = 6 } = t,
    c = new CatmullRomCurve3(e, !1, `catmullrom`, 0.5);
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
    d.push(new Vector3(r.x + (i.x * m + o.x * h) * n, r.y + (i.y * m + o.y * h) * n, r.z + (i.z * m + o.z * h) * n));
    let g = Math.cos(s + Math.PI),
      _ = Math.sin(s + Math.PI);
    f.push(new Vector3(r.x + (i.x * g + o.x * _) * n, r.y + (i.y * g + o.y * _) * n, r.z + (i.z * g + o.z * _) * n));
  }
  let m = mergeGeometries([tubePts(d, r, s), tubePts(f, r, s)], !1),
    h = Math.max(1, Math.round(l / (a * o))),
    g = [];
  for (let e = 0; e <= l; e += h) g.push(tubePts([d[e], p[e], f[e]], i, 5));
  return {
    backbones: m,
    rungs: mergeGeometries(g, !1),
  };
}
function blobGeo(e, t = 2) {
  return new IcosahedronGeometry(e, t);
}
function qe() {
  let e = 0.5,
    t = 0.25,
    n = 0.14,
    r = [];
  r.push(new Vector2(1e-4, -0.25), new Vector2(e - n, -0.25));
  for (let t = 1; t <= 6; t++) {
    let i = -Math.PI / 2 + (t / 6) * (Math.PI / 2);
    r.push(new Vector2(e - n + Math.cos(i) * n, -0.10999999999999999 + Math.sin(i) * n));
  }
  for (let i = 1; i <= 6; i++) {
    let a = (i / 6) * (Math.PI / 2);
    r.push(new Vector2(e - n + Math.cos(a) * n, t - n + Math.sin(a) * n));
  }
  r.push(new Vector2(1e-4, t));
  let i = new LatheGeometry(r, 24);
  return (i.computeVertexNormals(), i);
}
function Je() {
  return {
    coreGeo: qe(),
    coreMat: studioMat(COL.core, {
      rough: 0.45,
      clear: 0.45,
      env: 0.8,
    }),
    ringGeo: new TorusGeometry(0.62, 0.18, 12, 32),
    ringMat: studioMat(COL.backbone, {
      rough: 0.36,
      clear: 0.6,
      env: 0.85,
    }),
    linkGeo: new CylinderGeometry(0.075, 0.075, 1, 8, 1, !0),
    linkMat: studioMat(7312296, {
      rough: 0.5,
      env: 0.7,
    }),
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
      l = new Vector3(o + (n() - 0.5) * c, 10.5 * 0.5 - e * 0.875, s + (n() - 0.5) * c),
      u = new Vector3(n() - 0.5, n() - 0.5, n() - 0.5).normalize(),
      d = Math.abs(u.y) > 0.85 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0),
      f = new Vector3().crossVectors(u, d).normalize(),
      p = new Vector3().crossVectors(u, f).normalize(),
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
function coiledFiber(e, t) {
  let r = new CatmullRomCurve3(e, !1, `catmullrom`, 0.5);
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
      p = new Vector3().addScaledVector(i, Math.cos(o)).addScaledVector(a, Math.sin(o)).normalize();
    (l.push(n.clone().addScaledVector(p, f)), u.push(p));
  }
  let m = new Group(),
    h = l.length,
    g = new InstancedMesh(t.coreGeo, t.coreMat, h);
  g.frustumCulled = !1;
  let _ = t.withRing ? new InstancedMesh(t.ringGeo, t.ringMat, h) : null;
  _ && (_.frustumCulled = !1);
  let v = new Object3D(),
    y = new Quaternion(),
    b = new Quaternion(),
    x = new Vector3(0, 0, 1),
    S = t.discScale || 1;
  for (let e = 0; e < h; e++)
    (y.setFromUnitVectors(UP, u[e]),
      v.position.copy(l[e]),
      v.quaternion.copy(y),
      v.scale.setScalar(S),
      v.updateMatrix(),
      g.setMatrixAt(e, v.matrix),
      _ &&
        (b.setFromUnitVectors(x, u[e]),
        v.quaternion.copy(b),
        v.scale.setScalar(S),
        v.updateMatrix(),
        _.setMatrixAt(e, v.matrix)));
  ((g.instanceMatrix.needsUpdate = !0), m.add(g), _ && ((_.instanceMatrix.needsUpdate = !0), m.add(_)));
  let C = null;
  return (
    t.tubeMat &&
      ((C = new Mesh(
        new TubeGeometry(new CatmullRomCurve3(l, !1, `catmullrom`, 0.5), Math.min(700, h * 2), t.tubeR || 0.06, 6, !1),
        t.tubeMat,
      )),
      m.add(C)),
    {
      group: m,
      pos: l,
      cores: g,
      rings: _,
      tube: C,
      mid: Math.floor(h / 2),
    }
  );
}
function buildChromosome(e = 0) {
  let t = new Group(),
    n = new Group();
  t.add(n);
  let { coreGeo: r, coreMat: i, ringGeo: a, ringMat: o } = Je(),
    s = studioMat(9416918, {
      op: 0.5,
      rough: 0.5,
      env: 0.6,
    }),
    c = coiledFiber(Ye(7, e), {
      coilR: 0.86,
      perTurn: 7,
      density: 3.7,
      maxN: 800,
      discScale: 0.8,
      coreGeo: r,
      coreMat: i,
      ringGeo: a,
      ringMat: o,
      withRing: !0,
      tubeMat: s,
      tubeR: 0.1,
    });
  (n.add(c.group), n.position.copy(c.pos[c.mid]).multiplyScalar(-1));
  let l = () => structInfo(`chromosome`);
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
      {
        p: [0, 0, 0.15],
        text: `point de plongée`,
        cls: `tag`,
      },
      {
        p: [f.x, f.y, f.z],
        text: `territoire chromosomique`,
        cls: `tag`,
      },
      {
        p: [p.x, p.y, p.z],
        text: `fibre de chromatine enroulée`,
        cls: ``,
      },
    ],
  };
}
var mtGeos = new Vector3(0.22, 1, 0.16).normalize();
function $e() {
  let e = (Math.PI * 2) / 6,
    t = new Vector3(1, 0, 0),
    n = new Vector3(0, 1, 0),
    r = new Vector3(0, 0, 1),
    a = new Group(),
    { coreGeo: o, coreMat: s, ringGeo: c, ringMat: l, linkGeo: u, linkMat: d } = Je(),
    f = new InstancedMesh(o, s, 26);
  f.frustumCulled = !1;
  let m = new InstancedMesh(c, l, 26);
  m.frustumCulled = !1;
  let h = new InstancedMesh(u, d, 25);
  ((h.frustumCulled = !1), a.add(f, m, h));
  let g = 0.62,
    _ = [];
  {
    let e = Math.PI * (3 - Math.sqrt(5));
    for (let t = 0; t < 7; t++) {
      let n = 1 - (2 * (t + 0.5)) / 7,
        r = Math.sqrt(Math.max(0, 1 - n * n)),
        i = e * t;
      _.push(new Vector3(Math.cos(i) * r, n, Math.sin(i) * r).normalize());
    }
  }
  let v = new ConeGeometry(0.055, g, 5);
  v.translate(0, g / 2, 0);
  let y = new InstancedMesh(
    v,
    studioMat(13208502, {
      rough: 0.6,
      clear: 0.2,
      env: 0.5,
      op: 0.9,
    }),
    182,
  );
  ((y.frustumCulled = !1), a.add(y));
  let b = new Vector3(0, 0, 1),
    x = new Quaternion().setFromUnitVectors(UP, mtGeos),
    S = new Quaternion().setFromUnitVectors(b, mtGeos),
    C = new Object3D(),
    w = -1,
    ee = -1,
    E = new Quaternion(),
    O = new Quaternion(),
    k = new Quaternion(),
    te = new Quaternion(),
    A = new Vector3(),
    j = new Vector3(),
    M = new Quaternion();
  function ne(i, a) {
    let o = 0.18 + clamp(i, 0, 1) * 0.74,
      s = [],
      c = [],
      l = [],
      u = 0;
    for (let i = 0; i < 26; i++) {
      let a = i / 25,
        d = Oe(clamp((a - o) / 0.12 + 0.5, 0, 1)),
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
    return {
      pos: s,
      cis: c,
      angs: l,
    };
  }
  function N(e, t = 0) {
    if (
      ((e = clamp(e, 0, 1)), (t = Math.max(0, t || 0)), w >= 0 && Math.abs(e - w) < 0.0015 && Math.abs(t - ee) < 0.0015)
    )
      return;
    ((w = e), (ee = t));
    let i = 1 + t * 1,
      { pos: a, cis: o, angs: s } = ne(e, i);
    for (let e = 0; e < 26; e++) {
      let t = o[e];
      (A.copy(n).multiplyScalar(Math.cos(s[e])).addScaledVector(r, Math.sin(s[e])).normalize(),
        E.setFromUnitVectors(UP, A),
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
          M.setFromUnitVectors(UP, j),
          C.position.copy(a[e]).addScaledVector(j, 0.42),
          C.quaternion.copy(M),
          C.scale.set(1, 1, 1),
          C.updateMatrix(),
          y.setMatrixAt(e * 7 + t, C.matrix));
    }
    for (let e = 0; e < 25; e++) {
      let t = a[e],
        n = a[e + 1],
        r = new Vector3().subVectors(n, t),
        i = r.length() || 1e-4;
      (r.normalize(),
        C.position.copy(t).addScaledVector(r, i / 2),
        C.quaternion.setFromUnitVectors(UP, r),
        C.scale.set(1, i, 1),
        C.updateMatrix(),
        h.setMatrixAt(e, C.matrix));
    }
    ((f.instanceMatrix.needsUpdate = !0),
      (m.instanceMatrix.needsUpdate = !0),
      (h.instanceMatrix.needsUpdate = !0),
      (y.instanceMatrix.needsUpdate = !0));
  }
  N(0);
  let re = () =>
    w < 0.5
      ? structInfo(`fibre30`)
      : {
          kind: `structure`,
          chip: `⊷`,
          chipBg: CSS.struct,
          chipColor: `#06090d`,
          title: `ADN nucléosomal`,
          meta: `≈ 147 pb`,
          tip: [`ADN enroulé autour de l’octamère`, `≈ 147 pb sur ~1,65 tour`],
          rows: [[`Longueur`, `≈ 147 pb`]],
        };
  return (
    (f.userData.getInfo = () => structInfo(w < 0.5 ? `fibre30` : `nucleosome`)),
    (m.userData.getInfo = re),
    (h.userData.getInfo = () => ({
      kind: `structure`,
      chip: `⊷`,
      chipBg: CSS.struct,
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
    {
      group: a,
      setFold: N,
      getFold: () => w,
      pickables: [f, m, h, y],
      anchors: [],
    }
  );
}
function octamerPositions() {
  return [
    {
      t: `H3`,
      p: [0.55, 0.55, 0.45],
    },
    {
      t: `H3`,
      p: [-0.55, -0.55, -0.45],
    },
    {
      t: `H4`,
      p: [1.05, -0.35, 0.55],
    },
    {
      t: `H4`,
      p: [-1.05, 0.35, -0.55],
    },
    {
      t: `H2A`,
      p: [1.95, 0.85, -0.15],
    },
    {
      t: `H2A`,
      p: [-1.95, -0.85, 0.15],
    },
    {
      t: `H2B`,
      p: [1.55, -1.55, 0.1],
    },
    {
      t: `H2B`,
      p: [-1.55, 1.55, -0.1],
    },
  ];
}
function buildNucleosome(e = 0, t = 1) {
  let r = new Group(),
    i = De((t * 22695477 + e * 97) >>> 0),
    a = [];
  for (let t of octamerPositions()) {
    let i;
    if (e === 1) {
      i = blobGeo(1.12, 3);
      let e = i.attributes.position,
        n = new Vector3();
      for (let r = 0; r < e.count; r++) {
        n.fromBufferAttribute(e, r);
        let i = 1 + 0.16 * Ee(n.x * 1.6 + t.p[0], n.y * 1.6 + t.p[1], n.z * 1.6 + t.p[2]);
        (n.multiplyScalar(i), e.setXYZ(r, n.x, n.y, n.z * 0.78));
      }
      i.computeVertexNormals();
    } else ((i = blobGeo(1.08, 3)), i.scale(1, 1, 0.78));
    let o = studioMat(COL[t.t], {
        rough: e === 1 ? 0.55 : 0.45,
        clear: 0.45,
        ccr: 0.25,
        env: 0.8,
      }),
      s = new Mesh(i, o);
    (s.position.set(t.p[0], t.p[1], t.p[2]),
      (s.userData.spreadBase = s.position.clone()),
      (s.userData.getInfo = () => histoneInfo(t.t)),
      r.add(s),
      a.push(s));
  }
  let o = 3.35,
    s = [];
  for (let e = 0; e <= 150; e++) {
    let t = e / 150,
      n = -1.67 * Math.PI * 2 * t;
    s.push(new Vector3(Math.cos(n) * o, Math.sin(n) * o, (t - 0.5) * 2.5));
  }
  let c = s[0].clone().sub(s[2]).normalize(),
    l = [];
  for (let e = 5; e >= 1; e--) l.push(s[0].clone().add(c.clone().multiplyScalar(0.55 * e)));
  let u = s[150].clone().sub(s[148]).normalize(),
    d = [];
  for (let e = 1; e <= 5; e++) d.push(s[150].clone().add(u.clone().multiplyScalar(0.55 * e)));
  let f = [...l, ...s, ...d],
    p = makeDNA(f, {
      hr: 0.62,
      bbR: 0.16,
      rungR: 0.11,
      twist: f.length * 0.62,
      rungsPerTurn: 9,
      rad: 7,
    }),
    m = studioMat(COL.backbone, {
      rough: 0.34,
      clear: 0.6,
      env: 0.85,
    }),
    h = studioMat(7312296, {
      rough: 0.5,
      env: 0.7,
    }),
    g = new Mesh(p.backbones, m),
    _ = new Mesh(p.rungs, h);
  ((g.userData.getInfo = () => ({
    kind: `structure`,
    chip: `⊷`,
    chipBg: CSS.struct,
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
  let v = studioMat(COL.H1, {
      rough: 0.5,
      clear: 0.4,
      env: 0.75,
    }),
    y = new Mesh(blobGeo(0.85, 3), v);
  (y.position.set(o * 0.96, -0.2, -2.5 * 0.5 - 0.7),
    y.scale.set(1, 0.8, 0.8),
    (y.userData.spreadBase = y.position.clone()),
    (y.userData.getInfo = () => histoneInfo(`H1`)),
    r.add(y),
    a.push(y));
  let b = [`H3`, `H4`, `H2A`, `H2B`, `H3`, `H2A`];
  for (let e = 0; e < b.length; e++) {
    let t = (e / b.length) * Math.PI * 2 + 0.4,
      o = new Vector3(Math.cos(t) * 2, Math.sin(t) * 2, (i() - 0.5) * 1.2),
      s = [o.clone()],
      c = o.clone(),
      l = o.clone().normalize();
    for (let e = 0; e < 4; e++)
      ((l.x += (i() - 0.5) * 0.5),
        (l.y += (i() - 0.5) * 0.5),
        (l.z += (i() - 0.5) * 0.5),
        l.normalize(),
        (c = c.clone().add(l.clone().multiplyScalar(0.55))),
        s.push(c.clone()));
    let u = studioMat(COL[b[e]], {
        rough: 0.6,
        env: 0.6,
      }),
      d = new Mesh(tubePts(s, 0.05, 5), u);
    ((d.userData.getInfo = () => ({
      kind: `structure`,
      chip: `⌇`,
      chipBg: CSS.struct,
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
    r.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), mtGeos),
    {
      group: r,
      pickables: a,
      anchors: [
        {
          p: [-2.2, -2, 0.5],
          text: `octamère d’histones`,
          cls: `tag`,
        },
        {
          p: [0.2, 1.7, 1.2],
          text: `H3`,
          cls: `k`,
        },
        {
          p: [1.9, 0.5, 1.2],
          text: `H4`,
          cls: `k`,
        },
        {
          p: [2.4, 1.5, 0.3],
          text: `H2A`,
          cls: `k`,
        },
        {
          p: [1.9, -1.9, 0.5],
          text: `H2B`,
          cls: `k`,
        },
        {
          p: [3.2, 2.2, 0.2],
          text: `ADN ≈ 1,7 tour`,
          cls: ``,
        },
        {
          p: [3, -1.2, -2.1],
          text: `histone H1`,
          cls: ``,
        },
        {
          p: [-1.9, 2.8, 0.6],
          text: `queues d’histones`,
          cls: `tag`,
        },
      ],
    }
  );
}
var D = {
  R: 2.4,
  RISE: 0.46,
  TWIST: 0.595,
  PHI: 2.42,
  HAND: -1,
  IN: 0.74,
  capR: 0.165,
  PURINE: {
    A: !0,
    G: !0,
  },
  ATR: {
    C: 0.17,
    N: 0.17,
    O: 0.155,
    P: 0.235,
    H: 0.105,
  },
};
function backPt(e, t) {
  return new Vector3(D.R * Math.cos(e), t, D.HAND * D.R * Math.sin(e));
}
function buildHelixTier(e) {
  let t = new Group(),
    r = e.length,
    i = (r - 1) * D.RISE,
    a = [],
    s = studioMat(COL.backbone, {
      rough: 0.34,
      clear: 0.6,
      ccr: 0.2,
      env: 0.85,
    });
  for (let e of [0, D.PHI]) {
    let a = [];
    for (let t = 0; t <= (r - 1) * 12; t++) {
      let n = t / 12,
        r = n * D.TWIST + e,
        o = -i / 2 + n * D.RISE;
      a.push(new Vector3(D.R * Math.cos(r), o, D.HAND * D.R * Math.sin(r)));
    }
    let c = new CatmullRomCurve3(a, !1, `catmullrom`, 0.5);
    t.add(new Mesh(new TubeGeometry(c, Math.max(8, a.length), 0.12, 14, !1), s));
  }
  let c = {
      A: studioMat(COL.base.A, {
        rough: 0.4,
        clear: 0.55,
        env: 0.5,
      }),
      T: studioMat(COL.base.T, {
        rough: 0.4,
        clear: 0.55,
        env: 0.5,
      }),
      G: studioMat(COL.base.G, {
        rough: 0.4,
        clear: 0.55,
        env: 0.5,
      }),
      C: studioMat(COL.base.C, {
        rough: 0.4,
        clear: 0.55,
        env: 0.5,
      }),
    },
    l = 2 * D.R * Math.sin(D.PHI / 2),
    u = new CapsuleGeometry(D.capR, Math.max(0.05, l / 2 - 2 * D.capR), 8, 18),
    d = (e, r, i, o) => {
      let s = new Mesh(u, i),
        c = new Vector3().subVectors(r, e),
        l = c.length();
      (c.normalize(),
        s.position.copy(e).addScaledVector(c, l / 2),
        s.quaternion.setFromUnitVectors(UP, c),
        (s.userData.getInfo = () => o),
        t.add(s),
        a.push(s));
    };
  for (let t = 0; t < r; t++) {
    let n = t * D.TWIST,
      a = -i / 2 + t * D.RISE,
      o = backPt(n, a),
      s = backPt(n + D.PHI, a),
      l = o.clone().add(s).multiplyScalar(0.5),
      u = e[t],
      f = COMP[u];
    (d(o, l, c[u], baseInfo(u, 0, t, r, e)), d(l, s, c[f], baseInfo(f, 1, t, r, e)));
  }
  return (
    (t.userData.capGeo = u),
    {
      group: t,
      pickables: a,
      anchors: [
        {
          p: [D.R + 0.5, i * 0.32, 0],
          text: `squelette sucre-phosphate`,
          cls: ``,
        },
        {
          p: [0, -0.2, D.R + 0.4],
          text: `paires de bases · A·T / G·C`,
          cls: ``,
        },
        {
          p: [-D.R - 0.4, -i * 0.34, 0],
          text: `≈ 2 nm de diamètre`,
          cls: `tag`,
        },
      ],
    }
  );
}
function it(e) {
  if (D.PURINE[e]) {
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
      {
        atoms: t,
        bonds: n,
        attach: 0,
        anchors: r,
        center: [2, 0.05],
      }
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
      {
        atoms: t,
        bonds: n,
        attach: 0,
        anchors: r,
        center: [1.7, 0],
      }
    );
  }
}
function nucleotide(e, t, n, r, i) {
  let a = new Vector3().subVectors(t, e).normalize(),
    o = new Vector3().crossVectors(UP, a).normalize(),
    s = (t, n, r) => new Vector3(e.x + a.x * t + o.x * r, e.y + n, e.z + a.z * t + o.z * r),
    c = `phosphate`,
    l = (e, t) => {
      (r.atoms[e].push(t),
        r.meta[e].push({
          el: e,
          role: c,
          base: n,
          strand: i.strand,
          i: i.i,
        }));
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
    _ = D.IN,
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
function makeLabelSprite(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 128), (t.height = 88));
  let n = t.getContext(`2d`);
  ((n.fillStyle = CSS.base[e] || `#444`),
    ((e, t, r, i, a) => {
      (n.beginPath(),
        n.moveTo(e + a, t),
        n.arcTo(e + r, t, e + r, t + i, a),
        n.arcTo(e + r, t + i, e, t + i, a),
        n.arcTo(e, t + i, e, t, a),
        n.arcTo(e, t, e + r, t, a),
        n.closePath());
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
  let r = new CanvasTexture(t);
  r.colorSpace = SRGBColorSpace;
  let i = new SpriteMaterial({
    map: r,
    transparent: !0,
    depthWrite: !1,
  });
  i.userData.baseOpacity = 1;
  let a = new Sprite(i);
  return (a.scale.set(0.7, 0.48, 1), a);
}
function makeAnnotSprite(e) {
  let t = `500 30px "IBM Plex Mono", monospace`,
    n = document.createElement(`canvas`).getContext(`2d`);
  n.font = t;
  let r = Math.ceil(n.measureText(e).width) + 40,
    i = document.createElement(`canvas`);
  ((i.width = r), (i.height = 56));
  let a = i.getContext(`2d`);
  ((a.fillStyle = `rgba(12,16,21,.9)`),
    ((e, t, n, r, i) => {
      (a.beginPath(),
        a.moveTo(e + i, t),
        a.arcTo(e + n, t, e + n, t + r, i),
        a.arcTo(e + n, t + r, e, t + r, i),
        a.arcTo(e, t + r, e, t, i),
        a.arcTo(e, t, e + n, t, i),
        a.closePath());
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
  let o = new CanvasTexture(i);
  o.colorSpace = SRGBColorSpace;
  let l = new SpriteMaterial({
    map: o,
    transparent: !0,
    depthWrite: !1,
    depthTest: !1,
  });
  l.userData.baseOpacity = 1;
  let u = new Sprite(l);
  return (u.scale.set(r / 200, 56 / 200, 1), u);
}
function buildMolecularTier(e, t = {}) {
  let r = new Group(),
    a = e.length,
    s = [],
    c = {
      atoms: {
        C: [],
        N: [],
        O: [],
        P: [],
        H: [],
      },
      meta: {
        C: [],
        N: [],
        O: [],
        P: [],
        H: [],
      },
      bonds: [],
      hdots: [],
    },
    l = t.center != null ? Math.max(0, Math.min(a - 1, t.center)) : Math.floor((a - 1) / 2),
    u = t.win ?? 2,
    d = Math.max(0, l - u),
    f = Math.min(a - 1, l + u),
    p = (a - 1) * D.RISE,
    m = null;
  for (let t = d; t <= f; t++) {
    let n = t * D.TWIST,
      i = -p / 2 + t * D.RISE,
      a = backPt(n, i),
      o = backPt(n + D.PHI, i),
      s = e[t],
      u = COMP[s],
      d = nucleotide(a, o, s, c, {
        i: t,
        strand: 0,
      }),
      f = nucleotide(o, a, u, c, {
        i: t,
        strand: 1,
      }),
      h = Math.min(d.anchors.length, f.anchors.length);
    for (let e = 0; e < h; e++) {
      let t = d.anchors[e],
        n = f.anchors[e],
        r = new Vector3().subVectors(n, t),
        i = r.length(),
        a = Math.max(2, Math.round(i / 0.17));
      for (let e = 1; e < a; e++) c.hdots.push(t.clone().addScaledVector(r, e / a));
    }
    ([d, f].forEach((e) => {
      let t = makeLabelSprite(e.labelChar);
      (t.position.copy(e.labelPos), r.add(t));
    }),
      t === l && (m = d));
  }
  if (f > d) {
    let e = studioMat(10467014, {
      rough: 0.4,
      env: 0.7,
    });
    for (let t of [0, D.PHI]) {
      let i = [];
      for (let e = d * 12; e <= f * 12; e++) {
        let n = e / 12,
          r = n * D.TWIST + t,
          a = -p / 2 + n * D.RISE;
        i.push(new Vector3(D.R * Math.cos(r), a, D.HAND * D.R * Math.sin(r)));
      }
      let a = new CatmullRomCurve3(i, !1, `catmullrom`, 0.5);
      r.add(new Mesh(new TubeGeometry(a, Math.max(8, i.length), 0.085, 12, !1), e));
    }
  }
  let h = new SphereGeometry(1, 16, 12),
    g = new Object3D();
  for (let e of [`C`, `N`, `O`, `P`, `H`]) {
    let t = c.atoms[e];
    if (!t.length) continue;
    let n = new InstancedMesh(
        h,
        studioMat(COL.CPK[e], {
          rough: 0.36,
          clear: 0.45,
          env: 0.85,
        }),
        t.length,
      ),
      i = D.ATR[e];
    (t.forEach((e, t) => {
      (g.position.copy(e), g.scale.set(i, i, i), g.rotation.set(0, 0, 0), g.updateMatrix(), n.setMatrixAt(t, g.matrix));
    }),
      (n.instanceMatrix.needsUpdate = !0),
      (n.frustumCulled = !1));
    let a = c.meta[e];
    ((n.userData.getInfo = (e) => atomInfo(a[e])), r.add(n), s.push(n));
  }
  if (c.bonds.length) {
    let e = new InstancedMesh(
        new CylinderGeometry(1, 1, 1, 8, 1, !0),
        studioMat(12765906, {
          rough: 0.5,
          env: 0.7,
        }),
        c.bonds.length,
      ),
      t = 0.052;
    (c.bonds.forEach(([n, r], i) => {
      let a = new Vector3().subVectors(r, n),
        o = a.length();
      (a.normalize(),
        g.position.copy(n).addScaledVector(a, o / 2),
        g.quaternion.setFromUnitVectors(UP, a),
        g.scale.set(t, o, t),
        g.updateMatrix(),
        e.setMatrixAt(i, g.matrix));
    }),
      (e.instanceMatrix.needsUpdate = !0),
      (e.frustumCulled = !1),
      r.add(e));
  }
  if (t.hbond !== !1 && c.hdots.length) {
    let e = new SphereGeometry(1, 10, 8),
      t = new MeshStandardMaterial({
        color: 15660024,
        emissive: 7309990,
        emissiveIntensity: 0.4,
        roughness: 0.6,
        transparent: !0,
      });
    t.userData.baseOpacity = 1;
    let n = new InstancedMesh(e, t, c.hdots.length);
    (c.hdots.forEach((e, t) => {
      (g.position.copy(e),
        g.scale.set(0.045, 0.045, 0.045),
        g.rotation.set(0, 0, 0),
        g.updateMatrix(),
        n.setMatrixAt(t, g.matrix));
    }),
      (n.instanceMatrix.needsUpdate = !0),
      (n.frustumCulled = !1),
      r.add(n));
  }
  let _ = [];
  if (t.annot && m) {
    let e = (e) => {
        let t = new Vector3(e.x, 0, e.z);
        return t.lengthSq() < 1e-4 ? UP.clone() : t.normalize();
      },
      t = (e, t, n) => {
        let i = makeAnnotSprite(e),
          a = t.clone().add(n);
        (i.position.copy(a), r.add(i));
        let o = new BufferGeometry().setFromPoints([t, a]),
          s = new LineBasicMaterial({
            color: 12766422,
            transparent: !0,
            depthTest: !1,
          });
        ((s.userData.baseOpacity = 0.9), r.add(new Line(o, s)));
      };
    (t(`groupe phosphate`, m.Ppos, e(m.Ppos).multiplyScalar(1).add(UP.clone().multiplyScalar(1.5))),
      t(`sucre · désoxyribose`, m.sugarPos, e(m.sugarPos).multiplyScalar(2.3).add(UP.clone().multiplyScalar(-0.4))),
      t(`base azotée`, m.basePos, UP.clone().multiplyScalar(2.1).add(e(m.basePos).multiplyScalar(0.6))));
  } else
    _.push(
      {
        p: [4.4, 2.2, 0],
        text: `phosphate (P)`,
        cls: ``,
      },
      {
        p: [2.6, -1.4, 2.4],
        text: `désoxyribose`,
        cls: ``,
      },
      {
        p: [0.3, 0.5, 0.7],
        text: `liaisons H · A·T (2) / G·C (3)`,
        cls: ``,
      },
      {
        p: [-3.4, -2.6, 0],
        text: `bases azotées (N)`,
        cls: `tag`,
      },
    );
  return {
    group: r,
    pickables: s,
    anchors: _,
  };
}
var lt = document.getElementById(`stage`),
  mount = document.getElementById(`mount`),
  dt = document.getElementById(`bgLayer`),
  ft = document.getElementById(`bgLayerCell`),
  renderer = new WebGLRenderer({
    antialias: !0,
    alpha: !0,
    powerPreference: `high-performance`,
    preserveDrawingBuffer: !0,
  });
(renderer.setPixelRatio(Math.min(devicePixelRatio, 2)),
  renderer.setSize(innerWidth, innerHeight),
  renderer.setClearColor(0, 0),
  (renderer.toneMapping = 4),
  (renderer.toneMappingExposure = 1),
  (renderer.outputColorSpace = SRGBColorSpace),
  (renderer.localClippingEnabled = !0),
  mount.appendChild(renderer.domElement));
var scene = new Scene(),
  camera = new PerspectiveCamera(34, innerWidth / innerHeight, 0.05, 400);
camera.position.set(2, 0.8, 14.5);
function makeEnvTexture() {
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
  (r.addColorStop(0, `rgba(255,255,255,.6)`),
    r.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = r),
    t.fillRect(0, 0, 512, 256));
  let i = new CanvasTexture(e);
  return ((i.mapping = 303), (i.colorSpace = SRGBColorSpace), i);
}
var gt = new PMREMGenerator(renderer);
((scene.environment = gt.fromEquirectangular(makeEnvTexture()).texture), gt.dispose());
var _t = new DirectionalLight(16777215, 1.55);
(_t.position.set(-5, 9, 8), scene.add(_t));
var vt = new DirectionalLight(12375295, 0.5);
(vt.position.set(8, -3, 5), scene.add(vt));
var yt = new DirectionalLight(16777215, 0.85);
(yt.position.set(-4, 5, -9), scene.add(yt), scene.add(new HemisphereLight(15660280, 1712940, 0.45)));
var world = new Group();
scene.add(world);
var controls = new ve(camera, renderer.domElement);
((controls.enableDamping = !0),
  (controls.dampingFactor = 0.08),
  (controls.enablePan = !1),
  (controls.enableZoom = !1),
  (controls.autoRotate = !1), // rotation auto éteinte par défaut (l'utilisateur l'active via le bouton Rotation)
  (controls.autoRotateSpeed = 0.9),
  controls.target.set(0, 0, 0));
var TIERS = [],
  TARGET = 8.6;
function measureMaxDim(e) {
  e.updateMatrixWorld(!0);
  let t = new Box3(),
    n = !1;
  (e.traverse((e) => {
    (e.isMesh || e.isInstancedMesh) && e.geometry && (t.expandByObject(e), (n = !0));
  }),
    (!n || t.isEmpty()) && t.setFromObject(e));
  let r = new Vector3();
  return (t.getSize(r), Math.max(r.x, r.y, r.z) || 1);
}
function addTier(e, t, n, r, i, a) {
  let o = i.group;
  ((o.visible = !1), world.add(o));
  let s = TARGET / measureMaxDim(o);
  TIERS.push({
    name: e,
    shortLabel: t,
    scaleLabel: n,
    V: r,
    group: o,
    baseScale: s,
    pickables: i.pickables || [],
    anchors: i.anchors || [],
    factsKey: a,
    alpha: 0,
    labelAlpha: 0,
  });
}
var currentSeq = `GCTAGCATCGGATTACCGTAGCTAGGCATCGA`,
  Et = 0;
function nucRandInSphere(e) {
  let t = Math.random(),
    n = Math.random(),
    r = e * Math.cbrt(Math.random()),
    i = Math.acos(2 * n - 1),
    a = 2 * Math.PI * t;
  return new Vector3(r * Math.sin(i) * Math.cos(a), r * Math.sin(i) * Math.sin(a), r * Math.cos(i));
}
function Dt(e, t) {
  let n = [],
    r = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < e; i++) {
    let a = 1 - (i / (e - 1)) * 2,
      o = Math.sqrt(Math.max(0, 1 - a * a)),
      s = r * i;
    n.push(new Vector3(Math.cos(s) * o, a, Math.sin(s) * o).multiplyScalar(t));
  }
  return n;
}
function nucDisplace(e, t, n, r) {
  let i = e.attributes.position,
    a = new Vector3(),
    o = new Vector3();
  for (let e = 0; e < i.count; e++) {
    (a.fromBufferAttribute(i, e), o.copy(a).normalize());
    let s = Math.sin(o.x * n + r) * Math.cos(o.y * n * 1.3 + r);
    ((s += 0.5 * Math.sin(o.y * n * 2.1 + r * 2) * Math.cos(o.z * n * 1.7 + r)),
      (s += 0.25 * Math.sin(o.z * n * 3.3 + r * 3)));
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
    i.push(new Vector2(e * Math.sin(n), e * Math.cos(n)));
  }
  let o = new Vector2(e * Math.sin(a), e * Math.cos(a)),
    s = new Vector2((e - n) * Math.sin(a), (e - n) * Math.cos(a)),
    c = o.clone().add(s).multiplyScalar(0.5),
    l = o.clone().sub(s).multiplyScalar(0.5),
    d = new Vector2(Math.sin(a), Math.cos(a));
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
    i.push(new Vector2((e - n) * Math.sin(r), (e - n) * Math.cos(r)));
  }
  let f = new LatheGeometry(i, r, 0, Math.PI * 2);
  return (f.computeVertexNormals(), f);
}
function At() {
  let e = new SphereGeometry(0.021, 12, 9),
    t = new SphereGeometry(0.014, 10, 7);
  return (e.scale(1, 0.88, 1), t.scale(1, 0.9, 1), t.translate(0.006, 0.02, -0.003), mergeGeometries([e, t]));
}
var NUC_FACTS = {
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
function nucInfo(e) {
  let t = NUC_FACTS[e];
  return {
    kind: `structure`,
    chip: t.chip,
    chipBg: `#b48ce6`,
    chipColor: `#0b0518`,
    title: t.title,
    meta: t.meta,
    tip: t.tip,
    rows: t.rows,
  };
}
var cellClip = new Plane(new Vector3(0, -1, 0), 0),
  CELL = {
    R: 3.4,
    sy: 0.9,
  },
  Ft = {
    cy: -0.5,
    r: 1.5,
  },
  It = 1.275, // coupe par défaut : la barre « Fermeture cellule » affiche 15 % ((1.5-1.275)/1.5)
  cutDepthNuc = 0;
function cellCutYLocal() {
  return CELL.R * CELL.sy * (1 - It * 0.95);
}
var nucClip = new Plane(new Vector3(0, -1, 0), 1e6),
  cellParts = {
    rim: null,
    group: null,
  },
  cellRims = []; // toutes les bagues de coupe (animale + végétale) mises à jour ensemble par Gt()
function cellMembraneMat(e, t, n, r, i, a) {
  let o = new ShaderMaterial({
    uniforms: {
      colInner: {
        value: new Color(e),
      },
      colRim: {
        value: new Color(t),
      },
      baseAlpha: {
        value: n,
      },
      rimPow: {
        value: r,
      },
      time: {
        value: 0,
      },
      uOpacity: {
        value: 1,
      },
    },
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
    clippingPlanes: [a || cellClip],
  });
  return ((o.userData.baseOpacity = 1), o);
}
var CELL_COL = {
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
  CELL_FACTS = {
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
function cellInfo(e) {
  let t = CELL_FACTS[e];
  return {
    kind: `structure`,
    chip: `●`,
    chipBg: CELL_COL[e] || `#df7f68`,
    chipColor: `#0b0518`,
    title: t.title,
    meta: t.meta,
    tip: t.tip,
    rows: t.rows,
  };
}
// ============================================================ CELLULE ANIMALE (niveau le plus large de la plongée)
// Construit tout le modèle : membrane en coupe, cytoplasme, noyau (enveloppe/pores/nucléole/chromatine) et organites.
// Helpers locaux : makeCellMat (matériau standard + plan de coupe), tagCell/tagNuc (survol→fiche), addScatterCloud (nuage de points),
// buildERStack (pile de cisternes du RE rugueux + ribosomes), buildCentriole (9 triplets), scatterRibosomes (ribosomes libres).
function buildCell() {
  let cellGroup = new Group(),
    pickables = [];
  cellParts.group = cellGroup;
  let cellR = CELL.R,
    cellSquash = CELL.sy,
    innerR = cellR - 0.22,
    syncShaderOpacity = (e) => {
      e.onBeforeRender = () => {
        let t = e.material;
        ((t.uniforms.uOpacity.value = t.opacity),
          (t.uniforms.time.value = performance.now() * 0.001),
          (t.depthWrite = !1));
      };
    },
    makeCellMat = (e, t, n, r, i, a) => {
      let o = Object.assign(
          {
            color: e,
            emissive: t || `#000000`,
            emissiveIntensity: n || 0,
            roughness: r ?? 0.6,
            metalness: 0.02,
            transparent: !0,
          },
          i || {},
        ),
        s = new MeshStandardMaterial(o);
      return ((s.clippingPlanes = [a || cellClip]), (s.userData.baseOpacity = o.opacity == null ? 1 : o.opacity), s);
    },
    tagCell = (e, n) => ((e.userData.structure = n), (e.userData.getInfo = () => cellInfo(n)), pickables.push(e), e),
    tagNuc = (e, n, r) => ((e.userData.structure = r), (e.userData.getInfo = () => nucInfo(n)), pickables.push(e), e),
    spherePt = (e, t) => new Vector3(Math.sin(e) * Math.cos(t), Math.cos(e), Math.sin(e) * Math.sin(t)),
    membraneShell = new Group();
  cellGroup.add(membraneShell);


  let membGeo = new IcosahedronGeometry(cellR, 26);
  (nucDisplace(membGeo, 0.02, 3.1, 2.4), membGeo.scale(1, cellSquash, 1));
  // ——— Membrane plasmique (double coque déformée + halo fresnel via cellMembraneMat)
  let membraneMesh = new Mesh(membGeo, cellMembraneMat(CELL_COL.membrane, `#f0b09f`, 0.5, 1.7, 0));
  ((membraneMesh.renderOrder = 8),
    syncShaderOpacity(membraneMesh),
    tagCell(membraneMesh, `membrane`),
    membraneShell.add(membraneMesh));
  let cytoGeo = new IcosahedronGeometry(innerR, 24);
  (nucDisplace(cytoGeo, 0.022, 3.3, 8.1), cytoGeo.scale(1, cellSquash, 1));
  // ——— Cytoplasme (coque interne translucide)
  let cytoplasmMesh = new Mesh(cytoGeo, cellMembraneMat(`#7a4f70`, `#c79ab0`, 0.34, 2.2, 1));
  ((cytoplasmMesh.renderOrder = 7),
    syncShaderOpacity(cytoplasmMesh),
    tagCell(cytoplasmMesh, `cytoplasm`),
    membraneShell.add(cytoplasmMesh));
  let rimMat = makeCellMat(`#e79684`, `#7a2f22`, 0.16, 0.5, {
    side: 2,
  });
  rimMat.clippingPlanes = [];
  // ——— Anneau qui souligne le bord de la coupe
  let rimMesh = new Mesh(new TorusGeometry(1, 0.14, 14, 140), rimMat);
  ((rimMesh.rotation.x = Math.PI / 2),
    (rimMesh.userData.structure = `membrane`),
    (rimMesh.userData.getInfo = () => cellInfo(`membrane`)),
    membraneShell.add(rimMesh),
    pickables.push(rimMesh),
    (cellParts.rim = rimMesh));
  cellRims.push({ mesh: rimMesh, ro: cellR, ri: innerR });
  // ——— Nuages de points en suspension dans le cytoplasme
  let cytoScatterGroup = new Group();
  cellGroup.add(cytoScatterGroup);
  let addScatterCloud = (e, t, n, r, i) => {
    let a = new Float32Array(e * 3);
    for (let n = 0; n < e; n++) {
      let e = nucRandInSphere(t);
      ((a[n * 3] = e.x), (a[n * 3 + 1] = e.y * cellSquash), (a[n * 3 + 2] = e.z));
    }
    let o = new BufferGeometry();
    o.setAttribute(`position`, new BufferAttribute(a, 3));
    let c = new PointsMaterial({
      color: i,
      size: n,
      transparent: !0,
      opacity: r,
      depthWrite: !1,
      sizeAttenuation: !0,
    });
    ((c.userData.baseOpacity = r), (c.clippingPlanes = [cellClip]), cytoScatterGroup.add(new Points(o, c)));
  };
  (addScatterCloud(3400, 3, 0.03, 0.34, `#b7a3e6`),
    addScatterCloud(700, 3, 0.1, 0.14, `#cabcf0`),
    addScatterCloud(240, 2.9, 0.26, 0.06, `#8f6fb0`));
  let nucleusPos = new Vector3(0.25, -0.5, -0.2),
    nucleusR = 1.5,
  // ═══════════ NOYAU ═══════════ (garde son propre plan de coupe nucClip → reste entier quand on coupe la cellule)
    nucleusGroup = new Group();
  (nucleusGroup.position.copy(nucleusPos), cellGroup.add(nucleusGroup));
  let nucEnvOuterGeo = new IcosahedronGeometry(nucleusR, 20);
  nucDisplace(nucEnvOuterGeo, 0.026, 4, 6.3);
  // enveloppe nucléaire — 2 feuillets
  let nucEnvOuter = new Mesh(nucEnvOuterGeo, cellMembraneMat(CELL_COL.noyau, `#d3dcff`, 0.2, 2, void 0, nucClip));
  ((nucEnvOuter.renderOrder = 18),
    syncShaderOpacity(nucEnvOuter),
    tagNuc(nucEnvOuter, `envelope`, `nuc_env`),
    nucleusGroup.add(nucEnvOuter));
  let nucEnvInnerGeo = new IcosahedronGeometry(nucleusR * 0.9, 18);
  nucDisplace(nucEnvInnerGeo, 0.028, 4.4, 11.1);
  let nucEnvInner = new Mesh(nucEnvInnerGeo, cellMembraneMat(CELL_COL.noyau, `#bcacff`, 0.16, 2.5, void 0, nucClip));
  ((nucEnvInner.renderOrder = 17),
    syncShaderOpacity(nucEnvInner),
    tagNuc(nucEnvInner, `envelope`, `nuc_env`),
    nucleusGroup.add(nucEnvInner));
  let le = makeCellMat(
      `#3f57ab`,
      `#22326f`,
      0.4,
      0.5,
      {
        metalness: 0.15,
        opacity: 0.96,
      },
      nucClip,
    ),
  // pores nucléaires (tores instanciés sur la sphère)
    poresInst = new InstancedMesh(new TorusGeometry(0.1, 0.036, 8, 16), le, 64);
  poresInst.frustumCulled = !1;
  let de = new Object3D();
  (Dt(64, nucleusR * 0.99).forEach((e, t) => {
    (de.position.copy(e), de.lookAt(0, 0, 0), de.updateMatrix(), poresInst.setMatrixAt(t, de.matrix));
  }),
    (poresInst.instanceMatrix.needsUpdate = !0),
    tagNuc(poresInst, `pores`, `nuc_pores`),
    nucleusGroup.add(poresInst));
  let fe = new IcosahedronGeometry(0.5, 4);
  nucDisplace(fe, 0.13, 5, 7.7);
  // nucléole
  let nucleolusMesh = new Mesh(fe, makeCellMat(CELL_COL.nucleole, `#c47a10`, 0.5, 0.7, {}, nucClip));
  (nucleolusMesh.position.set(0.26, -0.18, 0.14),
    tagNuc(nucleolusMesh, `nucleolus`, `nuc_nucleolus`),
    nucleusGroup.add(nucleolusMesh));
  let me = makeCellMat(
      `#ffffff`,
      `#332a70`,
      0.14,
      0.4,
      {
        opacity: 0.92,
      },
      nucClip,
    ),
    he = makeCellMat(
      `#8fb0ff`,
      `#33407a`,
      0.16,
      0.55,
      {
        opacity: 0.6,
      },
      nucClip,
    ),
    ge = new IcosahedronGeometry(1, 2),
    _e = [],
    ve = [],
    be = [`#7aa2ff`, `#9d7bff`, `#8fb0ff`, `#b98cff`],
    xe = new Color();
  for (let e = 0; e < 7; e++) {
    let t = 4 + Math.floor(Math.random() * 3),
      r = [];
    for (let e = 0; e < t; e++) r.push(nucRandInSphere(nucleusR * 0.82));
    let i = new CatmullRomCurve3(r, !1, `catmullrom`, 0.5),
      a = new Mesh(new TubeGeometry(i, 120, 0.011, 5, !1), he);
    (tagNuc(a, `chromatin`, `nuc_chromatin`), nucleusGroup.add(a));
    let s = i.getLength(),
      c = Math.max(5, Math.floor(s / 0.14)),
      l = be[e % be.length];
    for (let e = 0; e <= c; e++)
      (_e.push({
        p: i.getPoint(e / c),
        s: 0.044 + Math.random() * 0.02,
      }),
        xe.set(l).offsetHSL(0, 0, (Math.random() - 0.5) * 0.14),
        ve.push(xe.clone()));
  }
  // chromatine — perles (nucléosomes) instanciées le long de fibres courbes
  let chromatinInst = new InstancedMesh(ge, me, _e.length);
  chromatinInst.frustumCulled = !1;
  let Ce = new Object3D();
  (_e.forEach((e, t) => {
    (Ce.position.copy(e.p),
      Ce.scale.setScalar(e.s),
      Ce.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      Ce.updateMatrix(),
      chromatinInst.setMatrixAt(t, Ce.matrix),
      chromatinInst.setColorAt(t, ve[t]));
  }),
    (chromatinInst.instanceMatrix.needsUpdate = !0),
    chromatinInst.instanceColor && (chromatinInst.instanceColor.needsUpdate = !0),
    tagNuc(chromatinInst, `chromatin`, `nuc_chromatin`),
    nucleusGroup.add(chromatinInst));
  // ——— Réticulum endoplasmique RUGUEUX : cisternes empilées + ribosomes (buildERStack)
  let erGroup = new Group();
  nucleusGroup.add(erGroup);
  let Te = makeCellMat(CELL_COL.erRough, `#6e2a4d`, 0.32, 0.5, {
      side: 2,
    }),
    Ee = makeCellMat(CELL_COL.ribosomes, `#3a0f28`, 0.24, 0.28, {
      metalness: 0.05,
    }),
    De = At(),
    buildERStack = (e, r) => {
      let a = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), e.clone().normalize()),
        s = new Group();
      (s.quaternion.copy(a), erGroup.add(s));
      let c = [],
        l = [];
      for (let e = 0; e < r.NC; e++) {
        let i = r.r0 + e * r.dr,
          a = r.cap0 - e * r.dcap,
          o = kt(i, a, 0.11, 56);
        nucDisplace(o, 0.006, 5.2, r.seed + e * 1.7);
        let u = new Mesh(o, Te);
        ((u.renderOrder = 14),
          (u.userData.structure = `erRough`),
          (u.userData.getInfo = () => cellInfo(`erRough`)),
          s.add(u),
          pickables.push(u),
          c.push({
            r: i,
            cap: a,
          }),
          l.push(spherePt(a * 0.82, e * 1.4).multiplyScalar(i - 0.04)));
      }
      for (let e = 0; e < l.length - 1; e++) {
        let r = new Mesh(
          new TubeGeometry(
            new CatmullRomCurve3([
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
        ((r.userData.structure = `erRough`),
          (r.userData.getInfo = () => cellInfo(`erRough`)),
          s.add(r),
          pickables.push(r));
      }
      let u = [];
      c.forEach(({ r: e, cap: t }) => {
        let n = Math.floor(130 * t * Math.sqrt(e) * r.riboScale);
        for (let r = 0; r < n; r++) {
          let n = spherePt(Math.random() * t * 0.99, Math.random() * Math.PI * 2);
          u.push({
            p: n.clone().multiplyScalar(e + 0.008),
            nrm: n,
            s: 0.8 + Math.random() * 0.3,
          });
        }
      });
      let d = new InstancedMesh(De, Ee, u.length),
        f = new Object3D(),
        m = new Vector3(0, 1, 0);
      return (
        u.forEach((e, t) => {
          (f.position.copy(e.p),
            f.quaternion.setFromUnitVectors(m, e.nrm.clone().normalize()),
            f.rotateY(Math.random() * 6.28),
            f.scale.setScalar(e.s),
            f.updateMatrix(),
            d.setMatrixAt(t, f.matrix));
        }),
        (d.userData.structure = `erRough`),
        (d.userData.getInfo = () => cellInfo(`erRough`)),
        s.add(d),
        pickables.push(d),
        {
          cl: s,
          cist: c,
        }
      );
    };
  buildERStack(new Vector3(0.85, -0.45, 0.5), {
    NC: 5,
    r0: 1.72,
    dr: 0.15,
    cap0: 0.9,
    dcap: 0.05,
    riboScale: 1,
    seed: 4,
  });
  let smoothErBase = buildERStack(new Vector3(-0.8, -0.4, -0.5), {
      NC: 4,
      r0: 1.66,
      dr: 0.15,
      cap0: 0.82,
      dcap: 0.05,
      riboScale: 0.8,
      seed: 17,
    }),
    ke = makeCellMat(CELL_COL.erSmooth, `#43203a`, 0.24, 0.55, {
      opacity: 0.96,
    }),
    smoothErGroup = new Group();
  smoothErBase.cl.add(smoothErGroup);
  let lastCisterna = smoothErBase.cist[smoothErBase.cist.length - 1],
    erTips = [];
  for (let e = 0; e < 9; e++) {
    let r = (e / 9) * Math.PI * 2 + Math.random() * 0.4,
      i = spherePt(lastCisterna.cap * (0.55 + Math.random() * 0.28), r),
      a = i.clone().multiplyScalar(lastCisterna.r + 0.05),
      s = [a.clone()],
      c = i
        .clone()
        .multiplyScalar(0.42)
        .add(new Vector3(0, -0.15, 0))
        .normalize();
    for (let e = 0; e < 4; e++) {
      let e = c
        .clone()
        .multiplyScalar(0.26 + Math.random() * 0.26)
        .add(nucRandInSphere(1).normalize().multiplyScalar(0.2));
      ((a = a.clone().add(e)), a.length() > 2.5 && a.setLength(2.5), s.push(a.clone()), erTips.push(a.clone()));
    }
    let l = new Mesh(new TubeGeometry(new CatmullRomCurve3(s, !1, `catmullrom`, 0.4), 60, 0.07, 8, !1), ke);
    ((l.userData.structure = `erSmooth`),
      (l.userData.getInfo = () => cellInfo(`erSmooth`)),
      smoothErGroup.add(l),
      pickables.push(l));
  }
  for (let e = 0; e < erTips.length; e++)
    for (let r = e + 1; r < erTips.length; r++) {
      let i = erTips[e].distanceTo(erTips[r]);
      if (i > 0.3 && i < 0.95 && Math.random() < 0.22) {
        let i = erTips[e].clone().lerp(erTips[r], 0.5).add(nucRandInSphere(1).normalize().multiplyScalar(0.12)),
          a = new Mesh(new TubeGeometry(new CatmullRomCurve3([erTips[e], i, erTips[r]]), 24, 0.055, 6, !1), ke);
        ((a.userData.structure = `erSmooth`),
          (a.userData.getInfo = () => cellInfo(`erSmooth`)),
          smoothErGroup.add(a),
          pickables.push(a));
      }
    }
  // ——— Appareil de Golgi (dictyosome : saccules empilés)
  let golgiGroup = new Group();
  (golgiGroup.position.set(-1.7, -1.2, 0.7), golgiGroup.rotation.set(0.5, 0.4, -0.35), cellGroup.add(golgiGroup));
  let golgiMat = makeCellMat(CELL_COL.golgi, `#2a3576`, 0.2, 0.5, {
      side: 2,
      opacity: 0.96,
    }),
    Me = makeCellMat(`#c3ccff`, `#3a4890`, 0.3, 0.45, {
      side: 2,
    });
  for (let e = 0; e < 6; e++) {
    let t = kt(1.5 - e * 0.05, 0.42, 0.05, 44);
    nucDisplace(t, 0.006, 6, e * 2.1);
    let r = new Mesh(t, e >= 4 ? Me : golgiMat);
    (r.scale.setScalar(0.8), (r.position.y = e * 0.17 - 0.42), tagCell(r, `golgi`), golgiGroup.add(r));
  }
  // ——— Vésicules de sécrétion qui bourgeonnent du Golgi (petites → étiquetées « Appareil de Golgi »)
  // Rayon de l'anneau resserré pour qu'elles restent à l'intérieur de la membrane (ne dépassent plus du bord).
  let golgiVesGeo = new IcosahedronGeometry(1, 2),
    Pe = makeCellMat(`#8d9ee6`, `#2a3576`, 0.16, 0.5, {
      opacity: 0.9,
    });
  for (let e = 0; e < 10; e++) {
    let t = new Mesh(golgiVesGeo, Pe),
      r = Math.random() * 6.28,
      i = 0.32 + Math.random() * 0.22;
    (t.position.set(Math.cos(r) * i, (e / 10) * 0.8 - 0.4, Math.sin(r) * i),
      t.scale.setScalar(0.05 + Math.random() * 0.07),
      tagCell(t, `golgi`),
      golgiGroup.add(t));
  }
  // ——— Mitochondries (6, avec crêtes internes ; production d’ATP par respiration)
  [
    {
      p: [-1.5, -1, 1.5],
      L: 0.6,
      R: 0.29,
      e: [0.4, 0.9, 0.2],
    },
    {
      p: [1.9, -1.7, -1.1],
      L: 0.55,
      R: 0.27,
      e: [1.1, 0.3, 0.6],
    },
    {
      p: [-1.9, -1.5, -0.4],
      L: 0.5,
      R: 0.25,
      e: [0.2, 1.4, 0.9],
    },
    {
      p: [0.3, -1.9, 1.6],
      L: 0.56,
      R: 0.27,
      e: [0.7, 0.5, 1.3],
    },
    {
      p: [1.7, -2, -0.7],
      L: 0.5,
      R: 0.25,
      e: [1.3, 1, 0.3],
    },
    {
      p: [-0.7, -1.7, 2],
      L: 0.48,
      R: 0.24,
      e: [0.3, 0.2, 0.8],
    },
  ].forEach((t, r) => {
    let i = new Group();
    (i.position.set(t.p[0], t.p[1], t.p[2]), i.rotation.set(t.e[0], t.e[1], t.e[2]), cellGroup.add(i));
    let a = new IcosahedronGeometry(1, 4);
    (nucDisplace(a, 0.05, 6, r * 3.7), a.scale(t.L, t.R, t.R));
    let s = new Mesh(a, cellMembraneMat(`#4f86bf`, `#bcd6f5`, 0.62, 1.9));
    ((s.renderOrder = 16), syncShaderOpacity(s), tagCell(s, `mitochondria`), i.add(s));
    let c = makeCellMat(`#9fc2ec`, `#26507e`, 0.35, 0.55, {
      side: 2,
      opacity: 0.96,
    });
    for (let e = 0; e < 2; e++) {
      let r = [],
        a = (e === 0 ? 0.42 : -0.42) * t.R;
      for (let e = 0; e <= 8; e++) {
        let n = (-0.72 + (e / 8) * 1.44) * t.L,
          i = (e % 2 ? 0.6 : -0.6) * t.R * 0.72;
        r.push(new Vector3(n, i, a + (Math.random() - 0.5) * 0.03));
      }
      let s = new Mesh(
        new TubeGeometry(new CatmullRomCurve3(r, !1, `catmullrom`, 0.4), 80, (0.045 * t.R) / 0.28, 6, !1),
        c,
      );
      ((s.userData.structure = `mitochondria`), (s.userData.getInfo = () => cellInfo(`mitochondria`)), i.add(s));
    }
  });
  // ——— Centrioles (9 triplets de microtubules — cellule animale)
  {
    let Fe = new Group();
    (Fe.position.set(-0.4, -0.5, 1.35), Fe.rotation.set(0.3, 0.4, 0.1), cellGroup.add(Fe));
    let centrioleMat = makeCellMat(CELL_COL.centrioles, `#0c5763`, 0.42, 0.35, {
        metalness: 0.25,
      }),
      buildCentriole = (e, t) => {
        let r = new Group();
        for (let e = 0; e < 9; e++) {
          let t = (e / 9) * Math.PI * 2,
            i = new Mesh(new CylinderGeometry(0.026, 0.026, 0.4, 7), centrioleMat);
          (i.position.set(Math.cos(t) * 0.15, 0, Math.sin(t) * 0.15),
            (i.rotation.z = 0.34),
            (i.rotation.y = t),
            tagCell(i, `centrioles`),
            r.add(i));
        }
        return (r.quaternion.copy(e), r.position.copy(t), r);
      };
    (Fe.add(buildCentriole(new Quaternion(), new Vector3(0, 0, 0))),
      Fe.add(buildCentriole(new Quaternion().setFromEuler(new Euler(Math.PI / 2, 0, 0)), new Vector3(0.34, 0.05, 0.22))));
  }
  // ——— Ribosomes libres dispersés dans le cytoplasme
  let scatterRibosomes = (e) => {
      for (let t = 0; t < 50; t++) {
        let t = nucRandInSphere(1).normalize(),
          n = 1 + Math.random() * 1.9,
          r = new Vector3(t.x * n, (t.y * 0.55 - 0.55) * n * cellSquash, t.z * n);
        if (
          !(r.y > cellCutYLocal() - 0.2) &&
          !(r.length() > cellR - 0.4) &&
          !(r.distanceTo(nucleusPos) < (e || 0) + nucleusR + 0.12)
        )
          return r;
      }
      return new Vector3((Math.random() - 0.5) * 2, -1.8, (Math.random() - 0.5) * 2);
    },
    ze = new IcosahedronGeometry(1, 3),
    lysoGeo = new OctahedronGeometry(1, 0),
  // ——— Lysosomes (digestion, milieu acide)
    lysoMat = makeCellMat(CELL_COL.lysosomes, `#2a1656`, 0.26, 0.82),
    He = makeCellMat(`#b9a6ff`, `#4a2f8a`, 0.4, 0.6);
  for (let t = 0; t < 8; t++) {
    let t = scatterRibosomes(0.2),
      r = 0.14 + Math.random() * 0.1,
      i = new Mesh(ze, lysoMat);
    (i.position.copy(t), i.scale.setScalar(r), tagCell(i, `lysosomes`), cellGroup.add(i));
    for (let i = 0; i < 3; i++) {
      let i = new Mesh(ze, He);
      (i.position.copy(t).add(
        nucRandInSphere(1)
          .normalize()
          .multiplyScalar(r * 0.5),
      ),
        i.scale.setScalar(r * 0.2),
        cellGroup.add(i));
    }
  }
  // ——— Peroxysomes (détoxication, catalase)
  let peroxMat = makeCellMat(CELL_COL.peroxisomes, `#1f2f66`, 0.2, 0.5, {
      opacity: 0.62,
    }),
    We = makeCellMat(`#dfeaff`, `#8fb0ff`, 0.5, 0.3);
  for (let t = 0; t < 6; t++) {
    let t = scatterRibosomes(0.15),
      r = 0.12 + Math.random() * 0.07,
      i = new Mesh(ze, peroxMat);
    (i.position.copy(t), i.scale.setScalar(r), tagCell(i, `peroxisomes`), cellGroup.add(i));
    let a = new Mesh(lysoGeo, We);
    (a.position.copy(t),
      a.scale.setScalar(r * 0.42),
      a.rotation.set(Math.random() * 6, Math.random() * 6, 0),
      cellGroup.add(a));
  }
  // ——— Vésicules de transport (RE → Golgi)
  let vesicleMat = makeCellMat(CELL_COL.vesicles, `#2a3576`, 0.16, 0.5, {
    opacity: 0.9,
  });
  for (let t = 0; t < 14; t++) {
    let t = scatterRibosomes(0.1),
      r = 0.07 + Math.random() * 0.1,
      i = new Mesh(ze, vesicleMat);
    (i.position.copy(t), i.scale.setScalar(r), tagCell(i, `vesicles`), cellGroup.add(i));
  }
  // ——— Vacuole (petite chez l’animal)
  let vacuoleMat = makeCellMat(CELL_COL.vacuole, `#20505f`, 0.14, 0.35, {
      opacity: 0.34,
    }),
    qe = cellMembraneMat(CELL_COL.vacuole, `#cdeef4`, 0.28, 2);
  [
    [1.75, -1.25, 0.9, 0.6],
    [-1.35, -1.95, -0.95, 0.42],
  ].forEach((r) => {
    let i = new IcosahedronGeometry(r[3], 3);
    nucDisplace(i, 0.05, 4, r[0] * 3);
    let a = new Mesh(i, vacuoleMat);
    (a.position.set(r[0], r[1], r[2]), tagCell(a, `vacuole`), cellGroup.add(a));
    let o = new Mesh(new IcosahedronGeometry(r[3] * 1.02, 3), qe);
    (o.position.set(r[0], r[1], r[2]),
      (o.renderOrder = 15),
      syncShaderOpacity(o),
      (o.userData.structure = `vacuole`),
      (o.userData.getInfo = () => cellInfo(`vacuole`)),
      cellGroup.add(o),
      pickables.push(o));
  });
  let Je = new Group();
  cellGroup.add(Je);
  // ——— Cytosquelette (filaments de soutien)
  let cytoskeletonMat = makeCellMat(CELL_COL.cytoskeleton, `#5a4a8e`, 0.18, 0.6, {
      opacity: 0.8,
    }),
    Xe = makeCellMat(`#d8ccf4`, `#5a4a8e`, 0.16, 0.6, {
      opacity: 0.62,
    }),
    Ze = new Vector3(-0.4, -0.5, 1.35),
    Qe = [],
    $e = [];
  for (let e = 0; e < 15; e++) {
    let e = nucRandInSphere(1).normalize();
    e.y = e.y * 0.7 - 0.35;
    let t = new Vector3(e.x * 2.8, Math.min(cellCutYLocal() - 0.3, e.y * 2.5), e.z * 2.8),
      n = Ze.clone().lerp(t, 0.5).add(nucRandInSphere(1).normalize().multiplyScalar(0.25)),
      r = new CatmullRomCurve3([Ze.clone(), n, t]);
    Qe.push(new TubeGeometry(r, 30, 0.006, 5, !1));
  }
  for (let e = 0; e < 18; e++) {
    let e = nucRandInSphere(1).normalize(),
      t = -0.5 - Math.random() * 0.7,
      n = new Vector3(e.x, t, e.z).normalize().multiplyScalar(2.7);
    ((n.y *= cellSquash), n.y > cellCutYLocal() - 0.3 && (n.y = cellCutYLocal() - 0.3));
    let r = new Vector3(-e.z, 0, e.x).normalize(),
      i = n.clone().addScaledVector(r, -0.4).add(nucRandInSphere(1).normalize().multiplyScalar(0.1)),
      a = n.clone().addScaledVector(r, 0.4).add(nucRandInSphere(1).normalize().multiplyScalar(0.1)),
      c = new CatmullRomCurve3([i, n.clone().add(nucRandInSphere(1).normalize().multiplyScalar(0.08)), a]);
    $e.push(new TubeGeometry(c, 16, 0.0034, 4, !1));
  }
  let et = new Mesh(mergeGeometries(Qe), cytoskeletonMat);
  ((et.userData.structure = `cytoskeleton`),
    (et.userData.getInfo = () => cellInfo(`cytoskeleton`)),
    Je.add(et),
    pickables.push(et));
  let tt = new Mesh(mergeGeometries($e), Xe);
  ((tt.userData.structure = `cytoskeleton`),
    (tt.userData.getInfo = () => cellInfo(`cytoskeleton`)),
    Je.add(tt),
    pickables.push(tt));
  let B = makeCellMat(CELL_COL.ribosomes, `#3a0f28`, 0.2, 0.28, {
      metalness: 0.05,
    }),
    nt = new InstancedMesh(At(), B, 260),
    rt = new Object3D();
  for (let e = 0; e < 260; e++) {
    let t = nucRandInSphere(1).normalize(),
      n = 0.9 + Math.random() * 2,
      r = new Vector3(t.x * n, Math.min(cellCutYLocal() - 0.1, (t.y * 0.6 - 0.4) * n * cellSquash), t.z * n);
    if (r.distanceTo(nucleusPos) < 1.55) {
      let e = r.clone().sub(nucleusPos).normalize().multiplyScalar(1.6);
      r.copy(nucleusPos).add(e);
    }
    (rt.position.copy(r),
      rt.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      rt.scale.setScalar(0.75 + Math.random() * 0.45),
      rt.updateMatrix(),
      nt.setMatrixAt(e, rt.matrix));
  }
  return (
    (nt.userData.structure = `ribosomes`),
    (nt.userData.getInfo = () => cellInfo(`ribosomes`)),
    cellGroup.add(nt),
    pickables.push(nt),
    Gt(),
    {
      group: cellGroup,
      pickables: pickables,
      anchors: [],
    }
  );
}
function Gt() {
  let e = cellCutYLocal(),
    chord = (R) => {
      let n = e / (R * CELL.sy);
      return Math.abs(n) >= 0.999 ? 0.04 : R * Math.sqrt(1 - n * n);
    };
  for (let rim of cellRims) {
    let n = chord(rim.ro),
      r = chord(rim.ri),
      i = (n + r) / 2,
      a = Math.max(0.08, (n - r) / 2 + 0.05);
    (rim.mesh.geometry.dispose(),
      (rim.mesh.geometry = new TorusGeometry(i, a, 14, 140)),
      (rim.mesh.position.y = e));
  }
}
// Deux cellules construites (animale + végétale) ; le niveau « cellule » bascule de l'une à l'autre.
var built = {
  cellule: buildCell(),
  chromo: buildChromosome(),
  chromatin: $e(),
  nuc: buildNucleosome(Et, 1),
  helix: buildHelixTier(currentSeq),
  atom: buildMolecularTier(currentSeq, {
    annot: !1,
    hbond: !0,
    win: 2,
  }),
};
(addTier(`cellule`, `Cellule animale`, `≈ 20 µm`, 7e4, built.cellule, null),
  addTier(`chromo`, `Chromosome métaphasique`, `≈ 1,4 µm`, 2600, built.chromo, `chromosome`),
  addTier(`chromatin`, `Fibre de chromatine`, `≈ 30 nm`, 140, built.chromatin, `fibre30`),
  addTier(`nuc`, `Nucléosome`, `≈ 11 nm`, 15, built.nuc, `nucleosome`),
  addTier(`helix`, `Double hélice d’ADN`, `≈ 2 nm`, 5, built.helix, `helix`),
  addTier(`atom`, `Échelle atomique`, `≈ 0,3 nm`, 1.6, built.atom, null));
var chromatinTier = TIERS.find((e) => e.name === `chromatin`);
((chromatinTier.setFold = built.chromatin.setFold), (chromatinTier.getFold = built.chromatin.getFold));
var chromoTierEnv = TIERS.find((e) => e.name === `chromo`),
  Yt = TIERS.find((e) => e.name === `nuc`),
  celluleTier = TIERS.find((e) => e.name === `cellule`);
(celluleTier && (celluleTier.baseScale *= 0.72),
  [`atom`, `chromo`].forEach((e) => {
    let t = TIERS.find((t) => t.name === e);
    t.fixedScale = t.baseScale;
  }));
var fieldTop = TIERS[0].V,
  fieldBottom = TIERS[TIERS.length - 1].V,
  Pmax = Math.log10(fieldTop / fieldBottom),
  en = 6,
  depth = 0,
  depthTarget = 0;
function setGroupAlpha(e, t) {
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
function envShellPoint(e, t) {
  let n = nucRandInSphere(1).normalize(),
    r = e + Math.random() * (t - e);
  return n.multiplyScalar(r);
}
function buildCytoplasmEnv() {
  let e = new Group(),
    t = new IcosahedronGeometry(0.26, 3);
  for (let r = 0; r < 14; r++) {
    let r = new MeshStandardMaterial({
      color: `#c680a8`,
      emissive: `#3a1830`,
      emissiveIntensity: 0.25,
      roughness: 0.85,
      metalness: 0,
      transparent: !0,
      opacity: 0.62,
    });
    r.userData.baseOpacity = 0.62;
    let i = new Mesh(t, r);
    (i.position.copy(envShellPoint(11, 20)), i.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6));
    let a = 0.7 + Math.random() * 0.9;
    (i.scale.set(a * 0.72, a * 0.72, a * 1.7), e.add(i));
  }
  let r = new IcosahedronGeometry(1, 2);
  for (let t = 0; t < 22; t++) {
    let t = new MeshStandardMaterial({
      color: `#8f7fd0`,
      emissive: `#241748`,
      emissiveIntensity: 0.2,
      roughness: 0.6,
      metalness: 0.05,
      transparent: !0,
      opacity: 0.5,
    });
    t.userData.baseOpacity = 0.5;
    let i = new Mesh(r, t);
    (i.position.copy(envShellPoint(10, 22)), i.scale.setScalar(0.16 + Math.random() * 0.32), e.add(i));
  }
  let i = new TorusGeometry(0.5, 0.06, 8, 22);
  for (let t = 0; t < 9; t++) {
    let t = new MeshStandardMaterial({
      color: `#d98fb4`,
      emissive: `#3a1c2e`,
      emissiveIntensity: 0.2,
      roughness: 0.7,
      transparent: !0,
      opacity: 0.42,
    });
    t.userData.baseOpacity = 0.42;
    let r = new Mesh(i, t);
    (r.position.copy(envShellPoint(11, 20)),
      r.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      r.scale.setScalar(0.6 + Math.random() * 1.1),
      e.add(r));
  }
  let a = 1700,
    o = new Float32Array(a * 3);
  for (let e = 0; e < a; e++) {
    let t = envShellPoint(8, 32);
    ((o[e * 3] = t.x), (o[e * 3 + 1] = t.y), (o[e * 3 + 2] = t.z));
  }
  let s = new BufferGeometry();
  s.setAttribute(`position`, new BufferAttribute(o, 3));
  let c = new PointsMaterial({
    color: `#b79ae0`,
    size: 0.05,
    transparent: !0,
    opacity: 0.5,
    depthWrite: !1,
    sizeAttenuation: !0,
  });
  return ((c.userData.baseOpacity = 0.5), e.add(new Points(s, c)), e);
}
var cloudTex = null;
function softCloudTexture() {
  if (cloudTex) return cloudTex;
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
    (cloudTex = new CanvasTexture(e)),
    cloudTex
  );
}
function buildNucleoplasmEnv() {
  let e = new Group(),
    t = (e, t) => {
      ((e.renderOrder = t),
        (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
          e && ((e.depthTest = !1), (e.depthWrite = !1), (e.transparent = !0));
        }));
    },
    r = softCloudTexture(),
    i = [`#3b2a6e`, `#4a2f7a`, `#39397e`, `#52306f`, `#2f2a66`];
  for (let t = 0; t < 10; t++) {
    let n = new SpriteMaterial({
      map: r,
      color: new Color(i[t % i.length]),
      transparent: !0,
      opacity: 0.2,
      depthWrite: !1,
      depthTest: !1,
    });
    n.userData.baseOpacity = 0.2;
    let a = new Sprite(n);
    a.position.copy(envShellPoint(14, 32));
    let o = 9 + Math.random() * 15;
    (a.scale.set(o, o, 1), (a.renderOrder = -8), e.add(a));
  }
  let a = new CylinderGeometry(0.5, 0.5, 0.5, 10, 1),
    o = new MeshStandardMaterial({
      color: `#7d7cb2`,
      emissive: `#2a1c52`,
      emissiveIntensity: 0.3,
      roughness: 0.8,
      metalness: 0.02,
      transparent: !0,
      opacity: 0.64,
    });
  o.userData.baseOpacity = 0.64;
  let c = new MeshStandardMaterial({
    color: `#55558a`,
    emissive: `#1c1338`,
    emissiveIntensity: 0.28,
    roughness: 0.85,
    transparent: !0,
    opacity: 0.52,
  });
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
    let r = coiledFiber(
      n.map((e) => new Vector3(e[0], e[1], e[2])),
      {
        coilR: 0.92,
        perTurn: 6,
        density: 1.35,
        minN: 30,
        maxN: 150,
        discScale: 1.75,
        coreGeo: a,
        coreMat: o,
        tubeMat: c,
        tubeR: 0.18,
      },
    );
    (r.group.traverse((e) => {
      (e.isMesh || e.isInstancedMesh) && t(e, -7);
    }),
      e.add(r.group));
  }
  let l = new IcosahedronGeometry(1, 2),
    u = [`#7aa2ff`, `#9d7bff`, `#8fb0ff`, `#a7c0ff`];
  for (let r = 0; r < 8; r++) {
    let i = new MeshStandardMaterial({
      color: u[r % u.length],
      emissive: `#241748`,
      emissiveIntensity: 0.18,
      roughness: 0.7,
      metalness: 0.03,
      transparent: !0,
      opacity: 0.26,
    });
    i.userData.baseOpacity = 0.26;
    let a = new Mesh(l, i);
    (a.position.copy(envShellPoint(12, 22)), a.scale.setScalar(0.5 + Math.random() * 1.1), t(a, -6), e.add(a));
  }
  let d = 1200,
    p = new Float32Array(d * 3);
  for (let e = 0; e < d; e++) {
    let t = envShellPoint(7, 26);
    ((p[e * 3] = t.x), (p[e * 3 + 1] = t.y), (p[e * 3 + 2] = t.z));
  }
  let m = new BufferGeometry();
  m.setAttribute(`position`, new BufferAttribute(p, 3));
  let h = new PointsMaterial({
    color: `#a9bcff`,
    size: 0.045,
    transparent: !0,
    opacity: 0.45,
    depthWrite: !1,
    sizeAttenuation: !0,
  });
  return ((h.userData.baseOpacity = 0.45), e.add(new Points(m, h)), e);
}
var envCytoplasm = buildCytoplasmEnv();
(scene.add(envCytoplasm), setGroupAlpha(envCytoplasm, 0), (envCytoplasm.visible = !1));
var envNucleoplasm = buildNucleoplasmEnv();
(scene.add(envNucleoplasm), setGroupAlpha(envNucleoplasm, 0), (envNucleoplasm.visible = !1));
var fn = document.getElementById(`ladder`),
  ladderTrack = fn.querySelector(`.ltrack`),
  mn = fn.querySelector(`.rail`);
TIERS.forEach((e, t) => {
  let n = document.createElement(`div`);
  ((n.className = `step`),
    (n.dataset.i = t),
    (n.innerHTML = `<span class="pip"></span><span class="num">${String(t + 1).padStart(2, `0`)}</span><span class="lab"><b>${e.shortLabel}</b><span>${e.scaleLabel}</span></span>`),
    n.addEventListener(`click`, () => {
      (noteInteract(), (depthTarget = clamp(Math.log10(fieldTop / e.V), 0, Pmax)));
    }),
    ladderTrack.appendChild(n));
});
var ladderSteps = [...ladderTrack.querySelectorAll(`.step`)],
  LROW = 109,
  _n = -1,
  vn = 0;
function centerLadder(e) {
  // strate active ancrée à 30 % de la fenêtre (au lieu de 50 %) → elle remonte près du kicker
  // « PROFONDEUR D'EXPLORATION » et les strates suivantes défilent en dessous.
  ((vn = e), e !== _n && ((_n = e), (ladderTrack.style.top = `calc(30% - ${e * LROW + LROW / 2}px)`)));
}
function bn() {
  ((LROW = ladderSteps[0] ? ladderSteps[0].offsetHeight : 109),
    (mn.style.top = LROW / 2 + `px`),
    (mn.style.height = (ladderSteps.length - 1) * LROW + `px`),
    (_n = -1),
    centerLadder(vn));
}
bn();
var SCALE_COMPS = {
    cellule: {
      items: [
        [`Membrane plasmique`, `bicouche de phospholipides sélective`, CELL_COL.membrane, `membrane`],
        [`Cytoplasme`, `cytosol + organites`, CELL_COL.cytoplasm, `cytoplasm`],
        [`Noyau · enveloppe`, `deux membranes percées de pores`, CELL_COL.noyau, `nuc_env`],
        [`Pores nucléaires`, `« trous » dans l’enveloppe`, `#3f57ab`, `nuc_pores`],
        [`Nucléole`, `synthétise l’ARNr, sans membrane`, CELL_COL.nucleole, `nuc_nucleolus`],
        [`Chromatine`, `ADN enroulé autour d’histones`, `#8fb0ff`, `nuc_chromatin`],
        [`Réticulum rugueux (REG)`, `RE couvert de ribosomes : protéines`, CELL_COL.erRough, `erRough`],
        [`Réticulum lisse (REL)`, `lipides, calcium, désintoxication`, CELL_COL.erSmooth, `erSmooth`],
        [`Appareil de Golgi`, `modifie, entrepose et expédie`, CELL_COL.golgi, `golgi`],
        [`Mitochondries`, `produit l’ATP par respiration`, CELL_COL.mitochondria, `mitochondria`],
        [`Centrioles`, `forme les microtubules (cell. animale)`, CELL_COL.centrioles, `centrioles`],
        [`Lysosomes`, `enzymes digestives en milieu acide`, CELL_COL.lysosomes, `lysosomes`],
        [`Peroxysomes`, `détoxication ; H₂O₂ neutralisé`, CELL_COL.peroxisomes, `peroxisomes`],
        [`Vésicules`, `transportent les molécules RE → Golgi`, CELL_COL.vesicles, `vesicles`],
        [`Vacuole`, `stockage ; centrale chez les Végétaux`, CELL_COL.vacuole, `vacuole`],
        [`Cytosquelette`, `soutien, forme, ancrage des organites`, CELL_COL.cytoskeleton, `cytoskeleton`],
        [`Ribosomes libres`, `synthétisent les protéines`, CELL_COL.ribosomes, `ribosomes`],
      ],
      groups: [
        { name: `Membrane et cytoplasme`, color: CELL_COL.membrane, idx: [0, 1] },
        { name: `Noyau et ribosomes`, color: CELL_COL.noyau, idx: [2, 3, 4, 5, 16] },
        { name: `Système endomembranaire`, color: CELL_COL.golgi, idx: [6, 7, 8, 13, 11, 14] },
        { name: `Énergie et détoxification`, color: CELL_COL.mitochondria, idx: [9, 12] },
        { name: `Cytosquelette`, color: CELL_COL.cytoskeleton, idx: [15, 10] },
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
  scalePanelEl = document.getElementById(`scalePanel`),
  Cn = scalePanelEl.querySelector(`.sptitle`),
  wn = scalePanelEl.querySelector(`.spbody`),
  Tn = null,
  En = 0,
  spOpenGroup = -1;
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
var _spBox = new Box3(),
  _spCtr = new Vector3(),
  An = new Matrix4();
function jn(e, t, n) {
  let r = TIERS.find((t) => t.name === e);
  if (!r) return;
  let i = Dn(r, t, n);
  if (!i || !i.userData.getInfo) return;
  let a = null;
  try {
    a = i.userData.getInfo(0);
  } catch {}
  if (!a) return;
  if (i.isInstancedMesh && i.count > 0)
    (i.getMatrixAt(0, An), _spCtr.setFromMatrixPosition(An), i.localToWorld(_spCtr));
  else {
    if ((_spBox.setFromObject(i), _spBox.isEmpty())) return;
    _spBox.getCenter(_spCtr);
  }
  let o = r.name + `|` + (i.userData.structure || a.title) + `|`;
  if (pins.has(o)) {
    removePin(o);
    return;
  }
  addPin({
    info: a,
    tier: r,
    ti: TIERS.indexOf(r),
    localPos: r.group.worldToLocal(_spCtr.clone()),
    key: o,
  });
}
// fiche ancrée pour un composant SANS objet 3D dédié (parties d'un même modèle : ADN, paires de bases, histones…)
// → on l'ancre sur le modèle du tier, décalée par index pour ne pas empiler les fiches.
function pinScaleItem(tier, item, idx) {
  if (!tier) return;
  let key = tier.name + `|comp` + idx + `|`;
  if (pins.has(key)) {
    removePin(key);
    return;
  }
  (_spBox.setFromObject(tier.group), _spBox.isEmpty() ? _spCtr.set(0, 0, 0) : _spBox.getCenter(_spCtr));
  let sz = _spBox.getSize(new Vector3()),
    N = (SCALE_COMPS[tier.name] && SCALE_COMPS[tier.name].items.length) || 1,
    k = idx - (N - 1) / 2;
  ((_spCtr.y += k * (sz.y || 1) * 0.16), (_spCtr.x += 0.14 * (sz.x || 1)));
  addPin({
    info: { title: item[0], note: item[1], chipBg: item[2], rows: [] },
    tier,
    ti: TIERS.indexOf(tier),
    localPos: tier.group.worldToLocal(_spCtr.clone()),
    key,
  });
}
function spItemHTML(it, idx) {
  return `<button class="spitem" type="button" data-i="${idx}"><span class="spdot" style="background:${it[2]};color:${it[2]}"></span><div class="spitx"><div class="spn">${it[0]}</div><div class="spd">${it[1]}</div></div><span class="spchev" aria-hidden="true">▸</span></button>`;
}
function wireSpItems(t, n, e) {
  wn.querySelectorAll(`.spitem`).forEach((r) => {
    let i = n.items[+r.dataset.i],
      obj = Dn(t, i[3], i[0]); // objet 3D dédié (organites de la cellule) ?
    r.addEventListener(
      `click`,
      obj
        ? () => jn(e, i[3], i[0]) // oui → fiche ancrée sur l'objet
        : () => pinScaleItem(t, i, +r.dataset.i), // non (partie d'un modèle) → fiche ancrée sur le modèle du tier
    );
  });
}
function renderGroupedBody(t, n, e) {
  wn.innerHTML = n.groups
    .map((g, gi) => {
      let open = gi === spOpenGroup,
        body = g.idx.map((idx) => spItemHTML(n.items[idx], idx)).join(``);
      return `<div class="spgroup${open ? ` open` : ``}"><button class="spghdr" type="button" data-g="${gi}" aria-expanded="${open}"><span class="spgdot" style="background:${g.color};color:${g.color}"></span><span class="spgn">${g.name}</span><span class="spgcount">${g.idx.length}</span><span class="spgchev" aria-hidden="true">▶</span></button><div class="spgbody">${body}</div></div>`;
    })
    .join(``);
  wn.querySelectorAll(`.spghdr`).forEach((b) =>
    b.addEventListener(`click`, () => {
      let gi = +b.dataset.g;
      ((spOpenGroup = spOpenGroup === gi ? -1 : gi), renderGroupedBody(t, n, e));
    }),
  );
  wireSpItems(t, n, e);
}
function renderScalePanel(e) {
  let t = TIERS.find((t) => t.name === e),
    n = SCALE_COMPS[e];
  return !t || !n
    ? !1
    : ((Tn = e),
      (Cn.textContent = t.shortLabel),
      n.groups
        ? renderGroupedBody(t, n, e)
        : ((wn.innerHTML = n.items.map((it, idx) => spItemHTML(it, idx)).join(``)), wireSpItems(t, n, e)),
      !0);
}
function Nn(e) {
  e !== Tn && renderScalePanel(e);
}
function openScalePanel(e) {
  renderScalePanel(e) && document.body.classList.add(`scale-open`);
}
function closeScalePanel() {
  document.body.classList.remove(`scale-open`);
}
function toggleScalePanel() {
  document.body.classList.contains(`scale-open`) ? closeScalePanel() : openScalePanel(TIERS[En].name);
}
scalePanelEl.querySelector(`.spclose`).addEventListener(`click`, (e) => {
  (e.stopPropagation(), closeScalePanel());
});
var Ln = document.getElementById(`title`);
(Ln.addEventListener(`click`, toggleScalePanel),
  Ln.addEventListener(`keydown`, (e) => {
    (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), toggleScalePanel());
  }));

/* ============================================================================
   TIROIR DES ORGANITES (maquette « Cellule »)
   Menu ouvrable en bas au centre, visible au seul niveau « cellule ». Il rejoue
   exactement les actions du panneau « composants de l'échelle » : une famille à
   la fois, clic sur une carte = fiche épinglée sur l'organite en 3D.
   ========================================================================== */
var orgDrawerEl = document.getElementById(`orgDrawer`),
  orgFamsEl = document.getElementById(`odFams`),
  orgGridEl = document.getElementById(`odGrid`),
  orgToggleEl = document.getElementById(`odToggle`),
  orgFam = 0;
function orgCellTier() {
  let t = TIERS.find((t) => t.name === `cellule`);
  return t && t.pickables ? t : null;
}
function orgItemPinKey(item) {
  let tier = orgCellTier();
  if (!tier) return null;
  let obj = Dn(tier, item[3], item[0]);
  return obj ? `cellule|` + (obj.userData.structure || item[0]) + `|` : null;
}
function renderOrgGrid() {
  let comps = SCALE_COMPS.cellule,
    tier = orgCellTier(),
    fam = comps.groups[orgFam],
    pinned = typeof pins < `u` && pins ? pins : null;
  if (!orgGridEl || !fam) return;
  ((orgGridEl.innerHTML = ``),
    fam.idx.forEach((idx, k) => {
      let item = comps.items[idx],
        key = tier ? orgItemPinKey(item) : null,
        b = document.createElement(`button`);
      ((b.type = `button`),
        (b.className = `odCard`),
        b.style.setProperty(`--i`, String(k)), // rang dans la cascade d'ouverture
        b.setAttribute(`aria-pressed`, key && pinned && pinned.has(key) ? `true` : `false`),
        (b.innerHTML = `<span class="odName"><span class="odDot" style="background:${item[2]}"></span><span></span></span><span class="odRes"></span>`),
        (b.querySelector(`.odName span:last-child`).textContent = item[0]),
        (b.querySelector(`.odRes`).textContent = item[1]),
        b.addEventListener(`click`, () => {
          let t = orgCellTier();
          if (!t) return;
          (Dn(t, item[3], item[0]) ? jn(`cellule`, item[3], item[0]) : pinScaleItem(t, item, idx), renderOrgGrid());
        }),
        orgGridEl.appendChild(b));
    }));
}
/* noms courts : la rangée de familles doit tenir sur une seule ligne dans le tiroir */
var ORG_FAM_SHORT = {
  "Membrane et cytoplasme": `Membrane · cytoplasme`,
  "Noyau et ribosomes": `Noyau · ribosomes`,
  "Système endomembranaire": `Endomembranes`,
  "Énergie et détoxification": `Énergie · détox`,
  Cytosquelette: `Cytosquelette`,
};
function renderOrgFams() {
  let comps = SCALE_COMPS.cellule;
  if (!orgFamsEl) return;
  ((orgFamsEl.innerHTML = ``),
    comps.groups.forEach((g, gi) => {
      let b = document.createElement(`button`);
      ((b.type = `button`),
        (b.className = `odFam`),
        (b.title = g.name),
        b.style.setProperty(`--i`, String(gi)), // rang dans la cascade d'ouverture
        b.setAttribute(`aria-pressed`, gi === orgFam ? `true` : `false`),
        (b.innerHTML = `<span class="odDot" style="background:${g.color}"></span><span></span>`),
        (b.querySelector(`span:last-child`).textContent = ORG_FAM_SHORT[g.name] || g.name),
        b.addEventListener(`click`, () => {
          ((orgFam = gi), renderOrgFams(), renderOrgGrid());
        }),
        orgFamsEl.appendChild(b));
    }));
}
if (orgDrawerEl) {
  (renderOrgFams(),
    renderOrgGrid(),
    // fermé au départ, avec l'invite qui respire tant qu'on ne l'a jamais ouvert
    orgDrawerEl.classList.add(`closed`, `pristine`),
    orgToggleEl &&
      orgToggleEl.addEventListener(`click`, () => {
        let closed = orgDrawerEl.classList.toggle(`closed`);
        (orgDrawerEl.classList.remove(`pristine`),
          orgToggleEl.setAttribute(`aria-expanded`, closed ? `false` : `true`),
          orgToggleEl.setAttribute(`aria-label`, closed ? `Ouvrir le panneau des organites` : `Fermer le panneau des organites`));
      }));
}
/* un seul réglage ouvert à la fois : les corps sont décrochés sous la rangée et
   se recouvriraient sinon. */
[...document.querySelectorAll(`#panel .pcard .pcardh`)].forEach((h) => {
  h.addEventListener(`click`, () => {
    let mine = h.closest(`.pcard`);
    pcards.forEach((c) => {
      c !== mine && c.classList.contains(`open`) && setCard(c, !1, !0);
    });
  });
});
var Rn = document.getElementById(`labels`),
  zn = [];
function rebuildLabelDom() {
  ((Rn.innerHTML = ``),
    (zn = []),
    TIERS.forEach((e, t) => {
      e.anchors.forEach((e) => {
        let n = document.createElement(`div`);
        ((n.className = `flabel ` + (e.cls || ``)),
          (n.innerHTML = `<span class="dot"></span>${e.text}`),
          Rn.appendChild(n),
          zn.push({
            ti: t,
            el: n,
            pos: new Vector3(e.p[0], e.p[1], e.p[2]),
          }));
      });
    }));
}
rebuildLabelDom();
var Vn = document.getElementById(`scaleval`),
  Hn = document.getElementById(`scalebar`);
function Un(e) {
  return e >= 1e3
    ? (e / 1e3).toPrecision(3).replace(/\.?0+$/, ``) + ` µm`
    : e >= 1
      ? (e >= 10 ? Math.round(e) : e.toPrecision(2)) + ` nm`
      : (e * 10).toPrecision(2) + ` Å`;
}
function updateScaleUI(e) {
  let t = spreadFine > 0 || spread > 0 ? ` · <small>écarté</small>` : ``;
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
  legendEl = document.getElementById(`legend`);
function legendFor(e) {
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
function renderLegend(e) {
  let t = legendFor(e);
  if (!t) {
    legendEl.style.opacity = 0;
    return;
  }
  ((legendEl.innerHTML = t
    .map((e) =>
      e[0] === `tx`
        ? `<span class="it" style="color:rgba(255,255,255,.45)">${e[1]}</span>`
        : `<span class="it"><span class="sw" style="background:${e[1]}"></span>${e[2]}</span>`,
    )
    .join(``)),
    (legendEl.style.opacity = 0.96));
}
var tip = document.getElementById(`tip`),
  tipChip = document.getElementById(`tipChip`),
  Qn = document.getElementById(`tipName`),
  $n = document.getElementById(`tipSub`),
  er = document.getElementById(`detail`);
(document.getElementById(`dChip`),
  document.getElementById(`dName`),
  document.getElementById(`dMeta`),
  document.getElementById(`dRows`),
  document.getElementById(`dExtra`));
var raycaster = new Raycaster(),
  pointer = new Vector2();
function setPointer(e) {
  let t = renderer.domElement.getBoundingClientRect();
  return (pointer.set(((e.clientX - t.left) / t.width) * 2 - 1, -((e.clientY - t.top) / t.height) * 2 + 1), t);
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
  for (let t of TIERS) if (t.alpha > 0.2) for (let n of t.pickables) e.push(n);
  if (!e.length) return null;
  raycaster.setFromCamera(pointer, camera);
  let t = raycaster.intersectObjects(e, !1);
  for (let e of t) {
    if (!ir(e)) continue;
    let t = e.object;
    if (t.userData.getInfo) return t.userData.getInfo(e.instanceId);
  }
  return null;
}
function hideTip() {
  ((tip.style.opacity = `0`), (tip.style.display = `none`));
}
function showTip(e, t, n) {
  ((tipChip.textContent = e.chip),
    (tipChip.style.background = e.chipBg),
    (tipChip.style.color = e.chipColor || `#06090d`),
    (Qn.textContent = e.title),
    ($n.innerHTML = (e.tip || []).filter(Boolean).join(`<br>`)),
    (tip.style.display = `block`));
  let r = lt.getBoundingClientRect(),
    i = t + 16,
    a = n + 14;
  (i + 255 > r.width && (i = t - 255),
    a + 90 > r.height && (a = n - 90),
    (tip.style.left = i + `px`),
    (tip.style.top = a + `px`),
    requestAnimationFrame(() => {
      tip.style.opacity = `1`;
    }));
}
document.getElementById(`detailClose`).addEventListener(`click`, () => {
  er.style.display = `none`;
});
var leadersEl = document.getElementById(`leaders`),
  lr = document.getElementById(`pins`);
(leadersEl.setAttribute(`width`, innerWidth), leadersEl.setAttribute(`height`, innerHeight));
var ur = `http://www.w3.org/2000/svg`,
  pins = new Map();
function fr() {
  let e = new Map(),
    t = [];
  for (let n of TIERS) if (n.alpha > 0.2) for (let r of n.pickables) (t.push(r), e.set(r, n));
  if (!t.length) return null;
  raycaster.setFromCamera(pointer, camera);
  let n = raycaster.intersectObjects(t, !1);
  for (let t of n) {
    if (!ir(t)) continue;
    let n = t.object;
    if (!n.userData.getInfo) continue;
    let r = e.get(n);
    if (!r) continue;
    let i = n.userData.getInfo(t.instanceId);
    return {
      info: i,
      tier: r,
      ti: TIERS.indexOf(r),
      obj: n, // objet 3D cliqué → on l'illumine tant que sa fiche est ouverte
      localPos: r.group.worldToLocal(t.point.clone()),
      key: r.name + `|` + (n.userData.structure || i.title) + `|` + (t.instanceId ?? ``),
    };
  }
  return null;
}
function pinBodyHTML(e) {
  let t = (e.rows || [])
      .map(([e, t]) => `<div class="prow"><span class="k">${e}</span><span class="v">${t}</span></div>`)
      .join(``),
    n = e.note ? `<div class="pnote">${e.note}</div>` : ``;
  return (
    `<div class="ph"><span class="pchip" style="background:${e.chipBg};color:${e.chipBg}"></span><span class="pname">${e.title}</span><span class="pclose" data-noplace title="Fermer">✕</span></div>` +
    (e.meta ? `<div class="pmeta">${e.meta}</div>` : ``) +
    t +
    n
  );
}
function mr(e) {
  if (pins.has(e.key)) return removePin(e.key); // reclic sur la même fiche → on la ferme
  removeAllPins(); // une seule fiche ouverte à la fois : on ferme l'éventuelle autre avant d'ouvrir
  addPin(e);
}
// contour lumineux de l'organite choisi : léger liseré bleu AUTOUR (coque inversée), sans colorer l'objet lui-même
var GLOW_HEX = 0x8fd4ff;
function setGlow(obj, on) {
  if (!obj) return;
  if (on) {
    if (obj.userData._outline) return;
    if (obj.isInstancedMesh || !obj.geometry) return; // pas d'outline sur les maillages instanciés
    if (obj.userData.structure === `membrane`) return; // pas de halo autour de toute la cellule
    let src = Array.isArray(obj.material) ? obj.material[0] : obj.material,
      mat = new MeshStandardMaterial({
        color: 0x000000, // corps noir : seul l'emissive bleu se voit → un liseré, pas un objet coloré
        emissive: GLOW_HEX,
        emissiveIntensity: 0.9,
        transparent: !0,
        opacity: 0.6,
        side: 1, // BackSide → la coque n'est peinte que là où elle déborde de l'objet = le contour
        depthWrite: !1,
      });
    src && src.clippingPlanes && (mat.clippingPlanes = src.clippingPlanes); // suit la coupe cellule/noyau
    let hull = new Mesh(obj.geometry, mat);
    (hull.scale.setScalar(1.05),
      (hull.renderOrder = (obj.renderOrder || 0) - 1),
      obj.add(hull),
      (obj.userData._outline = hull));
  } else if (obj.userData._outline) {
    let h = obj.userData._outline;
    (h.parent && h.parent.remove(h), h.material.dispose(), (obj.userData._outline = null));
  }
}
// ---- réglage de coupure contextuel, attaché à la fiche info (membrane → coupe cellule ; noyau → coupe noyau) ----
var cutOpenN = 0;
function setCutOpen(open) {
  ((cutOpenN = Math.max(0, cutOpenN + (open ? 1 : -1))), cutOpenN > 0 ? (controls.autoRotate = !1) : applyRotation());
}
function attachCutControl(card, key) {
  let struct = (key || ``).split(`|`)[1] || ``,
    kind = struct === `membrane` ? `cell` : struct === `nuc_env` ? `nuc` : null;
  if (!kind) return;
  let isCell = kind === `cell`,
    CUT_MAX = 1.5, // profondeur de coupe max ; la barre affiche l'inverse : la « fermeture »
    title = isCell ? `Fermeture de la cellule` : `Fermeture du noyau`,
    getCut = () => (isCell ? It : cutDepthNuc), // coupe courante (0 = fermé, 1.5 = grand ouvert)
    closure = () => CUT_MAX - getCut(), // valeur affichée par la barre : plus c'est haut, plus c'est fermé
    pct = (c) => Math.round((c / CUT_MAX) * 100),
    wrap = document.createElement(`div`);
  ((card.className += ` has-cut`),
    (wrap.className = `pcut`),
    (wrap.innerHTML =
      `<span class="pcut-cap">Fermeture<br>${isCell ? `cellule` : `noyau`}</span>` +
      `<span class="pcut-val">${pct(closure())}%</span>` +
      `<div class="dslider vert pcut-slider" data-noplace></div>` +
      `<span class="pcut-ico" aria-hidden="true">◓</span>`),
    card.appendChild(wrap));
  let valEl = wrap.querySelector(`.pcut-val`);
  makeSlider(wrap.querySelector(`.pcut-slider`), {
    min: 0,
    max: CUT_MAX,
    value: closure(), // en haut de la barre = fermé, en bas = ouvert
    vertical: !0,
    label: title,
    onStart: () => setCutOpen(!0),
    onEnd: () => setCutOpen(!1),
    onInput: (v) => {
      let cut = CUT_MAX - v; // plus la barre monte (v ↑), plus la coupe diminue → ça se referme
      ((valEl.textContent = pct(v) + `%`),
        isCell
          ? ((It = cut), Wr && (Wr.textContent = cut.toFixed(2)), Gt())
          : ((cutDepthNuc = cut), Kr && (Kr.textContent = cut.toFixed(2))));
    },
  });
  wrap.addEventListener(`pointerdown`, (e) => e.stopPropagation());
}
function addPin(e) {
  let t = document.createElement(`div`);
  ((t.className = `pincard`),
    (t.innerHTML = pinBodyHTML(e.info)),
    t.querySelector(`.pclose`).addEventListener(`pointerdown`, (t) => {
      (t.stopPropagation(), removePin(e.key));
    }),
    t.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
    attachCutControl(t, e.key),
    lr.appendChild(t));
  let n = document.createElementNS(ur, `line`);
  (n.setAttribute(`class`, `pinline`), leadersEl.appendChild(n));
  let r = document.createElementNS(ur, `circle`);
  (r.setAttribute(`class`, `pindot`),
    r.setAttribute(`r`, `3.4`),
    leadersEl.appendChild(r),
    setGlow(e.obj, !0), // illumine l'organite choisi
    pins.set(e.key, {
      el: t,
      line: n,
      dot: r,
      ti: e.ti,
      pos: e.localPos,
      obj: e.obj,
    }));
}
function removePin(e) {
  let t = pins.get(e);
  t &&
    (setGlow(t.obj, !1), // éteint l'illumination de l'organite
    t.el.remove(),
    t.line.remove(),
    t.dot.remove(),
    pins.delete(e));
}
// ferme toutes les fiches ouvertes (clic dans le vide, ou changement d'échelle)
function removeAllPins() {
  if (!pins.size) return;
  for (let k of [...pins.keys()]) removePin(k);
  ((cutOpenN = 0), applyRotation()); // au cas où une fiche « coupe » était ouverte → restaure l'auto-rotation
}
var _r = !1,
  hintEl = document.getElementById(`hint`);
function noteInteract() {
  _r || ((_r = !0), hintEl.classList.add(`gone`));
}
// bouton « retour à la cellule » : remonte tout en haut de la plongée en un clic (au lieu de re-cliquer chaque strate).
// Affiché seulement dès qu'on a plongé (depth > 0.15) ; occupe le coin où était le hint (déjà masqué à ce moment-là).
var returnTopBtn = document.createElement(`button`);
((returnTopBtn.id = `returnTop`),
  (returnTopBtn.type = `button`),
  returnTopBtn.setAttribute(`aria-label`, `Remonter à la cellule`),
  (returnTopBtn.innerHTML = `<span class="rtico" aria-hidden="true">⤒</span><span class="rttx">Cellule</span>`),
  (document.getElementById(`stage`) || document.body).appendChild(returnTopBtn),
  returnTopBtn.addEventListener(`click`, () => {
    (noteInteract(), (depthTarget = 0), hideTip());
  }));
var anyAtlasOpen = () => document.body.classList.contains(`atlas-open`),
  overUI = (e) => !!(e && e.closest && e.closest(`#panel,#detail`));
addEventListener(
  `wheel`,
  (e) => {
    anyAtlasOpen() ||
      overUI(e.target) ||
      (e.preventDefault(), noteInteract(), (depthTarget = clamp(depthTarget - e.deltaY * 0.0016, 0, Pmax)), hideTip());
  },
  {
    passive: !1,
  },
);
var Sr = null;
(addEventListener(
  `touchmove`,
  (e) => {
    if (!anyAtlasOpen() && e.touches.length === 2) {
      if (overUI(e.target)) return;
      (e.preventDefault(), noteInteract());
      let t = e.touches[0].clientX - e.touches[1].clientX,
        n = e.touches[0].clientY - e.touches[1].clientY,
        r = Math.hypot(t, n);
      (Sr != null && (depthTarget = clamp(depthTarget + (r - Sr) * 0.006, 0, Pmax)), (Sr = r));
    }
  },
  {
    passive: !1,
  },
),
  addEventListener(`touchend`, () => {
    Sr = null;
  }),
  addEventListener(`keydown`, (e) => {
    if (anyAtlasOpen()) return;
    let t = e.target;
    (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || overUI(t))) ||
      ((e.key === `ArrowDown` || e.key === `PageDown`) &&
        (noteInteract(), (depthTarget = clamp(depthTarget + 0.18, 0, Pmax))),
      (e.key === `ArrowUp` || e.key === `PageUp`) &&
        (noteInteract(), (depthTarget = clamp(depthTarget - 0.18, 0, Pmax))));
  }));
var Cr = 5,
  down = null,
  Tr = !1,
  Er = 0,
  lastHoverEv = null;
function endPress() {
  ((down = null), (Tr = !1), mount.classList.remove(`grabbing`));
}
(renderer.domElement.addEventListener(`pointerdown`, (e) => {
  ((down = {
    x: e.clientX,
    y: e.clientY,
    t: performance.now(),
  }),
    (Tr = !1),
    mount.classList.add(`grabbing`),
    hideTip());
}),
  addEventListener(`pointermove`, (e) => {
    if (down) {
      Math.hypot(e.clientX - down.x, e.clientY - down.y) > Cr && ((Tr = !0), hideTip());
      return;
    }
    lastHoverEv = e;
    let t = performance.now();
    if (t - Er < 40) return;
    Er = t;
    let n = setPointer(e),
      r = ar();
    if (!r) {
      hideTip();
      return;
    }
    showTip(r, e.clientX - n.left, e.clientY - n.top);
  }),
  addEventListener(`pointerup`, (e) => {
    if (!down) {
      endPress();
      return;
    }
    let t = Math.hypot(e.clientX - down.x, e.clientY - down.y),
      n = performance.now() - down.t,
      r = !Tr && t < Cr && n < 400;
    if ((endPress(), r)) {
      setPointer(e);
      let t = fr();
      if (t) mr(t);
      else removeAllPins(); // clic dans le vide (pas sur un organite, pas sur la ✕) → ferme les fiches ouvertes
    }
  }),
  addEventListener(`pointercancel`, endPress),
  addEventListener(`blur`, () => {
    (endPress(), hideTip());
  }));
// clic n'importe où AILLEURS que dans une fiche → on ferme les fiches ouvertes.
// (Le canvas est exclu : il garde son propre comportement — clic sur un organite = ouvrir/fermer sa fiche,
//  clic dans le vide de la scène = fermer, géré dans le pointerup ci-dessus.)
addEventListener(`pointerdown`, (e) => {
  if (!pins.size) return;
  let t = e.target;
  if (t === renderer.domElement) return; // clic sur la scène 3D : laissé au pointerup
  if (t && t.closest && t.closest(`.pincard`)) return; // clic DANS une fiche : ne pas fermer
  removeAllPins();
});
function makeSlider(e, t) {
  if (!e) return null;
  let n = t.min ?? 0,
    r = t.max ?? 100,
    vert = !!t.vertical;
  e.classList.toggle(`vert`, vert);
  e.innerHTML = `<div class="dtrack"><div class="dfill"></div></div><div class="dthumb"><i></i></div>`;
  let i = e.querySelector(`.dfill`),
    a = e.querySelector(`.dthumb`),
    o = clamp(t.value ?? 0, n, r),
    s = () => {
      let f = (o - n) / (r - n);
      (vert
        ? ((i.style.height = f * 100 + `%`), (a.style.bottom = f * 100 + `%`))
        : ((i.style.width = f * 100 + `%`), (a.style.left = f * 100 + `%`)),
        e.setAttribute(`aria-valuenow`, Math.round(o * 100) / 100));
    },
    c = (coord) => {
      let b = e.getBoundingClientRect(),
        f = vert
          ? clamp((b.bottom - coord) / b.height, 0, 1)
          : clamp((coord - b.left) / b.width, 0, 1);
      ((o = n + f * (r - n)), s(), t.onInput && t.onInput(o));
    },
    l = !1;
  (e.addEventListener(`pointerdown`, (e2) => {
    ((l = !0), t.onStart && t.onStart());
    try {
      e.setPointerCapture(e2.pointerId);
    } catch {}
    (c(vert ? e2.clientY : e2.clientX), e2.preventDefault(), e2.stopPropagation());
  }),
    e.addEventListener(`pointermove`, (e2) => {
      l && (c(vert ? e2.clientY : e2.clientX), e2.preventDefault(), e2.stopPropagation());
    }));
  let u = (e2) => {
    if (l) {
      ((l = !1), t.onEnd && t.onEnd());
      try {
        e.releasePointerCapture(e2.pointerId);
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
      if (e.key === `ArrowLeft` || e.key === `ArrowDown`) o = clamp(o - d, n, r);
      else if (e.key === `ArrowRight` || e.key === `ArrowUp`) o = clamp(o + d, n, r);
      else if (e.key === `Home`) o = n;
      else if (e.key === `End`) o = r;
      else return;
      (e.preventDefault(), s(), t.onInput && t.onInput(o));
    }),
    s(),
    {
      set: (e) => {
        ((o = clamp(e, n, r)), s());
      },
      get: () => o,
    }
  );
}
var Ar = document.getElementById(`stRot`),
  jr = document.getElementById(`stAff`),
  Mr = document.getElementById(`stSeq`),
  Nr = document.getElementById(`stEcart`),
  pcards = [...document.querySelectorAll(`#panel .pcard`)];
function setCard(e, t, n) {
  let r = e.querySelector(`.pcardb`);
  if (
    (e.classList.toggle(`open`, t),
    e.querySelector(`.pcardh`).setAttribute(`aria-expanded`, t ? `true` : `false`),
    (r.inert = !t),
    n === !1)
  ) {
    r.style.maxHeight = t ? `none` : `0px`;
    return;
  }
  t
    ? ((r.style.maxHeight = r.scrollHeight + `px`),
      r.addEventListener(`transitionend`, function t(n) {
        n.propertyName === `max-height` &&
          (r.removeEventListener(`transitionend`, t), e.classList.contains(`open`) && (r.style.maxHeight = `none`));
      }))
    : (r.style.maxHeight === `none` && ((r.style.maxHeight = r.scrollHeight + `px`), r.offsetHeight),
      (r.style.maxHeight = `0px`));
}
pcards.forEach((e) => {
  (e.querySelector(`.pcardh`).addEventListener(`click`, () => setCard(e, !e.classList.contains(`open`), !0)),
    setCard(e, !1, !1));
});
var Ir = document.getElementById(`rotOn`),
  Lr = document.getElementById(`rotVal`),
  Rr = document.getElementById(`speedwrap`),
  rotSpeedVal = 30;
function applyRotation() {
  let e = Ir.checked;
  ((controls.autoRotate = e && rotSpeedVal > 0),
    (controls.autoRotateSpeed = (rotSpeedVal / 100) * 2.4),
    (Lr.textContent = Math.round(rotSpeedVal) + ` %`),
    Rr.classList.toggle(`off`, !e),
    Ar && (Ar.textContent = e ? Math.round(rotSpeedVal) + ` %` : `off`));
}
(makeSlider(document.getElementById(`sldSpeed`), {
  label: `Vitesse de rotation`,
  value: 30,
  onInput: (e) => {
    ((rotSpeedVal = e), applyRotation());
  },
}),
  Ir.addEventListener(`change`, applyRotation));
var Vr = {
    bleu: `radial-gradient(125% 110% at 50% 0%, #2c1546 0%, #1c0d2e 55%, #08040f 100%)`,
    clair: `radial-gradient(120% 105% at 50% 16%, #f5f8fa 0%, #dde7ed 58%, #c2d0da 100%)`,
  },
  bgBtns = {
    bleu: document.getElementById(`bgBleu`),
    clair: document.getElementById(`bgClair`),
  };
function setBg(e) {
  ((lt.style.background = Vr[e]), (renderer.toneMappingExposure = e === `clair` ? 0.92 : 1));
  for (let t in bgBtns) bgBtns[t].classList.toggle(`active`, t === e);
  jr && (jr.textContent = e === `clair` ? `Studio` : `Bleu`);
}
(bgBtns.bleu.addEventListener(`click`, () => setBg(`bleu`)),
  bgBtns.clair.addEventListener(`click`, () => setBg(`clair`)));
var Wr = document.getElementById(`cutVal`),
  Gr = document.getElementById(`cellCutGroup`);
makeSlider(document.getElementById(`sldCut`), {
  label: `Profondeur de coupe de la cellule`,
  min: 0,
  max: 1.5,
  value: It,
  onInput: (e) => {
    ((It = e), Wr && (Wr.textContent = e.toFixed(2)), Gt());
  },
});
var Kr = document.getElementById(`cutNucVal`);
makeSlider(document.getElementById(`sldCutNuc`), {
  label: `Profondeur de coupe du noyau`,
  min: 0,
  max: 1.5,
  value: cutDepthNuc,
  onInput: (e) => {
    ((cutDepthNuc = e), Kr && (Kr.textContent = e.toFixed(2)));
  },
});
var qr = document.getElementById(`nucEpure`),
  Jr = document.getElementById(`nucSculpt`);
function setNucStyle(e) {
  ((Et = e), qr.classList.toggle(`active`, e === 0), Jr.classList.toggle(`active`, e === 1), rebuildNucleosome());
}
(qr.addEventListener(`click`, () => setNucStyle(0)), Jr.addEventListener(`click`, () => setNucStyle(1)));
var Xr = 0,
  Zr = 0,
  Qr = document.getElementById(`chromHet`),
  $r = document.getElementById(`chromEu`);
function setChromFold(e) {
  ((Zr = e), Qr.classList.toggle(`active`, e === 0), $r.classList.toggle(`active`, e === 1));
}
(Qr.addEventListener(`click`, () => setChromFold(0)), $r.addEventListener(`click`, () => setChromFold(1)));
var ti = document.getElementById(`chromFoldGroup`);
function disposeGroup(e) {
  e.traverse((e) => {
    (e.geometry && e.geometry.dispose(),
      e.material &&
        (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
          (e.map && e.map.dispose(), e.dispose && e.dispose());
        }));
  });
}
function rebuildNucleosome() {
  let e = TIERS.find((e) => e.name === `nuc`),
    t = e.group,
    n = buildNucleosome(Et, 1);
  ((n.group.visible = t.visible),
    world.remove(t),
    disposeGroup(t),
    world.add(n.group),
    (e.baseScale = TARGET / measureMaxDim(n.group)),
    (e.group = n.group),
    (e.pickables = n.pickables),
    (e.anchors = n.anchors),
    rebuildLabelDom(),
    nucApplySpread(spread));
}
var seqEl = document.getElementById(`seq`);
function ai(e) {
  return (e || ``)
    .toUpperCase()
    .replace(/[^ATGC]/g, ``)
    .slice(0, 60);
}
// ---- navigation le long du brin (barre de séquençage) : parcourir + centrer la fenêtre atome ----
var helixNavFrac = 0.5,
  helixNavCenter = -1,
  atomWinDirty = !1;
function helixNavY() {
  return (helixNavFrac - 0.5) * (currentSeq.length - 1) * D.RISE;
}
function setHelixNav(frac) {
  helixNavFrac = Math.max(0, Math.min(1, frac));
  let c = Math.round(helixNavFrac * (currentSeq.length - 1));
  c !== helixNavCenter && ((helixNavCenter = c), (atomWinDirty = !0));
}
function rebuildAtomWindow() {
  let t = TIERS.find((t) => t.name === `atom`),
    r = t.group,
    i = buildMolecularTier(currentSeq, { annot: !1, hbond: !0, win: 2, center: helixNavCenter });
  ((i.group.visible = r.visible),
    world.remove(r),
    disposeGroup(r),
    world.add(i.group),
    (t.baseScale = t.fixedScale == null ? TARGET / measureMaxDim(i.group) : t.fixedScale),
    (t.group = i.group),
    (t.pickables = i.pickables),
    (t.anchors = i.anchors),
    rebuildLabelDom());
}
function rebuildDNA(e) {
  currentSeq = e;
  helixNavCenter = Math.round(helixNavFrac * (e.length - 1));
  let t = [
    [`helix`, () => buildHelixTier(e)],
    [
      `atom`,
      () =>
        buildMolecularTier(e, {
          annot: !1,
          hbond: !0,
          win: 2,
          center: helixNavCenter,
        }),
    ],
  ];
  for (let [e, n] of t) {
    let t = TIERS.find((t) => t.name === e),
      r = t.group,
      i = n();
    ((i.group.visible = r.visible),
      world.remove(r),
      disposeGroup(r),
      world.add(i.group),
      (t.baseScale = t.fixedScale == null ? TARGET / measureMaxDim(i.group) : t.fixedScale),
      (t.group = i.group),
      (t.pickables = i.pickables),
      (t.anchors = i.anchors));
  }
  rebuildLabelDom();
}
var si = !1;
function scheduleDNARebuild() {
  si = !0;
}
var updSeqStatus = () => {
  Mr && (Mr.textContent = currentSeq.length + ` pb`);
};
(seqEl.addEventListener(`input`, () => {
  let e = ai(seqEl.value);
  e.length >= 2 && ((currentSeq = e), updSeqStatus(), scheduleDNARebuild());
}),
  seqEl.addEventListener(`change`, () => {
    seqEl.value = currentSeq;
  }),
  document.getElementById(`randomize`).addEventListener(`click`, () => {
    let e = 24 + Math.floor(Math.random() * 17),
      t = ``;
    for (let n = 0; n < e; n++) t += `ATGC`[Math.floor(Math.random() * 4)];
    ((seqEl.value = t), (currentSeq = ai(t)), updSeqStatus(), scheduleDNARebuild());
  }),
  updSeqStatus());
var ui = D.R,
  di = D.RISE,
  spreadFine = 0,
  spread = 0;
function nucApplySpread(e) {
  let t = TIERS.find((e) => e.name === `nuc`);
  t &&
    t.group.traverse((t) => {
      t.userData && t.userData.spreadBase && t.position.copy(t.userData.spreadBase).multiplyScalar(1 + e * 0.45);
    });
}
var hi = !1,
  gi = 0;
function rebuildChromosome(e) {
  let t = TIERS.find((e) => e.name === `chromo`);
  if (!t) return;
  let n = t.group,
    r = buildChromosome(e * 0.8);
  ((r.group.visible = n.visible),
    world.remove(n),
    disposeGroup(n),
    world.add(r.group),
    (t.baseScale = t.fixedScale == null ? TARGET / measureMaxDim(r.group) : t.fixedScale),
    (t.group = r.group),
    (t.pickables = r.pickables),
    (t.anchors = r.anchors),
    (built.chromo = r),
    rebuildLabelDom());
}
function vi() {
  ((D.RISE = di * (1 + (spreadFine + spread) * 1.2)),
    (D.R = ui * (1 + (spreadFine + spread * 0.7) * 1.2)),
    scheduleDNARebuild(),
    nucApplySpread(spread));
}
var yi = document.getElementById(`spreadVal`),
  bi = document.getElementById(`spreadFineVal`),
  spreadLbl = (e) => (e === 0 ? `compact` : `×` + (1 + e * 1.2).toFixed(1)),
  spreadLblG = (e) => (e === 0 ? `compact` : `×` + (1 + e).toFixed(2));
(makeSlider(document.getElementById(`sldSpread`), {
  label: `Intensité de l'écartement`,
  value: 0,
  onInput: (e) => {
    ((spread = e / 100),
      (yi.textContent = spreadLblG(spread)),
      Nr && (Nr.textContent = spreadLblG(spread)),
      (hi = !0),
      vi());
  },
}),
  makeSlider(document.getElementById(`sldFine`), {
    label: `Réglage fin de l'ADN`,
    value: 0,
    onInput: (e) => {
      ((spreadFine = e / 100), (bi.textContent = spreadLbl(spreadFine)), vi());
    },
  }));
var Ci = document.getElementById(`nucStyleGroup`),
  wi = document.getElementById(`spreadScope`),
  Ti = document.getElementById(`dnaFine`),
  SPREAD_SCOPE = {
    chromo: `· boucles`,
    chromatin: `· nucléosomes`,
    nuc: `· octamère`,
    helix: `· bases`,
    atom: `· atomes`,
  },
  isMobile = () => window.matchMedia(`(max-width: 720px), (pointer: coarse)`).matches;
function makeDraggable(e) {
  if (!e) return;
  e.classList.add(`draggable`);
  let t = null,
    n = null,
    r = !1;
  (e.addEventListener(`pointerdown`, (e) => {
    isMobile() ||
      e.target.closest(
        `input,button,textarea,select,a,label,.switch,[contenteditable],.dslider,.pcollapse,[data-noplace]`,
      ) ||
      ((t = {
        x: e.clientX,
        y: e.clientY,
        pid: e.pointerId,
      }),
      (r = !1));
  }),
    e.addEventListener(`pointermove`, (i) => {
      if (!t) return;
      if (!r) {
        if (Math.hypot(i.clientX - t.x, i.clientY - t.y) < 4) return;
        r = !0;
        let a = e.getBoundingClientRect();
        ((n = {
          dx: t.x - a.left,
          dy: t.y - a.top,
        }),
          (e.style.left = a.left + `px`),
          (e.style.top = a.top + `px`),
          (e.style.right = `auto`),
          (e.style.bottom = `auto`),
          (e.style.transform = `none`));
        try {
          e.setPointerCapture(t.pid);
        } catch {}
        e.classList.add(`dragging`);
      }
      (i.stopPropagation(), i.preventDefault());
      let a = e.offsetWidth,
        o = e.offsetHeight;
      ((e.style.left = clamp(i.clientX - n.dx, 6, innerWidth - a - 6) + `px`),
        (e.style.top = clamp(i.clientY - n.dy, 6, innerHeight - o - 6) + `px`));
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
[`panel`, `detail`].forEach((e) => makeDraggable(document.getElementById(e)));
var panelEl = document.getElementById(`panel`),
  Ai = document.getElementById(`menuBtn`),
  ji = document.getElementById(`panelCollapse`);
function setPanelCollapsed(e) {
  (document.body.classList.toggle(`panel-collapsed`, e),
    (panelEl.inert = e),
    Ai.setAttribute(`aria-expanded`, e ? `false` : `true`),
    ji.setAttribute(`aria-expanded`, e ? `false` : `true`));
}
(ji.addEventListener(`click`, () => setPanelCollapsed(!0)), Ai.addEventListener(`click`, () => setPanelCollapsed(!1)));
var mqMobile = window.matchMedia(`(max-width: 720px), (pointer: coarse)`);
setPanelCollapsed(!1); // le trio ↻ · ⇔ · ATGC tient dans tous les cas : jamais replié
function fitPanelHeight() {
  let e = document.getElementById(`atlasBar`);
  if (!(!panelEl || !e)) {
    if (isMobile()) {
      ((panelEl.style.maxHeight = ``),
        (panelEl.style.left =
          panelEl.style.top =
          panelEl.style.right =
          panelEl.style.bottom =
          panelEl.style.transform =
            ``));
      return;
    }
    // HUD « maquette Cellule » : le panneau n'est plus qu'une rangée de trois boutons,
    // le corps du réglage est décroché dessous — plus rien à borner en hauteur.
    panelEl.style.maxHeight = ``;
  }
}
(mqMobile.addEventListener(`change`, () => {
  (setPanelCollapsed(!1), fitPanelHeight());
}),
  fitPanelHeight(),
  window.matchMedia(`(pointer: coarse)`).matches &&
    (hintEl.textContent = `pincer pour plonger · glisser pour pivoter · toucher un élément pour les infos`));
var tmpV = new Vector3(),
  Ii = 0;
function tick() {
  if (document.body.classList.contains(`atlas-open`)) return;
  (si && ((si = !1), rebuildDNA(currentSeq)),
    atomWinDirty && ((atomWinDirty = !1), rebuildAtomWindow()),
    hi && performance.now() - gi > 110 && ((hi = !1), (gi = performance.now()), rebuildChromosome(spread)),
    (depth += (depthTarget - depth) * 0.1));
  let e = fieldTop * 10 ** -depth,
    t = Math.log10(e);
  ((Xr += (Zr - Xr) * 0.12), chromatinTier.setFold(Xr, spread));
  // recadrage horizontal doux : aux niveaux profonds le sujet est décalé vers la droite,
  // hors de la colonne de gauche (échelle). Désactivé sur écran étroit / mobile.
  {
    let voMag = innerWidth >= 1050 ? clamp(depth / Pmax, 0, 1) * 58 : 0;
    if (voMag > 0.5) camera.setViewOffset(innerWidth, innerHeight, -voMag, 0, innerWidth, innerHeight);
    else if (camera.view && camera.view.enabled) camera.clearViewOffset();
  }
  let n = 0;
  for (; n < TIERS.length - 2 && Math.log10(TIERS[n + 1].V) > t;) n++;
  let r = TIERS[n],
    i = TIERS[n + 1],
    a = Math.log10(r.V),
    o = Math.log10(i.V),
    s = clamp((a - t) / (a - o || 1), 0, 1),
    c = 0.16,
    // le tier précédent se fond plus tôt (fin à 0.6 au lieu de 0.66) et grossit moins (×0.55 au lieu de ×0.85)
    // → il ne traîne plus, énorme et coupé aux bords, pendant que le sujet suivant arrive
    l = s < 0.5 - c ? 0 : s > 0.6 ? 1 : Oe((s - (0.5 - c)) / (0.6 - (0.5 - c)));
  for (let e of TIERS) ((e.alpha = 0), (e.diveScale = 1));
  ((r.alpha = 1 - l), (i.alpha = l), (r.diveScale = 1 + l * 0.55), (i.diveScale = 0.5 + 0.5 * l));
  for (let t of TIERS) {
    if (t.alpha <= 0.004) {
      (t.group.visible && (t.group.visible = !1), (t.labelAlpha = 0));
      continue;
    }
    let n = ke(t.V / e, en) * t.baseScale * t.diveScale;
    ((t.group.visible = !0),
      t.group.scale.setScalar(n),
      (t.name === `helix` || t.name === `atom`) && (t.group.position.y = -helixNavY() * n),
      setGroupAlpha(t.group, t.alpha),
      t === celluleTier &&
        ((cellClip.constant = cellCutYLocal() * n),
        (nucClip.constant = cutDepthNuc <= 0 ? 1e6 : (Ft.cy + Ft.r * (1 - cutDepthNuc * 0.95)) * n)),
      (t.labelAlpha = clamp((t.alpha - 0.5) / 0.45, 0, 1)));
  }
  let u = Math.max(chromoTierEnv ? chromoTierEnv.alpha : 0, chromatinTier.alpha, Yt ? Yt.alpha : 0);
  ((envCytoplasm.visible = !1),
    u <= 0.004 ? (envNucleoplasm.visible = !1) : ((envNucleoplasm.visible = !0), setGroupAlpha(envNucleoplasm, u)));
  let d = 0,
    f = 1e9;
  (TIERS.forEach((t, n) => {
    let r = Math.abs(Math.log10(t.V / e));
    r < f && ((f = r), (d = n));
  }),
    ladderSteps.forEach((e, t) => e.classList.toggle(`on`, t === d)),
    d !== En && removeAllPins(), // changement d'échelle → on ferme les fiches (elles ne réapparaissent plus au retour)
    (En = d),
    centerLadder(d),
    returnTopBtn && returnTopBtn.classList.toggle(`show`, depth > 0.15),
    // tiroir des organites : visible au seul niveau « cellule »
    document.body.classList.toggle(`cell-tier`, TIERS[d].name === `cellule`),
    document.body.classList.contains(`scale-open`) && Nn(TIERS[d].name));
  let p = TIERS[d],
    m = p.shortLabel,
    h = p.scaleLabel;
  if (p.name === `chromatin`) {
    let e = Zr >= 0.5;
    ((m = e ? `Collier de perles` : `Fibre de chromatine`), (h = e ? `≈ 11 nm` : `≈ 30 nm`));
  }
  if (Gn.textContent !== m) {
    ((Gn.textContent = m), (Kn.textContent = h), renderLegend(p.name));
    let e = ladderSteps[d];
    if (e) {
      let t = e.querySelector(`.lab b`),
        n = e.querySelector(`.lab span`);
      (t && (t.textContent = m), n && (n.textContent = h));
    }
  }
  let g = TIERS.find((e) => e.name === `nuc`).alpha > 0.3;
  if (
    ((Ci.style.display = g ? `block` : `none`),
    (ti.style.display = chromatinTier.alpha > 0.3 ? `block` : `none`),
    Gr && (Gr.style.display = celluleTier && celluleTier.alpha > 0.3 ? `block` : `none`),
    wi && (wi.textContent = SPREAD_SCOPE[p.name] || `· structure`),
    Ti)
  ) {
    let e = p.name === `helix` || p.name === `atom`;
    ((Ti.style.display = e ? `block` : `none`),
      document.body.classList.toggle(`dna-tier`, e),
      dnaSeqBarEl && (dnaSeqBarEl.classList.toggle(`show`, e), e && dnaSeqBarSync && dnaSeqBarSync()));
  }
  for (let e of zn) {
    let t = TIERS[e.ti];
    if (t.labelAlpha < 0.04 || t.alpha <= 0.004) {
      e.el.style.opacity = 0;
      continue;
    }
    (tmpV.copy(e.pos), t.group.localToWorld(tmpV));
    let n = tmpV.project(camera);
    if (n.z > 1) {
      e.el.style.opacity = 0;
      continue;
    }
    // Arrondi au pixel : une position fractionnaire qui change a chaque image fait
    // vibrer le texte de l'etiquette.
    let r = Math.round((n.x * 0.5 + 0.5) * innerWidth),
      i = Math.round((-n.y * 0.5 + 0.5) * innerHeight);
    ((e.el.style.transform = `translate(${r}px,${i}px) translate(-50%,-50%)`),
      (e.el.style.opacity = t.labelAlpha * 0.96));
  }
  for (let [e, t] of pins) {
    let e = TIERS[t.ti],
      n = !e || e.labelAlpha < 0.04 || e.alpha <= 0.004;
    (tmpV.copy(t.pos), n || e.group.localToWorld(tmpV));
    let r = n ? null : tmpV.project(camera);
    if (n || r.z > 1) {
      ((t.el.style.display = `none`), (t.line.style.display = `none`), (t.dot.style.display = `none`));
      continue;
    }
    // Meme raison que pour les etiquettes : la fiche suit son organite image par image,
    // et une position fractionnaire la fait vibrer. On arrondit l'ancre ET la fiche.
    let i = Math.round((r.x * 0.5 + 0.5) * innerWidth),
      a = Math.round((-r.y * 0.5 + 0.5) * innerHeight),
      o = Math.round(clamp(i + (i < innerWidth * 0.5 ? 150 : -150), 130, innerWidth - 130)),
      s = Math.round(clamp(a - 72, 80, innerHeight - 96)),
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
  if (!down && lastHoverEv && tip.style.display === `block`) {
    let e = performance.now();
    if (e - Ii > 110) {
      Ii = e;
      let t = setPointer(lastHoverEv),
        n = ar();
      n ? showTip(n, lastHoverEv.clientX - t.left, lastHoverEv.clientY - t.top) : hideTip();
    }
  }
  (updateScaleUI(e),
    dt && (dt.style.opacity = chromoTierEnv ? chromoTierEnv.alpha.toFixed(3) : 0),
    ft && (ft.style.opacity = celluleTier ? celluleTier.alpha.toFixed(3) : 0),
    controls.update(),
    renderer.render(scene, camera));
}
function frame() {
  (requestAnimationFrame(frame), tick());
}
function onResize() {
  ((camera.aspect = innerWidth / innerHeight),
    camera.updateProjectionMatrix(),
    renderer.setSize(innerWidth, innerHeight),
    leadersEl && (leadersEl.setAttribute(`width`, innerWidth), leadersEl.setAttribute(`height`, innerHeight)),
    bn(),
    fitPanelHeight());
}
addEventListener(`resize`, onResize);

// ---- barre de séquençage (parcourir le brin + zoomer sur une zone) — visible au niveau hélice/atome ----
var dnaSeqBarEl = document.getElementById(`dnaSeqBar`),
  dnaSeqBarSync = null;
(function () {
  if (!dnaSeqBarEl) return;
  let strip = document.getElementById(`dsbStrip`),
    label = document.getElementById(`dsbLabel`),
    dragging = !1;
  function rebuild() {
    strip.innerHTML =
      currentSeq
        .split(``)
        .map((b) => `<span class="dsb-tile" style="--c:${COL.base[b] || `#888`}">${b}</span>`)
        .join(``) + `<div class="dsb-window"></div>`;
  }
  function visibleFrac() {
    let N = currentSeq.length || 1,
      hv = Math.log10(TIERS.find((t) => t.name === `helix`).V),
      av = Math.log10(TIERS.find((t) => t.name === `atom`).V),
      cur = Math.log10(fieldTop * 10 ** -depth),
      f = clamp((hv - cur) / (hv - av || 1), 0, 1),
      atomFrac = Math.min(1, 5 / N);
    return Math.max(atomFrac, 1 - f * (1 - atomFrac));
  }
  function sync() {
    let N = currentSeq.length || 1,
      wf = visibleFrac(),
      x = Math.max(0, Math.min(1 - wf, helixNavFrac - wf / 2)),
      w = strip.querySelector(`.dsb-window`);
    w && ((w.style.left = (x * 100).toFixed(2) + `%`), (w.style.width = (wf * 100).toFixed(2) + `%`));
    let txt = `Nucléotide ` + (Math.round(helixNavFrac * (N - 1)) + 1) + ` sur ` + N;
    label.textContent !== txt && (label.textContent = txt);
  }
  let fracFromEvent = (e) => {
    let r = strip.getBoundingClientRect();
    return clamp((e.clientX - r.left) / r.width, 0, 1);
  };
  // décalage entre le doigt et le centre de la fenêtre quand on la saisit (0 si on clique sur le rail nu)
  let grabOffset = 0;
  (strip.addEventListener(`pointerdown`, (e) => {
    ((dragging = !0), strip.classList.add(`grabbing`));
    try {
      strip.setPointerCapture(e.pointerId);
    } catch (_) {}
    noteInteract();
    let pf = fracFromEvent(e),
      wf = visibleFrac(),
      left = Math.max(0, Math.min(1 - wf, helixNavFrac - wf / 2));
    // clic dans la fenêtre bleue : on la garde en place et on suit le déplacement (pas de saut).
    // clic sur le rail nu à côté : on saute au point cliqué (comportement d'origine).
    pf >= left && pf <= left + wf ? (grabOffset = pf - helixNavFrac) : ((grabOffset = 0), setHelixNav(pf));
  }),
    strip.addEventListener(`pointermove`, (e) => dragging && setHelixNav(fracFromEvent(e) - grabOffset)),
    strip.addEventListener(`pointerup`, () => ((dragging = !1), strip.classList.remove(`grabbing`))),
    strip.addEventListener(`pointercancel`, () => ((dragging = !1), strip.classList.remove(`grabbing`))));
  (document
    .getElementById(`dsbZoomIn`)
    .addEventListener(`click`, () => (noteInteract(), (depthTarget = clamp(depthTarget + 0.16, 0, Pmax)))),
    document
      .getElementById(`dsbZoomOut`)
      .addEventListener(`click`, () => (noteInteract(), (depthTarget = clamp(depthTarget - 0.16, 0, Pmax)))),
    document.getElementById(`dsbFit`).addEventListener(`click`, () => {
      (setHelixNav(0.5),
        (depthTarget = clamp(Math.log10(fieldTop / TIERS.find((t) => t.name === `helix`).V), 0, Pmax)));
    }));
  dnaSeqBarSync = sync;
  let _r = rebuildDNA; // reconstruire les tuiles quand la séquence change
  rebuildDNA = function (s) {
    let v = _r(s);
    rebuild();
    return v;
  };
  rebuild();
})();

/* ---- init (moteur) — l’atlas est chargé séparément, voir le module atlas dans index.html ---- */
setBg(`bleu`);
// accessibilité : si le système demande « réduire les animations », la rotation automatique démarre coupée
try {
  matchMedia(`(prefers-reduced-motion: reduce)`).matches && Ir && ((Ir.checked = !1), (controls.autoRotate = !1));
} catch (e) {}
applyRotation();
renderLegend(`cellule`);
frame();
// garde-fou : normalement le script du loader s'auto-masque quand la cellule est dessinée (~3 s).
// Ceci n'est qu'un filet de sécurité si ce script n'avait pas pu tourner.
setTimeout(() => { const el = document.getElementById(`loader`); if (el) el.classList.add(`gone`); }, 6000);
setTimeout(() => {
  _r || hintEl.classList.remove(`gone`);
}, 700);
