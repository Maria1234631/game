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

var viewBox = '0 0 56 56';
var id = 'place_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="place_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M32.592 46.853a6 6 0 0 1-9.184 0C15.83 37.842 12 30.258 12 24c0-8.837 7.163-16 16-16s16 7.163 16 16c0 6.258-3.83 13.842-11.408 22.853zM41 24c0-7.18-5.82-13-13-13s-13 5.82-13 13c0 5.394 3.54 12.402 10.704 20.923a3 3 0 0 0 4.592 0C37.46 36.402 41 29.394 41 24zm-17 0c0 2.208 1.792 4 4 4s4-1.792 4-4-1.792-4-4-4-4 1.792-4 4zm-3 0c0-3.865 3.135-7 7-7s7 3.135 7 7-3.135 7-7 7-7-3.135-7-7z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;