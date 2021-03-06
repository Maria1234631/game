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
var id = 'mention_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="mention_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.26 13.5l.45-2.85c-.24-.06-.57-.12-.93-.12-1.98 0-3.54 1.95-3.54 4.26 0 1.14.51 1.83 1.47 1.83 1.14 0 2.31-1.38 2.55-3.12zm2.58 7.83l.51 1.71c-1.8.81-3.36 1.08-5.49 1.08-4.98 0-9.36-3.57-9.36-9.45 0-6.12 4.47-11.43 11.22-11.43 5.31 0 9.09 3.63 9.09 8.67 0 4.38-2.46 7.17-5.7 7.17-1.41 0-2.43-.75-2.58-2.34h-.06c-.96 1.53-2.28 2.34-3.9 2.34-1.92 0-3.36-1.47-3.36-3.96 0-3.66 2.73-6.96 7.05-6.96 1.32 0 2.82.33 3.54.72l-.9 5.58c-.27 1.74-.06 2.58.78 2.61 1.29.06 2.91-1.62 2.91-5.07 0-3.93-2.52-6.93-7.17-6.93-4.62 0-8.61 3.57-8.61 9.33 0 5.04 3.18 7.86 7.65 7.86 1.53 0 3.18-.33 4.38-.93z" fill="currentColor" /></g></symbol>';

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