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

var viewBox = '0 0 28 28';
var id = 'camera_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="camera_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16.608 4c1.033 0 1.764.336 2.403 1.09l.805 1c.178.222.688.422 1.184.422h.5c2.644 0 4.5 2.052 4.5 5.02v7.448c0 2.657-2.547 5.02-5.5 5.02h-13C4.547 24 2 21.637 2 18.98v-7.448c0-2.968 1.856-5.02 4.5-5.02H7c.496 0 1.006-.2 1.184-.421.203-.252.786-.978.805-1C9.628 4.335 10.36 4 11.392 4h5.216zm0 2h-5.216c-.447 0-.62.08-.876.383l-.775.963C9.146 8.084 8.057 8.512 7 8.512h-.5c-1.492 0-2.5 1.114-2.5 3.02v7.448C4 20.498 5.62 22 7.5 22h13c1.88 0 3.5-1.502 3.5-3.02v-7.448c0-1.906-1.008-3.02-2.5-3.02H21c-1.057 0-2.146-.428-2.741-1.166l-.775-.963c-.257-.304-.429-.383-.876-.383zM9 14.75a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;