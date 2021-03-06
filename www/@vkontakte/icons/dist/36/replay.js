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

var viewBox = '0 0 36 36';
var id = 'replay_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="replay_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M16.976 3.524l-5.769 5.769a1 1 0 0 0 0 1.414l5.769 5.769A.6.6 0 0 0 18 16.05V11c4.965 0 9.5 4.535 9.5 9.5S22.965 30 18 30c-4.273 0-8.228-3.36-9.247-7.46a7.558 7.558 0 0 1-.152-.895A1.3 1.3 0 0 0 7.31 20.5H7.25a1.165 1.165 0 0 0-1.16 1.274c.048.508.105.917.17 1.227C7.41 28.43 12.229 32.5 18 32.5c6.63 0 12-5.37 12-12s-5.37-12-12-12V3.949a.6.6 0 0 0-1.024-.425z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 36,
    height: !isNaN(props.height) ? +props.height : 36
  }));
}

var _default = Icon;
exports.default = _default;