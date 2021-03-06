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
var id = 'logo_twitter_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logo_twitter_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8.29 20c-2.317 0-4.474-.669-6.29-1.815.321.038.648.057.979.057a8.317 8.317 0 0 0 5.096-1.73c-1.796-.032-3.311-1.2-3.833-2.805a4.142 4.142 0 0 0 1.853-.069c-1.877-.37-3.292-2.003-3.292-3.96v-.051a4.14 4.14 0 0 0 1.86.505A4.02 4.02 0 0 1 2.836 6.77c0-.74.202-1.434.555-2.03a11.71 11.71 0 0 0 8.458 4.22 3.99 3.99 0 0 1-.107-.921C11.743 5.809 13.58 4 15.847 4c1.18 0 2.246.49 2.995 1.275a8.294 8.294 0 0 0 2.606-.98 4.067 4.067 0 0 1-1.805 2.235A8.309 8.309 0 0 0 22 5.894a8.274 8.274 0 0 1-2.047 2.091c.007.173.011.348.011.522C19.964 13.845 15.837 20 8.29 20" fill="currentColor" /></g></symbol>';

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