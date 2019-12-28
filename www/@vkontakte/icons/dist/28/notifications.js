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
var id = 'notifications_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="notifications_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.995 13.907L20 12.08C20 8.36 17.389 5.5 14.005 5.5 10.618 5.5 8 8.362 8 12.079v1.828c0 .928-.384 1.617-1.212 2.592a44.99 44.99 0 0 1-.28.328c-.76.88-1.008 1.298-1.008 1.761 0 .226.016.347.068.457.124.264.488.455 1.432.455h14c.914 0 1.286-.192 1.423-.46.059-.117.077-.241.077-.452 0-.463-.248-.88-1.009-1.76l-.282-.328c-.828-.976-1.214-1.665-1.214-2.593zM18.4 21.5C17.731 23.764 16.213 25 14 25s-3.731-1.236-4.4-3.5H7c-1.665 0-2.758-.574-3.242-1.604-.21-.446-.258-.809-.258-1.308 0-1.113.425-1.83 1.493-3.068.139-.16.203-.235.27-.314.539-.635.737-.99.737-1.299V12.08C6 7.296 9.472 3.5 14.005 3.5 18.535 3.5 22 7.294 22 12.081l-.005 1.827c0 .307.2.663.739 1.297.067.08.13.154.27.314 1.07 1.239 1.496 1.955 1.496 3.07 0 .5-.057.89-.294 1.357C23.7 20.94 22.618 21.5 21 21.5h-2.6zm-2.12 0H11.72c.451 1.043 1.178 1.5 2.28 1.5 1.102 0 1.829-.457 2.28-1.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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