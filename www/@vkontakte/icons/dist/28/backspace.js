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
var id = 'backspace_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="backspace_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9 5c-.69 0-1.23.35-1.59.88L2 14l5.41 8.11c.36.53.9.89 1.59.89h13.985A3.015 3.015 0 0 0 26 19.985V8.015A3.015 3.015 0 0 0 22.985 5H9zm9.885 13.295L16 15.41l-2.885 2.885a.997.997 0 0 1-1.41-1.41L14.59 14l-2.885-2.885a.997.997 0 1 1 1.41-1.41L16 12.59l2.885-2.885a.997.997 0 0 1 1.41 1.41L17.41 14l2.885 2.885a.997.997 0 0 1-1.41 1.41z" fill="currentColor" /></g></symbol>';

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