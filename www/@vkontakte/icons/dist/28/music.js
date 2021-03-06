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
var id = 'music_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="music_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.505 13H19.5V9.203c0-.276-.085-.406-.402-.327l-8.173 1.548c-.355.089-.425.237-.425.576v8.456c0 4.339-1.545 5.274-4.101 5.618C5.071 25.252 3 24.556 3 22.034c0-1.233 1.026-2.457 2.307-2.708 1.188-.234-.385.071 2.303-.44.433-.083.396-.391.396-.725L8.005 16h-.008V9.975s-.005-1.836 0-2.754c.005-1.098.595-1.502 2.333-1.86L12 5.054l7.663-1.415s2.334-.73 2.334 1.167v5.67H22v6.857c0 4.339-1.545 5.274-4.101 5.617-1.328.179-3.399-.518-3.399-3.04 0-1.232 1.026-2.456 2.307-2.708 1.188-.233-.385.072 2.303-.44.433-.082.396-.39.396-.725L19.505 13z" fill="currentColor" /></g></symbol>';

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