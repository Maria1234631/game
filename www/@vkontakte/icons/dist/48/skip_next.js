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

var viewBox = '0 0 48 48';
var id = 'skip_next_48';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="skip_next_48"><g fill="none" fill-rule="evenodd"><path d="M48 0H0v48h48z" /><path d="M23.953 23.162L11.8 16.165A1.2 1.2 0 0 0 10 17.205v14.588a1.2 1.2 0 0 0 1.799 1.04l12.154-6.996v5.957a1.2 1.2 0 0 0 1.8 1.04l12.67-7.294a1.2 1.2 0 0 0 0-2.08l-12.67-7.293a1.2 1.2 0 0 0-1.8 1.04v5.955z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 48,
    height: !isNaN(props.height) ? +props.height : 48
  }));
}

var _default = Icon;
exports.default = _default;