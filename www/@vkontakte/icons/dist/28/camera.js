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
var id = 'camera_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="camera_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M11.392 5h5.216c.759 0 1.204.22 1.64.733l.79.977c.4.494 1.214.79 1.962.79h.5c2 0 3.5 1.5 3.5 4V19c0 2-2 4-4.5 4h-13C5 23 3 21 3 19v-7.5c0-2.5 1.5-4 3.5-4H7c.748 0 1.563-.296 1.963-.79l.79-.977c.435-.512.88-.733 1.639-.733zM8.65 14.75A5.352 5.352 0 0 0 14 20.1a5.352 5.352 0 0 0 5.35-5.35A5.352 5.352 0 0 0 14 9.4a5.352 5.352 0 0 0-5.35 5.35zm1.6 0a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0z" fill="currentColor" /></g></symbol>';

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