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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _search = _interopRequireDefault(require("@vkontakte/icons/dist/16/search"));

var baseClassName = (0, _getClassName.default)('Search');
var searchId = 0;

var SearchIOS =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SearchIOS, _React$Component);

  function SearchIOS(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SearchIOS);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchIOS).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCancel", function () {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: ''
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange('');
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputRef", function (element) {
      var getRef = _this.props.getRef;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });
    var state = {
      showAfter: false,
      focused: false,
      placeholderOffset: null,
      afterWidth: null
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    searchId++;
    _this.state = state;
    return _this;
  }

  (0, _createClass2.default)(SearchIOS, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          after = _this$props.after,
          getRef = _this$props.getRef,
          inputProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "onFocus", "onBlur", "onChange", "defaultValue", "value", "placeholder", "after", "getRef"]);
      return _react.default.createElement("div", {
        className: (0, _classNames2.default)(baseClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "Search--".concat(theme), true), (0, _defineProperty2.default)(_classNames, 'Search--focused', this.state.focused), (0, _defineProperty2.default)(_classNames, 'Search--has-value', this.value), (0, _defineProperty2.default)(_classNames, 'Search--has-after', after), _classNames), className)
      }, _react.default.createElement("div", {
        className: "Search__in"
      }, _react.default.createElement("div", {
        className: "Search__width"
      }), _react.default.createElement("div", {
        className: "Search__control"
      }, _react.default.createElement("input", (0, _extends2.default)({}, inputProps, {
        id: "search-".concat(searchId),
        ref: this.inputRef,
        type: "text",
        className: "Search__input",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.value
      })), after && _react.default.createElement("div", {
        className: "Search__after-width"
      }, after), _react.default.createElement("label", {
        className: "Search__placeholder",
        htmlFor: "search-".concat(searchId)
      }, _react.default.createElement("div", {
        className: "Search__placeholder-in"
      }, _react.default.createElement(_search.default, null), _react.default.createElement("div", {
        className: "Search__placeholder-text",
        dangerouslySetInnerHTML: {
          __html: placeholder
        }
      })))), after && _react.default.createElement("div", {
        className: "Search__after",
        onClick: this.onCancel
      }, _react.default.createElement("div", {
        className: "Search__after-in"
      }, after))));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);
  return SearchIOS;
}(_react.default.Component);

exports.default = SearchIOS;
(0, _defineProperty2.default)(SearchIOS, "propTypes", {
  className: _propTypes.default.string,
  after: _propTypes.default.node,
  defaultValue: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  placeholder: _propTypes.default.node,
  theme: _propTypes.default.oneOf(['header', 'default']),
  getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
});
(0, _defineProperty2.default)(SearchIOS, "defaultProps", {
  after: 'Отменить',
  theme: 'default',
  placeholder: 'Поиск'
});
//# sourceMappingURL=SearchIOS.js.map