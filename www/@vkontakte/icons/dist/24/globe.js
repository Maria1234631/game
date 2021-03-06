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
var id = 'globe_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="globe_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14.314 9.5H9.77a16.822 16.822 0 0 0-.152 5h4.696c.122-.805.186-1.64.186-2.5 0-.86-.064-1.695-.186-2.5zm1.515 0c.112.81.171 1.646.171 2.5 0 .854-.059 1.69-.171 2.5h4.297c.243-.79.374-1.63.374-2.5 0-.87-.13-1.71-.374-2.5H15.83zm-3.85 11c.895-1.252 1.6-2.783 2.033-4.5H9.87c.368 1.691.995 3.217 1.81 4.494.099.004.199.006.299.006zm1.915-.212A8.515 8.515 0 0 0 19.502 16h-3.948a15.55 15.55 0 0 1-1.66 4.288zm0-16.576A15.55 15.55 0 0 1 15.554 8h3.948a8.515 8.515 0 0 0-5.608-4.288zM14.012 8c-.4-1.588-1.033-3.017-1.834-4.213-.88 1.17-1.589 2.601-2.055 4.213h3.89zM8.248 9.5H3.874A8.498 8.498 0 0 0 3.5 12c0 .87.13 1.71.374 2.5h4.235a18.294 18.294 0 0 1 .139-5zM9.79 20.21A15.952 15.952 0 0 1 8.34 16H4.497a8.52 8.52 0 0 0 5.292 4.21zm.665-16.57A8.511 8.511 0 0 0 4.498 8H8.57c.423-1.617 1.068-3.092 1.886-4.36zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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