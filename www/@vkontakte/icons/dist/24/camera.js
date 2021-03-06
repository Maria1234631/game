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
var id = 'camera_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="camera_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9.629 3.5h4.742c.69 0 1.094.2 1.49.666l.718.888c.364.45 1.105.946 1.785.946h.454C21 6 22 7.333 22 9.556v6.888C22 18.408 20.372 20 18.364 20H5.636C3.628 20 2 18.408 2 16.444V9.556C2 7.333 3 6 5.182 6h.454c.68 0 1.42-.497 1.785-.946.363-.448.697-.864.718-.888.396-.465.8-.666 1.49-.666zM7 12.5c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm1.6 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" fill="currentColor" /></g></symbol>';

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