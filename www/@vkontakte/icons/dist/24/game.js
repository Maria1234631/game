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
var id = 'game_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="game_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8 10V8.75a.5.5 0 0 0-.5-.5h-.25a.5.5 0 0 0-.5.5V10H5.5a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5h1.25v1.25a.5.5 0 0 0 .5.5h.25a.5.5 0 0 0 .5-.5v-1.25h1.25a.5.5 0 0 0 .5-.5v-.25a.5.5 0 0 0-.5-.5H8zm7.5 5.5H8.496C7.183 15.5 5.5 20 3.683 20c-1.75 0-2.187-.875-2.187-3.5S1.933 6 6.746 6h10.5c4.812 0 5.25 7.875 5.25 10.5s-.438 3.5-2.188 3.5c-1.808 0-3.495-4.5-4.808-4.5zm-.75-5.5a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 .5-.5v-.25a.5.5 0 0 0-.5-.5h-.25zm3.5 0a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5h.25a.5.5 0 0 0 .5-.5v-.25a.5.5 0 0 0-.5-.5h-.25zm-1.75 1.75a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5h.25a.5.5 0 0 0 .5-.5v-.25a.5.5 0 0 0-.5-.5h-.25zm0-3.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 .5.5h.25a.5.5 0 0 0 .5-.5v-.25a.5.5 0 0 0-.5-.5h-.25z" fill="currentColor" /></g></symbol>';

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