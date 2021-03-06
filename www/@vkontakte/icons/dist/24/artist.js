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
var id = 'artist_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="artist_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M15.133 14.124c-2.056.516-3.383 2.23-3.383 4.251 0 .59.088 1.134.248 1.625H4a1 1 0 0 1-1-1v-1c0-3.5 5.333-4.5 8.004-4.5 1.109 0 2.675.172 4.13.624zM15.006 8a4 4 0 0 1-4.002 4 4 4 0 1 1 0-8 4 4 0 0 1 4.002 4zm4.498 8.643c0 2.788-.746 3.458-2.835 3.82-1.11.193-2.419-.355-2.419-2.088 0-.846.535-1.65 1.642-1.86.846-.16-.316.04 1.597-.312.464-.086.517-.25.517-.6 0-.176-.004-.319-.01-1.375v-2.851s-.003-1.36 0-2.04c.005-.812.625-1.111 1.949-1.376 0 0 1.514-.247 2.623-.446.245-.044.433.046.433.325v2.557c0 .275-.113.4-.394.449-1.122.197-2.743.477-2.743.477-.25.061-.363.235-.363.485l.003 4.835z" fill="currentColor" /></g></symbol>';

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