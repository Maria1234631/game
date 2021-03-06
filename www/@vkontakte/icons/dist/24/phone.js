"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserSymbol = _interopRequireDefault(require("svg-baker-runtime/browser-symbol"));

var _es6ObjectAssign = require("es6-object-assign");

var _sprite = _interopRequireDefault(require("../sprite"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 24 24';
var id = 'phone_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14.612 14.759c1.354-1.354 3.486-1.48 4.903-.287l1.025.863c1.168.983 1.287 2.757.263 3.96a3.318 3.318 0 0 1-2.195 1.133c-3.273.44-6.707-1.137-10.303-4.733C4.71 12.1 3.131 8.665 3.572 5.392a3.25 3.25 0 0 1 .159-.752c.19-.56.527-1.058.974-1.443 1.204-1.024 2.976-.906 3.96.264l.862 1.024c1.194 1.416 1.07 3.55-.284 4.903l-.736.735a.712.712 0 0 0-.164.748c.267.732.95 1.645 2.046 2.74 1.096 1.097 2.01 1.78 2.74 2.048.26.095.553.03.749-.166l.734-.734z" fill="currentColor" /></g></symbol>';

if (_sprite.default) {
  var browserSymbol = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;