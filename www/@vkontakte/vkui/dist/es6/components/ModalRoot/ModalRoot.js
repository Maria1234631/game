import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch, { TouchRootContext } from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { setTransformStyle } from '../../lib/styles';
import { rubber } from '../../lib/touch';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
var baseClassName = getClassName('ModalRoot');
export var TYPE_CARD = 'modal-card';
export var TYPE_PAGE = 'modal-page';

function numberInRange(number, range) {
  return number >= range[0] && number <= range[1];
}

function rangeTranslate(number) {
  return Math.max(0, Math.min(98, number));
}

var ModalRoot =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalRoot, _Component);

  function ModalRoot(props) {
    var _this;

    _classCallCheck(this, ModalRoot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalRoot).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "preventTouch", function (event) {
      if (!event) return false;

      while (event.originalEvent) {
        event = event.originalEvent;
      }

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      if (_this.state.switching) return;
      var activeModal = _this.state.activeModal || _this.state.nextModal;
      if (!activeModal) return;
      var modalState = _this.modalsState[activeModal];

      if (modalState.type === TYPE_PAGE) {
        return _this.onPageTouchMove(e, modalState);
      }

      if (modalState.type === TYPE_CARD) {
        return _this.onCardTouchMove(e, modalState);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      var activeModal = _this.state.activeModal || _this.state.nextModal;
      if (!activeModal) return;
      var modalState = _this.modalsState[activeModal];

      if (modalState.type === TYPE_PAGE) {
        return _this.onPageTouchEnd(e, modalState);
      }

      if (modalState.type === TYPE_CARD) {
        return _this.onCardTouchEnd(e, modalState);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
      var activeModal = _this.state.activeModal;

      if (activeModal && e.target.closest('.ModalPage__content')) {
        var modalState = _this.modalsState[activeModal];
        modalState.contentScrolled = true;
        clearTimeout(modalState.contentScrollStopTimeout);
        modalState.contentScrollStopTimeout = setTimeout(function () {
          if (modalState.contentScrolled) {
            modalState.contentScrolled = false;
          }
        }, 250);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "prevNextSwitchEndHandler", function () {
      _this.activeTransitions = Math.max(0, _this.activeTransitions - 1);
      if (_this.activeTransitions > 0) return;
      var activeModal = _this.state.nextModal;
      var newState = {
        prevModal: null,
        nextModal: null,
        visibleModals: [activeModal],
        activeModal: activeModal,
        animated: false,
        switching: false
      };

      if (!activeModal) {
        newState.history = [];
      }

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onMaskClick", function () {
      if (!_this.state.switching) {
        _this.triggerActiveModalClose();
      }
    });

    var _activeModal = props.activeModal;
    _this.state = {
      activeModal: null,
      prevModal: null,
      nextModal: _activeModal,
      visibleModals: _activeModal ? [_activeModal] : [],
      animated: !!_activeModal,
      history: _activeModal ? [_activeModal] : [],
      touchDown: false,
      dragging: false
    };
    _this.activeTransitions = 0;
    _this.maskElementRef = React.createRef();

    _this.initModalsState();

    return _this;
  }

  _createClass(ModalRoot, [{
    key: "initModalsState",
    value: function initModalsState() {
      this.modalsState = this.modals.reduce(function (acc, Modal) {
        var modalProps = Modal.props;
        var state = {}; // ModalPage props

        if (typeof modalProps.settlingHeight === 'number') {
          state.settlingHeight = modalProps.settlingHeight;
        }

        state.dynamicContentHeight = !!modalProps.dynamicContentHeight;
        state.onClose = Modal.props.onClose;
        state.id = Modal.props.id;
        acc[state.id] = state;
        return acc;
      }, {});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initActiveModal();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleDocumentScrolling(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$state = this.state,
          activeModal = _this$state.activeModal,
          switching = _this$state.switching;

      if (activeModal && this.modalsState[activeModal] && !switching && this.props.children !== prevProps.children) {
        var modalState = this.modalsState[activeModal];

        if (modalState && modalState.type === TYPE_PAGE && modalState.dynamicContentHeight) {
          requestAnimationFrame(function () {
            return _this2.checkPageContentHeight();
          });
        }
      }

      if (this.props.activeModal !== prevProps.activeModal && !this.state.switching) {
        var nextModal = this.props.activeModal;
        var prevModal = prevProps.activeModal;

        if (nextModal !== null && !this.modalsState[nextModal]) {
          return console.warn("[ModalRoot.componentDidUpdate] nextModal ".concat(nextModal, " not found"));
        }

        var history = _toConsumableArray(this.state.history);

        var isBack = false;

        if (nextModal === null) {
          history = [];
        } else if (history.indexOf(nextModal) !== -1) {
          history = history.splice(0, history.indexOf(nextModal) + 1);
          isBack = true;
        } else {
          history.push(nextModal);
        }

        return this.setState({
          activeModal: null,
          nextModal: nextModal,
          prevModal: prevModal,
          visibleModals: [nextModal, prevModal],
          history: history,
          isBack: isBack,
          animated: true,
          inited: false,
          switching: false
        }, function () {
          if (nextModal === null) {
            _this2.closeActiveModal();
          } else {
            _this2.initActiveModal();
          }
        });
      }

      if (this.state.switching && !prevState.switching) {
        requestAnimationFrame(function () {
          return _this2.switchPrevNext();
        });
      }

      if (!this.state.activeModal && !this.state.prevModal && !this.state.nextModal) {
        this.toggleDocumentScrolling(true);
      } else {
        this.toggleDocumentScrolling(false);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
    /**
     * Отключает скролл документа
     * @param {boolean} enabled Включен ли скроолл
     */

  }, {
    key: "toggleDocumentScrolling",
    value: function toggleDocumentScrolling(enabled) {
      if (this.documentScrolling === enabled) return;
      this.documentScrolling = enabled;

      if (enabled) {
        this.window.removeEventListener('touchmove', this.preventTouch);
      } else {
        this.window.addEventListener('touchmove', this.preventTouch, {
          passive: false
        });
      }
    }
  }, {
    key: "pickModal",
    value: function pickModal(modalId) {
      return this.document.getElementById('modal-' + modalId);
    }
    /**
     * Инициализирует модалку перед анимацией открытия
     */

  }, {
    key: "initActiveModal",
    value: function initActiveModal() {
      var activeModal = this.state.activeModal || this.state.nextModal;
      if (!activeModal) return;
      var modalElement = this.pickModal(activeModal);
      var modalState = this.modalsState[activeModal];

      if (modalElement.querySelector('.ModalPage')) {
        modalState.type = TYPE_PAGE;
      } else if (modalElement.querySelector('.ModalCard')) {
        modalState.type = TYPE_CARD;
      }

      switch (modalState.type) {
        case TYPE_PAGE:
          modalState.settlingHeight = modalState.settlingHeight || 75;
          this.initPageModal(modalState, modalElement);
          break;

        case TYPE_CARD:
          this.initCardModal(modalState, modalElement);
          break;

        default:
          console.warn("[ModalRoot.initActiveModal] modalState.type is unknown");
      }

      this.setState({
        inited: true,
        switching: true
      });
    }
  }, {
    key: "initPageModal",
    value: function initPageModal(modalState, modalElement) {
      var contentElement = modalElement.querySelector('.ModalPage__content');
      var contentHeight = contentElement.firstChild.offsetHeight;
      modalState.expandable = contentHeight > contentElement.clientHeight;
      modalState.modalElement = modalElement;
      modalState.innerElement = modalElement.querySelector('.ModalPage__in-wrap');
      modalState.headerElement = modalElement.querySelector('.ModalPage__header');
      modalState.contentElement = modalElement.querySelector('.ModalPage__content');
      modalState.footerElement = modalElement.querySelector('.ModalPage__footer');
      var collapsed;
      var translateYFrom;
      var translateY;
      var expandedRange;
      var collapsedRange;
      var hiddenRange;

      if (modalState.expandable) {
        translateYFrom = 100 - modalState.settlingHeight;
        var shiftHalf = translateYFrom / 2;
        var visiblePart = 100 - translateYFrom;
        expandedRange = [0, shiftHalf];
        collapsedRange = [shiftHalf, translateYFrom + visiblePart / 4];
        hiddenRange = [translateYFrom + visiblePart / 4, 100];
        collapsed = true;
        translateY = translateYFrom;
      } else {
        var headerHeight = modalState.headerElement.offsetHeight;
        var height = contentHeight + headerHeight;
        translateYFrom = 100 - height / modalState.innerElement.parentNode.offsetHeight * 100;
        translateY = translateYFrom;
        expandedRange = [translateY, translateY + 25];
        collapsedRange = [translateY + 25, translateY + 25];
        hiddenRange = [translateY + 25, translateY + 100];
        collapsed = false;
      }

      modalState.expandedRange = expandedRange;
      modalState.collapsedRange = collapsedRange;
      modalState.hiddenRange = hiddenRange;
      modalState.translateY = translateY;
      modalState.translateYFrom = translateYFrom;
      modalState.collapsed = collapsed;
    }
  }, {
    key: "initCardModal",
    value: function initCardModal(modalState, modalElement) {
      modalState.modalElement = modalElement;
      modalState.innerElement = modalElement.querySelector('.ModalCard__in');
      modalState.translateY = 0;
    }
  }, {
    key: "checkPageContentHeight",
    value: function checkPageContentHeight() {
      var activeModal = this.state.activeModal;
      var modalElement = this.pickModal(activeModal);

      if (modalElement) {
        var modalState = this.modalsState[activeModal];

        var prevModalState = _objectSpread({}, modalState);

        this.initPageModal(modalState, modalElement);

        var currentModalState = _objectSpread({}, modalState);

        var diff = Object.keys(currentModalState).reduce(function (acc, key) {
          if (prevModalState[key] !== currentModalState[key]) {
            acc[key] = currentModalState[key];
          }

          return acc;
        }, {});

        if (Object.keys(diff).length) {
          this.animateTranslate(modalState);
          this.animatePageHeader(modalState);
        }
      }
    }
  }, {
    key: "closeActiveModal",
    value: function closeActiveModal() {
      var prevModal = this.state.prevModal;
      if (!prevModal) return console.warn("[ModalRoot.closeActiveModal] prevModal is ".concat(prevModal));
      var prevModalState = this.modalsState[prevModal];
      this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
      this.animateTranslate(prevModalState, 100);
      this.setMaskOpacity(prevModalState, 0);
    }
  }, {
    key: "onPageTouchMove",
    value: function onPageTouchMove(event, modalState) {
      var shiftY = event.shiftY,
          startT = event.startT,
          originalEvent = event.originalEvent;

      if (!event.isY) {
        if (originalEvent.target.closest('.ModalPage')) {
          originalEvent.preventDefault();
        }

        return;
      }

      if (!originalEvent.target.closest('.ModalPage__in')) {
        return originalEvent.preventDefault();
      }

      originalEvent.stopPropagation();
      var expandable = modalState.expandable,
          contentScrolled = modalState.contentScrolled,
          collapsed = modalState.collapsed,
          expanded = modalState.expanded;

      if (!this.state.touchDown) {
        modalState.touchStartTime = startT;
        modalState.touchStartContentScrollTop = modalState.contentElement.scrollTop;
        this.setState({
          touchDown: true
        });
      }

      if (contentScrolled) return;

      if (modalState.touchMovePositive === null) {
        modalState.touchMovePositive = shiftY > 0;
      }

      if (!modalState.expandable || collapsed || expanded && modalState.touchMovePositive && modalState.touchStartContentScrollTop === 0 || originalEvent.target.closest('.ModalPage__header')) {
        originalEvent.preventDefault();
        if (!expandable && shiftY < 0) return;
        !this.state.dragging && this.setState({
          dragging: true
        });
        var shiftYPercent = shiftY / this.window.innerHeight * 100;
        var shiftYCurrent = rubber(shiftYPercent, 72, 0.8, IS_PLATFORM_ANDROID);
        modalState.touchShiftYPercent = shiftYPercent;
        modalState.translateYCurrent = rangeTranslate(modalState.translateY + shiftYCurrent);
        this.animateTranslate(modalState, modalState.translateYCurrent);
        this.setMaskOpacity(modalState);
      }
    }
  }, {
    key: "onCardTouchMove",
    value: function onCardTouchMove(event, modalState) {
      var originalEvent = event.originalEvent,
          shiftY = event.shiftY,
          startT = event.startT;

      if (originalEvent.target.closest('.ModalCard__container')) {
        if (!this.state.touchDown) {
          modalState.touchStartTime = startT;
          this.setState({
            touchDown: true,
            dragging: true
          });
        }

        var shiftYPercent = shiftY / modalState.innerElement.offsetHeight * 100;
        var shiftYCurrent = rubber(shiftYPercent, 72, 1.2, IS_PLATFORM_ANDROID);
        modalState.touchShiftYPercent = shiftYPercent;
        modalState.translateYCurrent = Math.max(0, modalState.translateY + shiftYCurrent);
        this.animateTranslate(modalState, modalState.translateYCurrent);
        this.setMaskOpacity(modalState);
      }
    }
  }, {
    key: "onPageTouchEnd",
    value: function onPageTouchEnd(event, modalState) {
      var _this3 = this;

      var startY = event.startY,
          shiftY = event.shiftY;
      modalState.contentScrolled = false;
      modalState.touchMovePositive = null;
      var next;

      if (this.state.dragging) {
        var shiftYEndPercent = (startY + shiftY) / this.window.innerHeight * 100;
        var translateY = modalState.translateYCurrent;
        var expectTranslateY = translateY / (new Date() - modalState.touchStartTime) * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
        translateY = rangeTranslate(translateY + expectTranslateY);

        if (numberInRange(translateY, modalState.expandedRange)) {
          translateY = modalState.expandedRange[0];
        } else if (numberInRange(translateY, modalState.collapsedRange)) {
          translateY = modalState.translateYFrom;
        } else if (numberInRange(translateY, modalState.hiddenRange)) {
          translateY = 100;
        } else {
          translateY = modalState.translateYFrom;
        }

        if (translateY !== 100 && shiftYEndPercent >= 75) {
          translateY = 100;
        }

        modalState.translateY = translateY;
        modalState.translateYCurrent = translateY;
        modalState.collapsed = translateY > 0 && translateY < shiftYEndPercent;
        modalState.expanded = translateY === 0;
        modalState.hidden = translateY === 100;

        if (modalState.hidden) {
          modalState.onClose();
        }

        next = function next() {
          !modalState.hidden && _this3.animateTranslate(modalState);

          _this3.setMaskOpacity(modalState);
        };
      }

      this.setState({
        touchDown: false,
        dragging: false
      }, next);
    }
  }, {
    key: "onCardTouchEnd",
    value: function onCardTouchEnd(event, modalState) {
      var _this4 = this;

      var next;

      if (this.state.dragging) {
        var translateY = modalState.translateYCurrent;
        var expectTranslateY = translateY / (new Date() - modalState.touchStartTime) * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
        translateY = Math.max(0, translateY + expectTranslateY);

        if (translateY >= 30) {
          translateY = 100;
        } else {
          translateY = 0;
        }

        modalState.translateY = translateY;
        modalState.hidden = translateY === 100;

        if (modalState.hidden) {
          modalState.onClose();
        }

        next = function next() {
          !modalState.hidden && _this4.animateTranslate(modalState);

          _this4.setMaskOpacity(modalState);
        };
      }

      this.setState({
        touchDown: false,
        dragging: false
      }, next);
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(modalState, eventHandler) {
      var eventName = transitionEvents.transitionEndEventName;

      var onceHandler = function onceHandler() {
        modalState.innerElement.removeEventListener(eventName, onceHandler);
        eventHandler();
      };

      modalState.innerElement.addEventListener(eventName, onceHandler);
    }
  }, {
    key: "switchPrevNext",
    value: function switchPrevNext() {
      var _this5 = this;

      var _this$state2 = this.state,
          prevModal = _this$state2.prevModal,
          nextModal = _this$state2.nextModal;
      var prevModalState = this.modalsState[prevModal];
      var nextModalState = this.modalsState[nextModal];

      if (!prevModalState && !nextModalState) {
        return console.warn("[ModalRoot.switchPrevNext] prevModal is ".concat(prevModal, ", nextModal is ").concat(nextModal));
      }

      var prevIsPage = !!prevModalState && prevModalState.type === TYPE_PAGE;
      var prevIsCard = !!prevModalState && prevModalState.type === TYPE_CARD;
      var nextIsPage = !!nextModalState && nextModalState.type === TYPE_PAGE;
      var nextIsCard = !!nextModalState && nextModalState.type === TYPE_CARD; // Ждём полного скрытия предыдущей модалки

      if (prevModalState && (nextIsCard || prevIsCard && nextIsPage)) {
        this.waitTransitionFinish(prevModalState, function () {
          _this5.activeTransitions += 1;

          _this5.waitTransitionFinish(nextModalState, _this5.prevNextSwitchEndHandler);

          _this5.animateTranslate(nextModalState);
        });
        return this.animateTranslate(prevModalState, 100);
      }

      if (prevModalState && nextIsPage) {
        this.activeTransitions += 1;
        this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);

        if (prevIsPage && prevModalState.translateY <= nextModalState.translateYFrom && !this.state.isBack) {
          this.animateTranslate(prevModalState, nextModalState.translateYFrom + 10);
        } else {
          this.animateTranslate(prevModalState, 100);
        }
      }

      this.activeTransitions += 1;
      this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
      this.animateTranslate(nextModalState);
    }
  }, {
    key: "animateTranslate",

    /**
     * Анимирует сдивг модалки
     *
     * @param {object} modalState
     * @param {number} currentPercent
     */
    value: function animateTranslate(modalState) {
      var currentPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (currentPercent === null) {
        currentPercent = modalState.translateY;
      }

      var frameId = "animateTranslateFrame".concat(modalState.id);
      cancelAnimationFrame(this[frameId]);
      this[frameId] = requestAnimationFrame(function () {
        setTransformStyle(modalState.innerElement, "translateY(".concat(currentPercent, "%)"));

        if (modalState.type === TYPE_PAGE && modalState.footerElement) {
          var footerHeight = modalState.footerElement.offsetHeight;
          var factor = modalState.innerElement.offsetHeight * (currentPercent / 100);
          setTransformStyle(modalState.footerElement, "translateY(calc(".concat(footerHeight, "px * -").concat(factor / footerHeight, "))"));
        }
      });

      if (modalState.type === TYPE_PAGE && modalState.expandable) {
        this.animatePageHeader(modalState, currentPercent);
      }
    }
    /**
     * Анимирует тень шапки
     *
     * @param {object} modalState
     * @param {number} currentPercent
     */

  }, {
    key: "animatePageHeader",
    value: function animatePageHeader(modalState, currentPercent) {
      var headerOpenPercent = currentPercent < 15 ? Math.max(0, 15 - currentPercent) / 15 : 0;
      requestAnimationFrame(function () {
        var headerShadow = modalState.headerElement.querySelector('.ModalPageHeader__shadow');

        if (headerShadow) {
          headerShadow.style.opacity = headerOpenPercent;
        }
      });
    }
    /**
     * Устанавливает прозрачность для полупрозрачной подложки
     *
     * @param {object} modalState
     * @param {number|null} forceOpacity Форсирует установку прозрачности в обход истории
     */

  }, {
    key: "setMaskOpacity",
    value: function setMaskOpacity(modalState) {
      var _this6 = this;

      var forceOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (forceOpacity === null && this.state.history[0] !== modalState.id) return;
      cancelAnimationFrame(this.maskAnimationFrame);
      this.maskAnimationFrame = requestAnimationFrame(function () {
        if (_this6.maskElementRef.current) {
          var translateY = modalState.translateY,
              translateYCurrent = modalState.translateYCurrent;
          var opacity = forceOpacity === null ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0 : forceOpacity;
          _this6.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, opacity));
        }
      });
    }
    /**
     * Закрывает текущую модалку
     */

  }, {
    key: "triggerActiveModalClose",
    value: function triggerActiveModalClose() {
      var activeModalState = this.modalsState[this.state.activeModal];

      if (activeModalState) {
        activeModalState.onClose();
      }
    }
    /**
     * По клику на полупрозрачный черный фон нужно закрыть текущую модалку
     */

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$state3 = this.state,
          prevModal = _this$state3.prevModal,
          activeModal = _this$state3.activeModal,
          nextModal = _this$state3.nextModal,
          visibleModals = _this$state3.visibleModals,
          animated = _this$state3.animated,
          touchDown = _this$state3.touchDown,
          dragging = _this$state3.dragging,
          switching = _this$state3.switching;
      if (!activeModal && !prevModal && !nextModal && !animated) return null;
      return React.createElement(TouchRootContext.Provider, {
        value: true
      }, React.createElement(Touch, {
        className: classNames(baseClassName, {
          'ModalRoot--vkapps': this.webviewType === 'vkapps',
          'ModalRoot--touched': touchDown,
          'ModalRoot--switching': switching
        }),
        onMove: this.onTouchMove,
        onEnd: this.onTouchEnd,
        onScroll: this.onScroll
      }, React.createElement("div", {
        className: "ModalRoot__mask",
        onClick: this.onMaskClick,
        ref: this.maskElementRef
      }), React.createElement("div", {
        className: "ModalRoot__viewport"
      }, this.modals.map(function (Modal) {
        var modalId = Modal.props.id;
        if (visibleModals.indexOf(Modal.props.id) === -1) return null;
        var modalState = _this7.modalsState[modalId];
        var isPage = modalState.type === TYPE_PAGE;
        var key = 'modal-' + modalId;
        return React.createElement("div", {
          key: key,
          id: key,
          className: classNames('ModalRoot__modal', {
            'ModalRoot__modal--active': modalId === activeModal,
            'ModalRoot__modal--prev': modalId === prevModal,
            'ModalRoot__modal--next': modalId === nextModal,
            'ModalRoot__modal--dragging': dragging,
            'ModalRoot__modal--expandable': isPage && modalState.expandable,
            'ModalRoot__modal--expanded': isPage && modalState.expanded,
            'ModalRoot__modal--collapsed': isPage && modalState.collapsed
          })
        }, Modal);
      }))));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "webviewType",
    get: function get() {
      return this.context.webviewType || 'vkapps';
    }
  }, {
    key: "modals",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return ModalRoot;
}(Component);

_defineProperty(ModalRoot, "propTypes", {
  activeModal: PropTypes.string,
  children: PropTypes.node
});

_defineProperty(ModalRoot, "contextTypes", {
  window: PropTypes.any,
  document: PropTypes.any,
  webviewType: PropTypes.oneOf(['vkapps', 'internal'])
});

export default ModalRoot;
//# sourceMappingURL=ModalRoot.js.map