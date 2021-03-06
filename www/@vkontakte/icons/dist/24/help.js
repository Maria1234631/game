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
var id = 'help_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="help_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm8.75 6.25v-.5a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm3.42-6.08c-.535.543-.921 1.014-1.084 1.836a2.29 2.29 0 0 0-.022.13 1 1 0 0 1-.99.864H12a.958.958 0 0 1-.954-1.039 2.27 2.27 0 0 1 .027-.221 4.05 4.05 0 0 1 1.097-2.07l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-.699 0-1.317.363-1.675.91a1.59 1.59 0 0 0-.172.39A1 1 0 0 1 9.2 9H9a.854.854 0 0 1-.833-1.043c.06-.266.13-.482.206-.647A4 4 0 0 1 12 5c2.21 0 4 1.79 4 4 0 .88-.36 1.68-.93 2.25l-.9.92z" fill="currentColor" /></g></symbol>';

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