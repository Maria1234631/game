import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withPlatform from '../../hoc/withPlatform';
import FixedLayout from '../FixedLayout/FixedLayout';
import Touch from '../Touch/Touch';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import { canUseDOM } from '../../lib/dom';
import transitionEvents from '../../lib/transitionEvents';
import { ANDROID } from '../../lib/platform';
import { rubber } from '../../lib/touch';

var Snackbar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Snackbar, _PureComponent);

  function Snackbar(props) {
    var _this;

    _classCallCheck(this, Snackbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snackbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "innerEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "bodyElRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "shiftXPercent", void 0);

    _defineProperty(_assertThisInitialized(_this), "shiftXCurrent", void 0);

    _defineProperty(_assertThisInitialized(_this), "touchStartTime", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationFrame", void 0);

    _defineProperty(_assertThisInitialized(_this), "setCloseTimeout", function () {
      if (canUseDOM) {
        _this.closeTimeout = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearCloseTimeout", function () {
      clearTimeout(_this.closeTimeout);
    });

    _defineProperty(_assertThisInitialized(_this), "onActionClick", function (e) {
      _this.close();

      if (_this.props.action && typeof _this.props.onActionClick === 'function') {
        _this.props.onActionClick(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getInnerRef", function (el) {
      return _this.innerEl = el;
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function () {
      _this.clearCloseTimeout();
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMoveX", function (event) {
      var shiftX = event.shiftX,
          startT = event.startT,
          originalEvent = event.originalEvent;
      originalEvent.preventDefault();

      if (!_this.state.touched) {
        _this.setState({
          touched: true
        });
      }

      _this.shiftXPercent = shiftX / _this.window.innerWidth * 100;
      _this.shiftXCurrent = rubber(_this.shiftXPercent, 72, 1.2, _this.props.platform === ANDROID);
      _this.touchStartTime = startT;

      _this.setBodyTransform(_this.shiftXCurrent);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
      var newState = {
        touched: false
      };
      var callback;

      if (_this.state.touched) {
        var shiftXReal = _this.shiftXCurrent;
        var expectTranslateY = shiftXReal / (Date.now() - _this.touchStartTime) * 240 * 0.6 * (_this.shiftXPercent < 0 ? -1 : 1);
        shiftXReal = shiftXReal + expectTranslateY;

        if (shiftXReal >= 50) {
          _this.clearCloseTimeout();

          _this.waitTransitionFinish(_this.bodyElRef.current, function () {
            _this.props.onClose();
          });

          _this.setBodyTransform(120);
        } else {
          callback = function callback() {
            _this.setCloseTimeout();

            _this.setBodyTransform(0);
          };
        }
      }

      _this.setState(newState, callback);
    });

    _this.state = {
      closing: false,
      touched: false
    };
    _this.bodyElRef = React.createRef();
    _this.shiftXPercent = 0;
    _this.shiftXCurrent = 0;
    _this.touchStartTime = 0;
    return _this;
  }

  _createClass(Snackbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCloseTimeout();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimeout();
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      this.setState({
        closing: true
      });
      this.waitTransitionFinish(this.innerEl, function () {
        _this2.props.onClose();
      });
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(element, eventHandler) {
      if (element) {
        var eventName = transitionEvents.transitionEndEventName;
        element.removeEventListener(eventName, eventHandler);
        element.addEventListener(eventName, eventHandler);
      }
    }
  }, {
    key: "setBodyTransform",
    value: function setBodyTransform(percent) {
      var _this3 = this;

      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = requestAnimationFrame(function () {
        _this3.bodyElRef.current.style.transform = "translate3d(".concat(percent, "%, 0, 0)");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          platform = _this$props.platform,
          layout = _this$props.layout,
          action = _this$props.action,
          before = _this$props.before,
          after = _this$props.after;
      var resolvedLayout = after ? 'vertical' : layout;
      return React.createElement(FixedLayout, {
        vertical: "bottom",
        className: classNames(getClassname('Snackbar', platform), className, "Snackbar--l-".concat(resolvedLayout), {
          'Snackbar--closing': this.state.closing,
          'Snackbar--touched': this.state.touched
        })
      }, React.createElement(Touch, {
        className: "Snackbar__in",
        getRootRef: this.getInnerRef,
        onStart: this.onTouchStart,
        onMoveX: this.onTouchMoveX,
        onEnd: this.onTouchEnd
      }, React.createElement("div", {
        className: "Snackbar__body",
        ref: this.bodyElRef
      }, before && React.createElement("div", {
        className: "Snackbar__before"
      }, before), React.createElement("div", {
        className: "Snackbar__content"
      }, React.createElement("div", {
        className: "Snackbar__content-text"
      }, children), action && React.createElement("button", {
        className: "Snackbar__action",
        onClick: this.onActionClick
      }, React.createElement("div", {
        className: "Snackbar__action-self"
      }, action))), after && React.createElement("div", {
        className: "Snackbar__after"
      }, after))));
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }]);

  return Snackbar;
}(PureComponent);

_defineProperty(Snackbar, "defaultProps", {
  duration: 4000
});

_defineProperty(Snackbar, "contextTypes", {
  window: PropTypes.any,
  document: PropTypes.any
});

export default withPlatform(Snackbar);
//# sourceMappingURL=Snackbar.js.map