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

var viewBox = '0 0 16 16';
var id = 'reply_outline_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="reply_outline_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M7.498 12.825a.95.95 0 0 1-1.602.69L.787 8.692.75 8.652A.95.95 0 0 1 .787 7.31l5.109-4.825a.95.95 0 0 1 1.602.691V5.1c4.218.82 6.652 3.573 7.753 7.782l.128.558a.85.85 0 0 1-1.498.714l-.361-.463c-1.511-1.754-3.333-2.603-6.022-2.732v1.867zm-.856-6.35l-.644-.091V4.451L2.241 8l3.757 3.549V9.44h.75c2.65 0 4.683.57 6.366 1.825-1.193-2.685-3.242-4.33-6.472-4.79z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;