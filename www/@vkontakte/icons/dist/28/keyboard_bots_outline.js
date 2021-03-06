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
var id = 'keyboard_bots_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="keyboard_bots_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16.308 3c2.59 0 3.818.237 5.094.92a6.452 6.452 0 0 1 2.678 2.678c.683 1.276.92 2.504.92 5.094v4.616c0 2.59-.237 3.818-.92 5.094a6.452 6.452 0 0 1-2.678 2.678c-1.276.683-2.504.92-5.094.92h-4.616c-2.59 0-3.818-.237-5.094-.92a6.452 6.452 0 0 1-2.678-2.678C3.237 20.126 3 18.898 3 16.308v-4.616c0-2.59.237-3.818.92-5.094A6.452 6.452 0 0 1 6.598 3.92C7.874 3.237 9.102 3 11.692 3h4.616zm0 2h-4.616c-2.288 0-3.204.177-4.15.683a4.452 4.452 0 0 0-1.859 1.858C5.177 8.488 5 9.404 5 11.691v4.617c0 2.288.177 3.204.683 4.15a4.452 4.452 0 0 0 1.858 1.859c.947.506 1.863.683 4.15.683h4.617c2.288 0 3.204-.177 4.15-.683a4.452 4.452 0 0 0 1.859-1.858c.506-.947.683-1.863.683-4.15v-4.617c0-2.288-.177-3.204-.683-4.15a4.452 4.452 0 0 0-1.858-1.859C19.512 5.177 18.596 5 16.309 5zM11 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-6-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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