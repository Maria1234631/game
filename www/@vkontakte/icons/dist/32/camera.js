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

var viewBox = '0 0 32 32';
var id = 'camera_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="camera_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M6.242 8h1.273c.907 0 1.886-.59 2.38-1.26.493-.67.93-1.32.957-1.352.528-.62 1.067-.888 1.987-.888H16V27H6.848C4.171 27 2 24.877 2 22.26V17v-4.26C2 9.779 3.333 8 6.242 8zm19.516 0h-1.273c-.907 0-1.927-.657-2.38-1.26-.452-.605-.93-1.32-.957-1.352-.528-.62-1.067-.888-1.987-.888H16V27h9.152C27.829 27 30 24.877 30 22.26v-9.52C30 9.779 28.667 8 25.758 8zM9.25 16.75A6.752 6.752 0 0 0 16 23.5a6.752 6.752 0 0 0 6.75-6.75A6.752 6.752 0 0 0 16 10a6.752 6.752 0 0 0-6.75 6.75zm2 0a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
}

var _default = Icon;
exports.default = _default;