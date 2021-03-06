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
var id = 'mention_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="mention_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28.271 49.412c-4.065 0-7.624-.818-10.678-2.453-3.053-1.635-5.415-3.97-7.086-7.005C8.836 36.919 8 33.36 8 29.276v-1.544c0-4.065.858-7.67 2.575-10.813 1.716-3.144 4.114-5.583 7.195-7.317C20.85 7.867 24.378 7 28.352 7h.217c3.758 0 7.114.786 10.068 2.358 2.954 1.572 5.253 3.735 6.897 6.49C47.178 18.603 48 21.698 48 25.13v1.382c0 2.385-.384 4.48-1.152 6.287-.768 1.807-1.838 3.203-3.211 4.187-1.373.985-2.927 1.477-4.661 1.477-1.048 0-2.015-.162-2.9-.487-.885-.326-1.608-.777-2.168-1.355-.56-.579-.894-1.238-1.003-1.979h-.244c-.162.615-.528 1.22-1.097 1.816-.57.596-1.279 1.08-2.128 1.45-.849.37-1.752.555-2.71.555-1.409 0-2.637-.343-3.685-1.03-1.048-.686-1.861-1.689-2.44-3.008-.578-1.318-.867-2.89-.867-4.715v-2.412c0-1.752.29-3.279.868-4.58.578-1.3 1.409-2.303 2.493-3.008 1.084-.705 2.367-1.057 3.848-1.057 1.337 0 2.493.348 3.469 1.043.976.696 1.617 1.523 1.924 2.48h.19v-1.22c0-.56.14-.993.42-1.3.28-.307.673-.46 1.179-.46s.898.157 1.179.473c.28.317.42.746.42 1.288v11.165c0 1.156.343 2.042 1.03 2.656.686.614 1.571.921 2.655.921 1.066 0 2.01-.37 2.832-1.11.822-.742 1.464-1.826 1.924-3.253.461-1.427.691-3.126.691-5.095v-1.003c0-2.908-.686-5.532-2.06-7.872-1.372-2.34-3.292-4.174-5.758-5.502-2.466-1.327-5.29-1.991-8.469-1.991h-.217c-3.342 0-6.31.75-8.902 2.249-2.593 1.5-4.612 3.613-6.057 6.341-1.445 2.729-2.168 5.872-2.168 9.431v1.22c0 3.54.709 6.626 2.127 9.255 1.419 2.628 3.415 4.652 5.99 6.07 2.574 1.418 5.55 2.127 8.929 2.127h.217c1.373 0 3.152-.162 5.339-.487.903-.109 1.418-.172 1.544-.19.398-.018.732.086 1.003.312.271.225.406.528.406.907 0 .416-.126.768-.379 1.057-.253.29-.614.488-1.084.597-1.752.433-4.029.65-6.83.65h-.216zm-5.203-20.108c0 2.023.415 3.568 1.246 4.634.831 1.066 1.988 1.599 3.47 1.599 1.445 0 2.592-.506 3.44-1.518.85-1.012 1.275-2.475 1.275-4.39v-2.44c0-1.716-.43-3.111-1.288-4.186-.858-1.075-2.019-1.613-3.482-1.613-1.445 0-2.584.538-3.415 1.613-.83 1.075-1.246 2.552-1.246 4.43v1.87z" fill="currentColor" /></g></symbol>';

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