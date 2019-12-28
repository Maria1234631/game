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

var viewBox = '0 0 56 56';
var id = 'phone_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="phone_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M33.407 35.76L31.9 37.268a2.965 2.965 0 0 1-3.118.688c-1.75-.644-3.783-2.162-6.176-4.555-2.395-2.395-3.912-4.427-4.552-6.176a2.965 2.965 0 0 1 .686-3.118l1.51-1.508c2.24-2.24 2.443-5.745.498-8.052l-1.772-2.106c-1.48-1.76-4.17-1.939-6.012-.373a5.32 5.32 0 0 0-1.562 2.312 5.41 5.41 0 0 0-.26 1.265c-.835 6.194 2.212 12.826 9.303 19.918 7.091 7.091 13.72 10.137 19.974 9.295a5.315 5.315 0 0 0 3.513-1.809c1.573-1.846 1.393-4.54-.366-6.02l-2.104-1.772c-2.31-1.943-5.814-1.738-8.054.503zm-2.121-2.122c3.327-3.327 8.588-3.635 12.107-.677l2.105 1.773c3.048 2.566 3.355 7.164.71 10.269-1.4 1.62-3.372 2.638-5.447 2.835-7.26.978-14.746-2.46-22.438-10.154C10.63 29.991 7.19 22.502 8.16 15.311c.058-.645.192-1.28.4-1.896a8.33 8.33 0 0 1 2.452-3.626c3.1-2.636 7.695-2.329 10.259.72l1.77 2.105c2.963 3.514 2.657 8.778-.671 12.107l-1.493 1.491c.464 1.25 1.747 2.966 3.85 5.068 2.1 2.1 3.815 3.384 5.066 3.852l1.493-1.494z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;