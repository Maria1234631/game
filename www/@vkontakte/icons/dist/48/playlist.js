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
var id = 'playlist_48';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="playlist_48"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z" /><path d="M27.66 13c.74 0 1.34.6 1.34 1.34v1.32c0 .74-.6 1.34-1.34 1.34H6.34C5.6 17 5 16.4 5 15.66v-1.32C5 13.6 5.6 13 6.34 13h21.32zm0 8c.74 0 1.34.6 1.34 1.34v1.32c0 .74-.6 1.34-1.34 1.34H6.34C5.6 25 5 24.4 5 23.66v-1.32C5 21.6 5.6 21 6.34 21h21.32zm8.317-2.553v12.397c0 6.017-1.167 7.178-5.833 7.79-2.224.292-4.834-.718-4.834-4.216 0-1.708 1.07-3.33 3.282-3.755 1.69-.323-.43.077 3.392-.633.928-.172 1.033-.504 1.033-1.211l-.003-5.592h-.01V17.47s-.007-2.745 0-4.117c.009-1.641 1.215-2.297 3.861-2.831 0 0 4.031-.765 6.247-1.167.49-.09.865.093.865.656 0 0-.015 3.496 0 5.406.004.554-.225.805-.787.905-2.242.398-6.486 1.147-6.486 1.147-.499.123-.727.473-.727.978zM6.34 33C5.6 33 5 32.4 5 31.66v-1.32C5 29.6 5.6 29 6.34 29h15.32c.74 0 1.34.6 1.34 1.34v1.32c0 .74-.6 1.34-1.34 1.34H6.34z" fill="currentColor" /></g></symbol>';

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