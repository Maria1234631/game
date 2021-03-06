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
var id = 'playlist_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="playlist_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M13 6.883A.88.88 0 0 0 12.118 6H2.882A.888.888 0 0 0 2 6.883v.234A.88.88 0 0 0 2.882 8h9.236A.888.888 0 0 0 13 7.117v-.234zm0 4a.88.88 0 0 0-.882-.883H2.882a.888.888 0 0 0-.882.883v.234a.88.88 0 0 0 .882.883h9.236a.888.888 0 0 0 .882-.883v-.234zM2 15.117v-.234A.89.89 0 0 1 2.885 14h4.227c.492 0 .885.395.885.883v.234a.89.89 0 0 1-.885.883H2.885A.882.882 0 0 1 2 15.117zm15.004.694c0 3.752-.993 4.654-3.776 5.142-1.48.259-3.223-.479-3.223-2.81 0-1.14.712-2.221 2.187-2.504 1.127-.216-.42.052 2.128-.42.618-.116.689-.337.689-.809 0-.236-.006-.428-.013-1.85V8.724s-.005-1.83 0-2.745c.006-1.094.833-1.496 2.596-1.852 0 0 2.35-.339 3.827-.607.327-.06.576.062.576.437V7.4c0 .37-.15.537-.524.603a228.49 228.49 0 0 1-3.986.649c-.333.081-.485.315-.485.652l.004 6.508z" fill="currentColor" /></g></symbol>';

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