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
var id = 'forward_10_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="forward_10_24"><g fill="none" fill-rule="evenodd"><path d="M24 24H0V0h24z" /><path d="M12.12 4.25V2.356a.35.35 0 0 1 .534-.298l4.302 2.644a.35.35 0 0 1 0 .596l-4.302 2.644a.35.35 0 0 1-.533-.298V5.75a6.25 6.25 0 1 0 6.142 7.414.75.75 0 1 1 1.474.278A7.752 7.752 0 0 1 4.37 12a7.75 7.75 0 0 1 7.75-7.75zM9.4 14.65V11l-.866.346a.28.28 0 0 1-.384-.26v-.506a.35.35 0 0 1 .211-.321l1.845-.795a.35.35 0 0 1 .489.322v4.864a.35.35 0 0 1-.35.35H9.75a.35.35 0 0 1-.35-.35zm4.487.349c-1.208 0-2.19-.695-2.187-2.8.002-2.106.98-2.8 2.187-2.8 1.208 0 2.19.694 2.188 2.8-.003 2.105-.98 2.8-2.188 2.8zm.003-1.119c.61 0 .94-.404.94-1.629 0-1.224-.336-1.63-.94-1.63-.604 0-.94.406-.94 1.63 0 1.224.33 1.63.94 1.63z" fill="currentColor" /></g></symbol>';

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