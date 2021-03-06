import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Icon16Search from '@vkontakte/icons/dist/16/search';
var baseClassName = getClassName('Search');
var searchId = 0;

var SearchIOS =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchIOS, _React$Component);

  function SearchIOS(props) {
    var _this;

    _classCallCheck(this, SearchIOS);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchIOS).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: ''
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange('');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", function (element) {
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

  _createClass(SearchIOS, [{
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
          inputProps = _objectWithoutProperties(_this$props, ["className", "theme", "onFocus", "onBlur", "onChange", "defaultValue", "value", "placeholder", "after", "getRef"]);

      return React.createElement("div", {
        className: classNames(baseClassName, (_classNames = {}, _defineProperty(_classNames, "Search--".concat(theme), true), _defineProperty(_classNames, 'Search--focused', this.state.focused), _defineProperty(_classNames, 'Search--has-value', this.value), _defineProperty(_classNames, 'Search--has-after', after), _classNames), className)
      }, React.createElement("div", {
        className: "Search__in"
      }, React.createElement("div", {
        className: "Search__width"
      }), React.createElement("div", {
        className: "Search__control"
      }, React.createElement("input", _extends({}, inputProps, {
        id: "search-".concat(searchId),
        ref: this.inputRef,
        type: "text",
        className: "Search__input",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.value
      })), after && React.createElement("div", {
        className: "Search__after-width"
      }, after), React.createElement("label", {
        className: "Search__placeholder",
        htmlFor: "search-".concat(searchId)
      }, React.createElement("div", {
        className: "Search__placeholder-in"
      }, React.createElement(Icon16Search, null), React.createElement("div", {
        className: "Search__placeholder-text",
        dangerouslySetInnerHTML: {
          __html: placeholder
        }
      })))), after && React.createElement("div", {
        className: "Search__after",
        onClick: this.onCancel
      }, React.createElement("div", {
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
}(React.Component);

_defineProperty(SearchIOS, "propTypes", {
  className: PropTypes.string,
  after: PropTypes.node,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.node,
  theme: PropTypes.oneOf(['header', 'default']),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
});

_defineProperty(SearchIOS, "defaultProps", {
  after: 'Отменить',
  theme: 'default',
  placeholder: 'Поиск'
});

export { SearchIOS as default };
//# sourceMappingURL=SearchIOS.js.map