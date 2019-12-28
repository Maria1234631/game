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
var id = 'thumb_up_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumb_up_24"><path fill="currentColor" fill-rule="evenodd" d="M6 10c0-1.5-.5-2-2-2H2v12h2c1.5 0 2-.5 2-2v-8zm2-.636c1.034-.52 1.867-1.31 2.5-2.364C12 4.5 12 2 13 1.5S15 2 15 4s-1 3.5-.5 4 3 0 5 0 2.5.5 2.5 1.5-.667 1.5-2 1.5c1 0 1.5.5 1.5 1.5s-.667 1.5-2 1.5c1 0 1.5.5 1.5 1.5s-.667 1.5-2 1.5c1 0 1.5.5 1.5 1.5S20 20 18 20c-5.145 0-5.477-.875-10-.988V9.364z" /></symbol>';

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