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
var id = 'share_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M13 8.75V4.581a.5.5 0 0 1 .824-.38l8.728 7.418a.5.5 0 0 1 0 .762L13.824 19.8a.5.5 0 0 1-.824-.381V15.25c-5.346 0-9.14 1.145-11.38 3.435a.25.25 0 0 1-.422-.232C2.703 11.984 6.637 8.75 13 8.75zm0 0V4.581a.5.5 0 0 1 .824-.38l8.728 7.418a.5.5 0 0 1 0 .762L13.824 19.8a.5.5 0 0 1-.824-.381V15.25c-5.346 0-9.14 1.145-11.38 3.435a.25.25 0 0 1-.422-.232C2.703 11.984 6.637 8.75 13 8.75z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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