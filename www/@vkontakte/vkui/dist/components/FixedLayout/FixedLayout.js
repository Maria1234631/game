"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _View = require("../View/View");

var _constants = require("../../appearance/constants");

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _utils = require("../../lib/utils");

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FixedLayout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FixedLayout, _React$Component);

  function FixedLayout() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FixedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FixedLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      position: null,
      top: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "el", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onViewTransitionStart", function (e) {
      var panelScroll = e.detail.scrolls[_this.context.panel] || 0;

      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onViewTransitionEnd", function () {
      _this.setState({
        position: null,
        top: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (element) {
      _this.el = element;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(element);
        } else {
          getRootRef.current = element;
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(FixedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.document.addEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          vertical = _this$props.vertical,
          getRootRef = _this$props.getRootRef,
          insets = _this$props.insets,
          platform = _this$props.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "style", "vertical", "getRootRef", "insets", "platform"]);
      var tabbarPadding = this.context.hasTabbar ? _constants.tabbarHeight : 0;
      var paddingBottom = vertical === 'bottom' && (0, _utils.isNumeric)(insets.bottom) ? insets.bottom + tabbarPadding : null;
      return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        ref: this.getRef,
        className: (0, _classNames.default)((0, _getClassName.default)('FixedLayout', platform), "FixedLayout--".concat(vertical), className),
        style: _objectSpread({}, style, {}, this.state, {
          paddingBottom: paddingBottom
        })
      }), _react.default.createElement("div", {
        className: "FixedLayout__in"
      }, children));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);
  return FixedLayout;
}(_react.default.Component);

(0, _defineProperty2.default)(FixedLayout, "contextTypes", {
  panel: _propTypes.default.string,
  document: _propTypes.default.any,
  hasTabbar: _propTypes.default.bool
});

var _default = (0, _withPlatform.default)((0, _withInsets.default)(FixedLayout));

exports.default = _default;
//# sourceMappingURL=FixedLayout.js.map