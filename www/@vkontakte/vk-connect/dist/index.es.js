/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var version = "1.7.2";

/**
 * Creates counter interface
 */
var createCounter = function () { return ({
    current: 0,
    next: function () {
        this.current += 1;
        return this.current;
    }
}); };
/**
 * Creates interface for resolving request promises by request id's (or not)
 */
var createRequestResolver = function () {
    var counter = createCounter();
    var promiseControllers = {};
    return {
        /**
         * Adds new controller with resolve/reject methods
         * @param resolve Resolve function
         * @param reject Reject function
         * @returns New request id of the added controller
         */
        add: function (controller) {
            var id = counter.next();
            promiseControllers[id] = controller;
            return id;
        },
        /**
         * Resolves/rejects an added promise by request id and the `isSuccess`
         * predicate
         * @param requestId Request ID
         * @param data Data to pass to the resolve- or reject-function.
         * @param isSuccess Predicate to select the desired function
         */
        resolve: function (requestId, data, isSuccess) {
            var requestPromise = promiseControllers[requestId];
            if (requestPromise) {
                if (isSuccess(data)) {
                    requestPromise.resolve(data);
                }
                else {
                    requestPromise.reject(data);
                }
                promiseControllers[requestId] = null;
            }
        }
    };
};
/**
 * Returns send function that returns promises
 * @param send VK Connect send method
 * @param subscribe VK Connect subscribe method
 */
var promisifySend = function (send, subscribe) {
    var requestResolver = createRequestResolver();
    // Subscribe to receive a data
    subscribe(function (event) {
        if (!event.detail || !event.detail.data) {
            return;
        }
        var _a = event.detail.data, requestId = _a.request_id, data = __rest(_a, ["request_id"]);
        if (requestId) {
            requestResolver.resolve(requestId, data, function (data) { return !('error_type' in data); });
        }
    });
    return function (method, props) {
        return new Promise(function (resolve, reject) {
            var requestId = requestResolver.add({ resolve: resolve, reject: reject });
            send(method, __assign(__assign({}, props), { request_id: requestId }));
        });
    };
};

/**
 * Methods supported on the desktop
 */
var DESKTOP_METHODS = [
    'VKWebAppInit',
    'VKWebAppGetCommunityAuthToken',
    'VKWebAppAddToCommunity',
    'VKWebAppGetUserInfo',
    'VKWebAppSetLocation',
    'VKWebAppGetClientVersion',
    'VKWebAppGetPhoneNumber',
    'VKWebAppGetEmail',
    'VKWebAppGetGeodata',
    'VKWebAppSetTitle',
    'VKWebAppGetAuthToken',
    'VKWebAppCallAPIMethod',
    'VKWebAppJoinGroup',
    'VKWebAppAllowMessagesFromGroup',
    'VKWebAppDenyNotifications',
    'VKWebAppAllowNotifications',
    'VKWebAppOpenPayForm',
    'VKWebAppOpenApp',
    'VKWebAppShare',
    'VKWebAppShowWallPostBox',
    'VKWebAppScroll',
    'VKWebAppResizeWindow',
    'VKWebAppShowOrderBox',
    'VKWebAppShowLeaderBoardBox',
    'VKWebAppShowInviteBox',
    'VKWebAppShowRequestBox',
    'VKWebAppAddToFavorites',
    'VKWebAppShowCommunityWidgetPreviewBox',
];
/**
 * Creates the CustomEvent ponyfill. VK clients use the CustomEvents to transfer data.
 */
var createCustomEventClass = function () {
    function CustomEvent(typeArg, eventInitDict) {
        var params = eventInitDict || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(typeArg, !!params.bubbles, !!params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = Event.prototype;
    return CustomEvent;
};
/**
 * List of functions that subscribed on events
 */
var subscribers = [];
var webFrameId = null;
var isBrowser = typeof window !== 'undefined';
var isIOSClientWebView = isBrowser &&
    window.webkit &&
    window.webkit.messageHandlers !== undefined &&
    window.webkit.messageHandlers.VKWebAppClose !== undefined;
var androidBridge = isBrowser ? window.AndroidBridge : undefined;
var iosBridge = isIOSClientWebView ? window.webkit.messageHandlers : undefined;
var isWeb = isBrowser && !androidBridge && !iosBridge;
var eventType = isWeb ? 'message' : 'VKWebAppEvent';
if (isBrowser) {
    // Polyfill
    if (!window.CustomEvent) {
        window.CustomEvent = createCustomEventClass();
    }
    window.addEventListener(eventType, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _subscribers = __spreadArrays(subscribers);
        if (isWeb && args[0] && 'data' in args[0]) {
            var _a = args[0].data, _ = _a.webFrameId, connectVersion_1 = _a.connectVersion, data_1 = __rest(_a, ["webFrameId", "connectVersion"]); // FIXME
            if (data_1.type && data_1.type === 'VKWebAppSettings') {
                webFrameId = data_1.frameId;
            }
            else {
                _subscribers.forEach(function (fn) {
                    fn({ detail: data_1 });
                });
            }
        }
        else {
            _subscribers.forEach(function (fn) {
                fn.apply(null, args); // FIXME
            });
        }
    });
}
/**
 * The send function
 */
var send = function (method, props) {
    if (props === void 0) { props = {}; }
    if (androidBridge && typeof androidBridge[method] === 'function') {
        androidBridge[method](JSON.stringify(props));
    }
    if (iosBridge && iosBridge[method] && typeof iosBridge[method].postMessage === 'function') {
        iosBridge[method].postMessage(props);
    }
    if (isWeb) {
        parent.postMessage({
            handler: method,
            params: props,
            type: 'vk-connect',
            webFrameId: webFrameId,
            connectVersion: version
        }, '*');
    }
};
/**
 * The subscribe function
 */
var subscribe = function (fn) {
    subscribers.push(fn);
};
/**
 * The send function that returns promise
 */
var sendPromise = promisifySend(send, subscribe);
/**
 * VK connect
 */
var vkConnect = {
    /**
     * Sends a VK Connect method to client
     *
     * @example
     * message.send('VKWebAppInit');
     *
     * @param method The VK Connect method
     * @param [props] Method props object
     */
    send: send,
    /**
     * Subscribe on VKWebAppEvent
     *
     * @param fn Event handler
     */
    subscribe: subscribe,
    /**
     * Sends a VK Connect method to client and returns a promise of response data
     *
     * @param method The VK Connect method
     * @param [props] Method props object
     * @returns Promise of response data
     */
    sendPromise: sendPromise,
    /**
     * Unsubscribe on VKWebAppEvent
     *
     * @param fn Event handler
     */
    unsubscribe: function (fn) {
        var index = subscribers.indexOf(fn);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
    },
    /**
     * Checks if it is client webview
     */
    isWebView: function () {
        return !!(androidBridge || iosBridge);
    },
    /**
     * Checks if native client supports handler
     *
     * @param method The VK Connect method
     */
    supports: function (method) {
        // Android support check
        if (androidBridge && typeof androidBridge[method] === 'function') {
            return true;
        }
        // iOS support check
        if (iosBridge && iosBridge[method] && typeof iosBridge[method].postMessage === 'function') {
            return true;
        }
        // Web support check
        if (!iosBridge && !androidBridge && DESKTOP_METHODS.includes(method)) {
            return true;
        }
        return false;
    }
};
// UMD exports
if (typeof exports !== 'object' || typeof module === 'undefined') {
    var root = null;
    if (typeof window !== 'undefined') {
        root = window;
    }
    else if (typeof global !== 'undefined') {
        root = global;
    }
    else if (typeof self !== 'undefined') {
        root = self;
    }
    if (root) {
        root.vkConnect = vkConnect;
        // Backward compatibility
        root.vkuiConnect = vkConnect;
    }
}

export default vkConnect;
