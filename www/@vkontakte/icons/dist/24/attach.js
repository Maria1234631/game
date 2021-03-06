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
var id = 'attach_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="attach_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.338 14.297l-4.557 4.546a4.614 4.614 0 0 1-6.526-.007l-.04-.04a4.993 4.993 0 0 1 .017-6.983l6.827-6.947a2.85 2.85 0 0 1 4.1.037c1.173 1.238 1.16 3.133-.001 4.326L11.28 16.29a1.1 1.1 0 0 1-1.496.074l-.074-.062a.94.94 0 0 1-.076-1.367l4.632-4.875a.9.9 0 0 0-1.305-1.24L8.33 13.696a2.74 2.74 0 0 0 .222 3.985l.074.062a2.9 2.9 0 0 0 3.944-.196l6.879-7.063a4.9 4.9 0 0 0-.098-6.936 4.65 4.65 0 0 0-6.575.056l-6.827 6.947a6.793 6.793 0 0 0-.022 9.501l.055.055a6.414 6.414 0 0 0 9.07.01l4.558-4.545a.9.9 0 1 0-1.271-1.275z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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