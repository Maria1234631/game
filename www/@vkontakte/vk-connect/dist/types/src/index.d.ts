import { VKConnectSubscribeHandler, VKConnectSend, VKConnectSubscribeOrUnsubscribe, VKConnectSendPromise } from './types';
/**
 * VK connect
 */
declare const vkConnect: {
    /**
     * Sends a VK Connect method to client
     *
     * @example
     * message.send('VKWebAppInit');
     *
     * @param method The VK Connect method
     * @param [props] Method props object
     */
    send: VKConnectSend;
    /**
     * Subscribe on VKWebAppEvent
     *
     * @param fn Event handler
     */
    subscribe: VKConnectSubscribeOrUnsubscribe;
    /**
     * Sends a VK Connect method to client and returns a promise of response data
     *
     * @param method The VK Connect method
     * @param [props] Method props object
     * @returns Promise of response data
     */
    sendPromise: VKConnectSendPromise;
    /**
     * Unsubscribe on VKWebAppEvent
     *
     * @param fn Event handler
     */
    unsubscribe: (fn: VKConnectSubscribeHandler) => void;
    /**
     * Checks if it is client webview
     */
    isWebView: () => boolean;
    /**
     * Checks if native client supports handler
     *
     * @param method The VK Connect method
     */
    supports: (method: string) => boolean;
};
/**
 * Type of VK Connect interface
 */
export declare type VKConnect = typeof vkConnect;
export * from './types';
export default vkConnect;
