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
var id = 'music_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="music_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M25 13.5v5.937c0 4.628-1.481 5.626-4.208 5.992-1.416.19-3.625-.552-3.625-3.243 0-1.314 1.094-2.62 2.46-2.889 1.268-.249-.41.077 2.457-.469.461-.088.423-.417.423-.773l-.003-4.555H22.5l.007-3.435c0-.315-.098-.464-.46-.373l-9.561 1.65c-.406.101-.486.27-.486.658v9.981c0 4.628-1.648 5.626-4.374 5.992C6.209 28.163 4 27.421 4 24.73c0-1.314 1.095-2.62 2.461-2.889 1.267-.249-.244.077 2.623-.469.461-.088.423-.417.423-.773l-.004-5.818L9.5 14v-2.6s-.005-2.099 0-3.148c.007-1.255.514-1.716 2.5-2.124L22.333 4.28S25 3.447 25 5.614V13.5z" fill="currentColor" /></g></symbol>';

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