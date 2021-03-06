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
var id = 'settings_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.648 5.894c1.465-.84 1.719-1.714 1.894-2.588.194-.973.486-.973.972-.973h.972c.486 0 .68 0 .972.973.263.876.447 1.752 1.903 2.592 1.63.443 2.428.003 3.17-.491.825-.55 1.031-.344 1.375 0l.687.687c.344.344.482.481 0 1.375-.433.805-.923 1.555-.487 3.179.84 1.465 1.714 1.719 2.588 1.894.973.194.973.486.973.972v.972c0 .486 0 .68-.973.972-.876.263-1.752.447-2.592 1.903-.443 1.63-.003 2.428.491 3.17.55.825.344 1.031 0 1.375l-.687.687c-.344.344-.481.482-1.375 0-.805-.433-1.555-.923-3.179-.487-1.465.84-1.719 1.714-1.894 2.588-.194.973-.486.973-.972.973h-.972c-.486 0-.68 0-.972-.973-.263-.876-.447-1.752-1.903-2.592-1.63-.443-2.428-.003-3.17.491-.825.55-1.031.344-1.375 0l-.687-.687c-.344-.344-.482-.481 0-1.375.433-.805.923-1.555.487-3.179-.84-1.465-1.714-1.719-2.588-1.894-.973-.194-.973-.486-.973-.972v-.972c0-.486 0-.68.973-.972.876-.263 1.752-.447 2.592-1.903.443-1.63.003-2.428-.491-3.17-.55-.825-.344-1.031 0-1.375l.687-.687c.344-.344.481-.482 1.375 0 .805.433 1.555.923 3.179.487zM14 19.502a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor" /></g></symbol>';

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