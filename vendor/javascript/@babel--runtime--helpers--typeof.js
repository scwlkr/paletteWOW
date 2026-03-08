// @babel/runtime/helpers/typeof@7.28.6 downloaded from https://cdn.jsdelivr.net/npm/@babel/runtime@7.28.6/helpers/esm/typeof.js

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
export { _typeof as default };