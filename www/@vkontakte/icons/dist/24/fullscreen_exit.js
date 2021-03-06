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
var id = 'fullscreen_exit_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="fullscreen_exit_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4.58 13.979a.99.99 0 0 1 .99-.99h4.451a.99.99 0 0 1 .99.99v4.452a.99.99 0 0 1-1.98 0v-2.05l-3.319 3.322a1 1 0 0 1-1.414 0v-.001a1 1 0 0 1 0-1.414l3.32-3.32H5.57a.99.99 0 0 1-.99-.99zm10.388-6.36l3.32-3.322a1 1 0 0 1 1.414 0v.001a1 1 0 0 1 0 1.414l-3.32 3.32h2.049a.99.99 0 0 1 0 1.979h-4.442a1 1 0 0 1-1-1V5.569a.99.99 0 1 1 1.98 0v2.05z" fill="currentColor" /></g></symbol>';

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