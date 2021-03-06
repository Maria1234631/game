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

var viewBox = '0 0 16 16';
var id = 'users_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="users_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M9.886 8.65a7.356 7.356 0 0 1 1.447-.15c1.53 0 4.334.571 4.334 2.857 0 1-.255 1.143-.765 1.143h-4.06c.105-.326.158-.708.158-1.143 0-1.148-.42-2.044-1.114-2.707zM1 11.357C1 9.071 3.804 8.5 5.333 8.5c1.53 0 4.334.571 4.334 2.857 0 1-.255 1.143-.765 1.143H1.765c-.51 0-.765-.143-.765-1.143zM7.333 5.5a2 2 0 1 1-3.999.001 2 2 0 0 1 4-.001zm6 0a2 2 0 1 1-3.999.001 2 2 0 0 1 4-.001z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;