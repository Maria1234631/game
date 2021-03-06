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

var viewBox = '0 0 8 12';
var id = 'online_mobile_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" id="online_mobile_12"><path d="M2.01 0h3.98C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm-.007 3a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.502.502h3.995a.502.502 0 0 0 .503-.502V3.503A.502.502 0 0 0 5.997 3H2.003z" fill="currentColor" fill-rule="evenodd" /></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 8,
    height: !isNaN(props.height) ? +props.height : 12
  }));
}

var _default = Icon;
exports.default = _default;