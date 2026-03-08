// @babel/runtime/helpers/defineProperty@7.28.6 downloaded from https://cdn.jsdelivr.net/npm/@babel/runtime@7.28.6/helpers/esm/defineProperty.js

import toPropertyKey from "./toPropertyKey.js";
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
export { _defineProperty as default };