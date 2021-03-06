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

var viewBox = '0 0 28 28';
var id = 'game_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="game_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9.5 11.75v-1.248A.502.502 0 0 0 8.998 10h-.495a.502.502 0 0 0-.503.502v1.248H6.753a.502.502 0 0 0-.503.502v.495c0 .278.225.503.503.503H8v1.248c0 .277.225.502.502.502h.495a.502.502 0 0 0 .503-.502V13.25h1.248a.502.502 0 0 0 .502-.502v-.495a.502.502 0 0 0-.502-.503H9.5zM18 18h-8c-1.5 0-4.011 5-5.5 5-2 0-2.5-1-2.5-4S2.5 7 8 7h12c5.5 0 6 9 6 12s-.5 4-2.5 4-4-5-5.5-5zm-.747-6.25a.502.502 0 0 0-.503.502v.495c0 .278.225.503.503.503h.494a.502.502 0 0 0 .503-.502v-.495a.502.502 0 0 0-.503-.503h-.494zm3.5 0a.502.502 0 0 0-.503.502v.495c0 .278.225.503.503.503h.494a.502.502 0 0 0 .503-.502v-.495a.502.502 0 0 0-.503-.503h-.494zm-1.75 1.75a.502.502 0 0 0-.503.502v.495c0 .278.225.503.503.503h.494a.502.502 0 0 0 .503-.502v-.495a.502.502 0 0 0-.503-.503h-.494zm0-3.5a.502.502 0 0 0-.503.502v.495c0 .278.225.503.503.503h.494a.502.502 0 0 0 .503-.502v-.495a.502.502 0 0 0-.503-.503h-.494z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;