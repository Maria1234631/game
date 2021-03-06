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
var id = 'volume_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="volume_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M21.657 17.657a.9.9 0 1 1-1.273-1.273 6.2 6.2 0 0 0 0-8.768.9.9 0 1 1 1.273-1.273 8 8 0 0 1 0 11.314zM19.11 15.11a.9.9 0 0 1-1.273-1.273 2.6 2.6 0 0 0 0-3.676.9.9 0 1 1 1.273-1.273 4.4 4.4 0 0 1 0 6.222zM5 15a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2.765l5.514-5.307A2.481 2.481 0 0 1 15 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1c-.641 0-1.258-.25-1.72-.695L7.79 15H5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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