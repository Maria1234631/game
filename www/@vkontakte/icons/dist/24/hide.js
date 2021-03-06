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
var id = 'hide_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="hide_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8.19 5.774h.001l1.695 1.694h-.002l2.032 2.033h.003l2.58 2.58v.005l2.032 2.031.001-.003 2.284 2.285-.002.002 1.386 1.386a1 1 0 0 1-1.415 1.414l-1.638-1.639C15.688 18.41 13.95 19 12 19c-6 0-10-5.6-10-7 0-.89 1.618-3.48 4.34-5.247L4.799 5.21a1 1 0 0 1 1.414-1.414L8.19 5.774zm7.132 9.963l-1.773-1.774a2.5 2.5 0 0 1-3.51-3.512L8.263 8.678a5 5 0 0 0 7.058 7.06zm-4.939-10.6A9.627 9.627 0 0 1 12 5c6 0 10 5.6 10 7 0 .552-.621 1.756-1.741 3.012l-3.265-3.264a5 5 0 0 0-4.742-4.742l-1.869-1.87z" fill="currentColor" /></g></symbol>';

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