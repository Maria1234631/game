/** Type of global object with VK Connect methods in Android app WebView */
export declare type AndroidBridge = Record<RequestMethodName, (serializedData: string) => void>;
/** Type of global object with VK Connect methods in iOS app WebView */
export declare type IOSBridge = Record<RequestMethodName, {
    postMessage?: (data: any) => void;
}>;
/** Type of the Personal Card */
export declare type PersonalCardType = 'phone' | 'email' | 'address';
/**
 * Type of user info object
 */
export declare type UserInfo = {
    /** User id */
    id: number;
    /** User name */
    first_name: string;
    /** User surname */
    last_name: string;
    /** User sex: 0 - not specified, 1 - female, 2 - male */
    sex: 0 | 1 | 2;
    /** User's city */
    city: {
        /** City ID */
        id: number;
        /** City title */
        title: string;
    };
    /** User's country */
    country: {
        /** Country ID */
        id: number;
        /** Country  title */
        title: string;
    };
    /**
     * Date of Birth. It is returned in the format D.M.YYYY or D.M (if the
     * year of birth is hidden). If the date of birth is hidden entirely,
     * the field is not in the response.
     */
    bdate?: string;
    /**
     * URL of the square user's photo with 100px width.
     * https://vk.com/images/camera_100.png will be returned if the photo
     * is not set.
     */
    photo_100: string;
    /**
     * URL of the square user's photo with 200px width.
     * https://vk.com/images/camera_200.png will be returned if the photo
     * is not set.
     */
    photo_200: string;
    /**
     * URL of the square user's photo with maximum size.
     * https://vk.com/images/camera_400.png will be returned if the photo
     * is not set.
     */
    photo_max_orig?: string;
    /** User's timezone */
    timezone: number;
};
/**
 * User's contact data from the Personal Card from
 */
export declare type PersonalCardData = {
    phone?: string;
    email?: string;
    address?: {
        country?: {
            id: number;
            name: string;
        };
        city?: {
            id: number;
            name: string;
        };
        specified_address?: string;
        postal_code?: string;
    };
};
/**
 * Map of VK Pay request params
 */
export declare type VKPayActionParamsMap = {
    /** Payment with a given amount to a user */
    'pay-to-user': {
        /** The amount of payment in rubles. The minimum value is 1 */
        amount?: number;
        /** User ID */
        user_id: number;
        /** Payment description */
        description?: string;
    };
    /** Payment with a given amount to a community */
    'pay-to-group': {
        /** The amount of payment in rubles. The minimum value is 1 */
        amount: number;
        /** Community ID */
        group_id: number;
        /** Payment description */
        description?: string;
        /** Dictionary with arbitrary parameters */
        data?: string;
    };
    /** Transferring an arbitrary amount to a user */
    'transfer-to-user': {
        user_id: number;
    };
    /** Transferring an arbitrary amount to a community */
    'transfer-to-group': {
        group_id: number;
    };
    /**
     * Payment in favor of the merchant
     * @see {@link https://vk.com/@devpay-vk-pay-how-to}
     */
    'pay-to-service': {
        /**
         * Amount of payment. The minimum value is 1. The amount field is
         * involved in the formation of merchant_data for the signature of
         * the seller.
         */
        amount: number | string;
        /**
         * Description of the payment for user. The text will be shown in
         * payment dialog
         */
        description: string;
        /**
         * Merchant ID. This is your ID in the payment system, obtained after
         * the conclusion of the contract along with the seller’s private key
         */
        merchant_id: number;
        /** Version of the payment form */
        version: number;
        /** The signature of the VK app that caused the payment */
        sign: string;
        /** Service data */
        data: {
            /** Currency. Only RUB is currently supported */
            currency: 'RUB';
            /** Base64-string of data for the signature of the seller */
            merchant_data: string;
            /** SHA-1 seller sign */
            merchant_sign: string;
            /** Sales order id */
            order_id: string | number;
            /** Timestamp */
            ts: number;
            /** Cashback data */
            cashback?: {
                /** Cashback timestamp */
                pay_time: number;
                /** Cashback size */
                amount?: number;
                /** Percentage cashback size */
                amount_percent?: number;
            };
        };
    };
};
/**
 * Possible types VK Pay operations
 */
export declare type VKPayActionType = keyof VKPayActionParamsMap;
/**
 * VK Pay request props
 */
export declare type VKPayProps<ActionType extends VKPayActionType> = {
    app_id: number;
    action: ActionType;
    params: VKPayActionParamsMap[ActionType];
};
/**
 * Appearance type
 */
export declare type AppearanceType = 'light' | 'dark';
/**
 * Application color scheme type
 */
export declare type AppearanceSchemeType = 'client_light' | 'client_dark';
/**
 * Vibration type for Taptic Engine
 */
export declare type TapticVibrationPowerType = 'light' | 'medium' | 'heavy';
/**
 * Notification type for Taptic Engine
 */
export declare type TapticNotificationType = 'error' | 'success' | 'warning';
/** Status of showing order box */
export declare type OrderBoxShowingStatus = 'cancel' | 'success' | 'fail';
/**
 * Widget type
 */
export declare type WidgetType = 'text' | 'list' | 'table' | 'tiles' | 'compact_list' | 'cover_list' | 'match' | 'matches';
/**
 * Output data from code reader
 */
export declare type CodeReaderOutput = {
    /** Read QR code data */
    code_data: string;
};
/**
 * Selected contact data
 */
export declare type SelectedContact = {
    phone: string;
    first_name: string;
    last_name: string;
};
/**
 * Request result data
 */
export declare type RequestResult = {
    /** Operation success */
    success: boolean;
    /** `requestKey` from request */
    requestKey: string;
};
/**
 * Result data of transaction
 */
export declare type TransactionResult = {
    /** Payment (true — successful, false — unsuccessful). */
    status: boolean;
    /** Payment transaction identifier (for `status=true`). */
    transaction_id: string;
    /** Payment amount */
    amount: string;
    /** Additional information of the seller */
    extra?: string | null;
};
/**
 * Update config data
 */
export declare type UpdateConfigData = {
    app: 'vkclient' | 'vkme';
    app_id: string;
    appearance: AppearanceType;
    scheme: AppearanceSchemeType;
    insets: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    start_time: number;
};
export declare type WidgetPreviewRequestOptions = {
    /** Widget type */
    type: WidgetType;
    /** Community ID */
    group_id: number;
    /**
     * Widget code
     * @see {@link https://vk.com/dev/execute | Execute method}
     */
    code: string;
};
/**
 * App close status
 */
export declare type AppCloseStatus = 'success' | 'failed';
export declare type CommunityTokenRequestOptions = {
    app_id: number;
    group_id: number;
    scope: string;
};
export declare type MessageRequestOptions = {
    /** Receiver ID (user, community, chat) */
    peer_id: number;
    /** Message text */
    message: string;
    /** List of attaches */
    attachment?: string;
    /** Geographic latitude of a point, specified in degrees (from -90 to 90). */
    lat?: number;
    /** Geographic longitude of a point, specified in degrees (from -180 to 180). */
    lng?: number;
};
export declare type OrderRequestOptions = {
    /** Always `item` */
    type: 'item';
    /**
     * Name of product. Will be transmitted in the notification of receipt
     * of product information
     */
    item: string;
};
export declare type RequestForRequestOptions = {
    /** User Id */
    uid: number;
    /** Request test */
    message: string;
    /**
     * Optional parameter. Custom string to track conversion. It is passed
     * in the application launch parameters in case of launch from the
     * request.
     */
    requestKey?: string;
};
export declare type WallPostRequestOptions = {
    /**
     * ID of the user or community on whose wall the post is to be
     * published
     */
    owner_id?: number;
    /**
     * `true` - the post posted on behalf of the community will have a
     * signature added (the name of the user who posted the post)
     * `false` - the signature will not be added. The parameter is taken
     * into account only when publishing on the community wall and
     * specifying the from_group parameter. By default, the signature is
     * not added
     */
    signed?: boolean;
    /** Latitude, specified in degrees (from -90 to 90) */
    lat?: number;
    /** Longitude, specified in degrees (от -180 до 180) */
    long?: number;
    /** The place ID where the user is marked */
    place_id?: number;
} & ({
    message?: string;
    attachments: string;
} | {
    message: string;
    attachments?: string;
});
/**
 * Result data of link share
 */
export declare type LinkShareResult = {
    type: 'message' | 'qr' | 'other';
} | {
    type: 'post';
    post_id: string;
} | {
    type: 'story';
    story_id: string;
};
export declare type StoryObjectTransform = {
    /** Rotation, from 0 to 359 deg. Counterclockwise rotation. */
    rotation?: number;
    /**
     * The desired width of the sticker relative to the screen is (0, 1), the
     * height will be calculated taking into account maintaining the aspect ratio
     * of the content.
     */
    relation_width?: number;
    /** From -1 to 1 of screen with */
    translation_x?: number;
    /** From -1 to 1 of screen height */
    translation_y?: number;
    /** Gravity. Default: center. */
    gravity?: 'left_top' | 'left_center' | 'left_bottom' | 'center_top' | 'center' | 'center_bottom' | 'right_top' | 'right_center' | 'right_bottom';
};
export declare type StoryActionHashtag = {
    /** Hashtag text */
    hashtag: string;
    /** Hashtag style. Default: `blue_gradient` */
    style?: 'transparent' | 'blue_gradient';
};
export declare type StoryActionMention = {
    /**
     * Text in mention format:
     * for users: "[id123|name]"
     * for communities: "[club123|name]"
     */
    mention: string;
    /** Mention style. Default: `red_gradient` */
    style?: 'transparent' | 'red_gradient';
};
export declare type StoryActionPlace = {
    /** Place id */
    place_id: number;
    /** Place name */
    title: string;
    /** Category id */
    category_id?: number;
    /** Style */
    style?: 'transparent' | 'blue' | 'green' | 'white';
};
/**
 * Story action link
 */
export declare type StoryActionLink = {
    /** Content link */
    link: string;
    /**
     * The value of the string that will be displayed on the client when
     * clicking on the tooltip.
     */
    tooltip_text_key: string;
};
export declare type StoryActionTime = {
    /** Time style. Default: `date` */
    style?: 'black' | 'white' | 'green' | 'text' | 'date';
    /** Timestamp in milliseconds */
    timestamp_ms?: number;
    /**
     * Date (`timestamp_ms` alternative) in format:
     * `yyyy:MM:dd HH:mm:ss`
     * (this format is chosen to unify dates from exif fields https://vk.cc/9NrgMr) */
    date?: string;
    /** Top sticker title, meaning only for date style */
    title?: string;
};
export declare type StoryActionGeo = {
    /** Place id */
    place_id: number;
    /** Place name */
    text: string;
    /** Category id */
    category_id?: number;
    /** Sticker style. Default: `blue`*/
    style?: 'blue' | 'green' | 'white' | 'transparent';
};
export declare type StoryActionQuestion = {
    /** Question text */
    question: string;
    /** Button text */
    button: string;
};
export declare type StoryActionText = {
    /**
     * The text may contain mentions/hashtags in the formats specified with
     * the corresponding objects
     */
    text: string;
    /** Text style */
    style?: 'classic' | 'cursive' | 'marker' | 'italics' | 'typewriter' | 'poster' | 'retro';
    /** Background/border style. Default: `none` */
    background_style?: 'none' | 'alpha' | 'solid' | 'sticker' | 'neon';
    /** Horizontal alignment */
    alignment?: 'center' | 'left' | 'right';
    /** HEX color */
    selection_color?: string;
};
export declare type StoryActionEmoji = {
    /**
     * Supported emoji:
     * https://pastebin.mvk.com/u3JQHc6W3eajdS8jpMfryNVF2IrGmcaCwAtgs4JANy895zip4LqgumiVg5hjZj6ie9hpGDotVLpi4QAG
     */
    emoji: string;
};
export declare type StoryActionSticker = {
    /** Sticker id */
    sticker_id: number;
    /** Sticker url */
    url?: string;
    /** JSON sticker url */
    animation_url?: string;
    /** Sticker pack id */
    pack_id?: number;
};
export declare type StoryActionMarketItem = {
    /** Product name */
    title: string;
    /** Product id in VK Market */
    product_id?: number;
    /** Owner id of product in VK Market */
    owner_id?: number;
    /** Aliexpress product link */
    link?: string;
};
/**
 * Story action type
 */
export declare type StoryAction = StoryActionHashtag | StoryActionMention | StoryActionPlace | StoryActionLink | StoryActionTime | StoryActionGeo | StoryActionQuestion | StoryActionText | StoryActionEmoji | StoryActionSticker | StoryActionMarketItem;
export declare type StoryClickableZoneOrigin = {
    x: number;
    y: number;
};
export declare type StoryClickableZone = {
    /** Action type */
    action_type: 'hashtag' | 'mention' | 'link' | 'place' | 'question' | 'market_item';
    /** Action data */
    action: StoryAction;
    /**
     * Clickable area border on the sticker. The points should be located
     * clockwise, forming a closed square.
     */
    clickable_area?: StoryClickableZoneOrigin[];
};
export declare type StoryRenderableSticker = ({
    /** Content url */
    url: string;
} | {
    /** Base64 string with BLOB */
    blob: string;
}) & {
    /** Story type */
    content_type: 'image' | 'gif' | 'video';
    /** Object transform */
    transform?: StoryObjectTransform;
    /** Clickable zones */
    clickable_zones?: StoryClickableZone[];
    /** Content width */
    original_width?: number;
    /** Content height */
    original_height?: number;
    /** Whether the sticker can be removed from the screen, `true` by default */
    can_delete?: boolean;
};
export declare type StoryNativeSticker = {
    /** Story action type */
    action_type: 'text' | 'hashtag' | 'mention' | 'time' | 'place' | 'question' | 'emoji' | 'sticker' | 'market_item';
    /** Story action */
    action: StoryAction;
    /** Object transform */
    transform?: StoryObjectTransform;
    /** Whether the sticker can be removed from the screen, `true` by default */
    can_delete?: boolean;
};
/**
 * Sticket container
 */
export declare type StickerContainer = {
    sticker_type: 'renderable';
    sticker: StoryRenderableSticker;
} | {
    sticker_type: 'native';
    sticker: StoryNativeSticker;
};
/** Link text for moving from a story (community stories only) */
export declare type StoryButtonText = 'learn_more' | 'to_store' | 'vote' | 'more' | 'book' | 'order' | 'enroll' | 'fill' | 'signup' | 'buy' | 'ticket' | 'write' | 'open' | 'view' | 'go_to' | 'contact' | 'watch' | 'play' | 'install' | 'read';
export declare type StoryAttachment = {
    /** Button text key (см. link_text в stories.getVideoUploadServer) */
    text: string;
    /** Attach type */
    type: 'url' | 'audio' | 'video' | 'photo';
    /** Content url */
    url?: string;
    /** Owner id */
    owner_id?: number;
    /** Object id */
    id?: number;
    /** Access key for the attachment */
    access_key?: string;
};
export declare type ShowStoryBoxOptions = {
    /** Story type */
    background_type: 'image' | 'video' | 'none';
    /** Camera type (only for `background_type: none`). Default: `back` */
    camera_type?: 'back' | 'front';
    /** Link to an image or video (should follow a direct link to mp4) */
    url?: string;
    /** Base64 string with BLOB (supported only for image) */
    blob?: string;
    /** Lock to move the photo */
    locked?: boolean;
    /** Story attachment object */
    attachment?: StoryAttachment;
    /** Array of sticker objects */
    stickers?: StickerContainer[];
};
/**
 * Map of types of request props of VK Connect methods
 */
export declare type RequestPropsMap = {
    VKWebAppInit: {};
    VKWebAppAddToCommunity: {};
    VKWebAppAllowMessagesFromGroup: {
        group_id: number;
        key?: string;
    };
    VKWebAppAllowNotifications: {};
    VKWebAppCallAPIMethod: {
        method: string;
        params: Record<string, string | number>;
    };
    VKWebAppGetAuthToken: {
        app_id: number;
        scope: string;
    };
    VKWebAppClose: {
        status: AppCloseStatus;
        payload?: any;
    };
    VKWebAppOpenApp: {
        app_id: number;
        location?: string;
    };
    VKWebAppDenyNotifications: {};
    VKWebAppFlashGetInfo: {};
    VKWebAppFlashSetLevel: {
        level: number;
    };
    VKWebAppGetClientVersion: {};
    VKWebAppGetCommunityToken: CommunityTokenRequestOptions;
    VKWebAppGetCommunityAuthToken: CommunityTokenRequestOptions;
    VKWebAppCommunityAccessToken: CommunityTokenRequestOptions;
    VKWebAppCommunityToken: CommunityTokenRequestOptions;
    VKWebAppGetEmail: {};
    VKWebAppGetFriends: {
        multi?: boolean;
    };
    VKWebAppGetGeodata: {};
    VKWebAppGetPersonalCard: {
        type: PersonalCardType[];
    };
    VKWebAppGetPhoneNumber: {};
    VKWebAppGetUserInfo: {};
    VKWebAppJoinGroup: {
        group_id: number;
    };
    VKWebAppOpenCodeReader: {};
    VKWebAppOpenContacts: {};
    VKWebAppOpenPayForm: VKPayProps<VKPayActionType>;
    VKWebAppOpenQR: {};
    VKWebAppResizeWindow: {
        width?: number;
        height: number;
    };
    VKWebAppScroll: {
        top: number;
        speed?: number;
    };
    VKWebAppSetLocation: {
        location: string;
    };
    VKWebAppSetViewSettings: {
        status_bar_style: AppearanceType;
        action_bar_color?: string;
        /** Only for android */
        navigation_bar_color?: string;
    };
    VKWebAppShare: {
        link: string;
    };
    VKWebAppShowCommunityWidgetPreviewBox: WidgetPreviewRequestOptions;
    VKWebAppShowImages: {
        images: string[];
        start_index?: number;
    };
    VKWebAppShowInviteBox: {};
    VKWebAppShowLeaderBoardBox: {
        user_result: number;
    };
    VKWebAppShowMessageBox: MessageRequestOptions;
    VKWebAppShowOrderBox: OrderRequestOptions;
    VKWebAppShowRequestBox: RequestForRequestOptions;
    VKWebAppShowWallPostBox: WallPostRequestOptions;
    VKWebAppStorageGet: {
        keys: string[];
    };
    VKWebAppStorageGetKeys: {
        count: number;
        offset: number;
    };
    VKWebAppStorageSet: {
        key: string;
        value: string;
    };
    VKWebAppTapticImpactOccurred: {
        style: TapticVibrationPowerType;
    };
    VKWebAppTapticNotificationOccurred: {
        type: TapticNotificationType;
    };
    VKWebAppTapticSelectionChanged: {};
    VKWebAppAddToFavorites: {};
    VKWebAppSendPayload: {
        group_id: number;
        payload: any;
    };
    VKWebAppDisableSwipeBack: {};
    VKWebAppEnableSwipeBack: {};
    VKWebAppShowStoryBox: ShowStoryBoxOptions;
    VKWebAppAccelerometerStart: {};
    VKWebAppAccelerometerStop: {};
    VKWebAppGyroscopeStart: {};
    VKWebAppGyroscopeStop: {};
    VKWebAppDeviceMotionStart: {};
    VKWebAppDeviceMotionStop: {};
};
/**
 * Map of types of response data of VK Connect methods
 */
export declare type ReceiveDataMap = {
    VKWebAppAddToCommunity: {
        group_id: number;
    };
    VKWebAppAllowMessagesFromGroup: {
        result: true;
    };
    VKWebAppAllowNotifications: {
        enabled: true;
    };
    VKWebAppCallAPIMethod: {
        response: any;
    };
    VKWebAppGetAuthToken: {
        access_token: string;
        scope: string;
    };
    VKWebAppClose: {
        payload: any;
    };
    VKWebAppOpenApp: {
        result: true;
    };
    VKWebAppDenyNotifications: {
        disabled: true;
    };
    VKWebAppFlashGetInfo: {
        is_available: boolean;
        level: number;
    };
    VKWebAppFlashSetLevel: {
        result: true;
    };
    VKWebAppGetClientVersion: {
        platform: string;
        version: string;
    };
    VKWebAppGetEmail: {
        email: string;
        sign: string;
    };
    VKWebAppGetFriends: {
        users: Array<{
            id: number;
            first_name: string;
            last_name: string;
        }>;
    };
    VKWebAppGetGeodata: {
        available: boolean | number;
        lat: string;
        long: string;
    };
    VKWebAppGetPersonalCard: PersonalCardData;
    VKWebAppGetPhoneNumber: {
        phone_number: string;
        sign: string;
        is_verified: boolean;
    };
    VKWebAppGetUserInfo: UserInfo;
    VKWebAppJoinGroup: {
        result: true;
    };
    VKWebAppOpenCodeReader: CodeReaderOutput;
    VKWebAppOpenQR: CodeReaderOutput;
    VKWebAppOpenContacts: SelectedContact;
    VKWebAppOpenPayForm: TransactionResult | {
        result: TransactionResult;
    };
    VKWebAppResizeWindow: {
        width: number;
        height: number;
    };
    VKWebAppScroll: {
        top: number;
        height: number;
    };
    VKWebAppSetLocation: {
        result: true;
    };
    VKWebAppSetViewSettings: {
        result: true;
    };
    VKWebAppShare: LinkShareResult;
    VKWebAppShowCommunityWidgetPreviewBox: {
        result: true;
    };
    VKWebAppShowImages: {
        result: true;
    };
    VKWebAppShowInviteBox: {
        success: true;
    };
    VKWebAppShowLeaderBoardBox: {
        success: boolean;
    };
    VKWebAppShowMessageBox: {
        result: true;
    };
    VKWebAppShowOrderBox: {
        status: OrderBoxShowingStatus;
    };
    VKWebAppShowRequestBox: RequestResult;
    VKWebAppShowWallPostBox: {
        post_id: number;
    };
    VKWebAppStorageGet: {
        keys: {
            key: string;
            value: string;
        }[];
    };
    VKWebAppStorageGetKeys: {
        keys: string[];
    };
    VKWebAppStorageSet: {
        result: true;
    };
    VKWebAppTapticImpactOccurred: {
        result: true;
    };
    VKWebAppTapticNotificationOccurred: {
        result: true;
    };
    VKWebAppTapticSelectionChanged: {
        result: true;
    };
    VKWebAppAddToFavorites: {
        result: true;
    };
    VKWebAppSendPayload: {
        result: true;
    };
    VKWebAppGetCommunityToken: {
        access_token: string;
    };
    /** Web. Deprecated in favor `VKWebAppGetCommunityToken` */
    VKWebAppGetCommunityAuthToken: {
        access_token: string;
    };
    /**  iOS. Deprecated in favor `VKWebAppGetCommunityToken` */
    VKWebAppCommunityAccessToken: {
        access_token: string;
    };
    /** Android. Deprecated in favor `VKWebAppGetCommunityToken` */
    VKWebAppCommunityToken: {
        access_token: string;
    };
    VKWebAppAudioPaused: {
        position: number;
        type: string;
        id: string;
    };
    VKWebAppAudioStopped: {};
    VKWebAppAudioTrackChanged: {
        type: string;
        id: string;
    };
    VKWebAppAudioUnpaused: {
        type: string;
        id: string;
    };
    VKWebAppInitAds: {
        init: 'true' | 'false';
    };
    VKWebAppLoadAds: {
        load: 'true' | 'false';
    };
    VKWebAppUpdateConfig: UpdateConfigData;
    VKWebAppViewHide: {};
    VKWebAppViewRestore: {};
    VKWebAppDisableSwipeBack: {};
    VKWebAppEnableSwipeBack: {};
    VKWebAppShowStoryBox: {
        result: true;
    };
    VKWebAppAccelerometerChanged: {
        x: string;
        y: string;
        z: string;
    };
    VKWebAppGyroscopeChanged: {
        x: string;
        y: string;
        z: string;
    };
    VKWebAppDeviceMotionChanged: {
        alpha: string;
        beta: string;
        gamma: string;
    };
};
/** Name of the method that can be sent */
export declare type RequestMethodName = keyof RequestPropsMap;
/** Name of the method that can be received */
export declare type ReceiveMethodName = keyof ReceiveDataMap;
/** Name of the method that can be only sent */
export declare type RequestOnlyMethodName = Exclude<RequestMethodName, ReceiveMethodName>;
/** Name of the method that can be only received */
export declare type ReceiveOnlyMethodName = Exclude<ReceiveMethodName, RequestMethodName>;
/** Type of any method name */
export declare type MethodName = RequestMethodName | ReceiveMethodName;
/** The name of the method that can be both sent and received */
export declare type IOMethodName = RequestMethodName & ReceiveMethodName;
/** Getter of request properties of a method */
export declare type RequestProps<M extends RequestMethodName = RequestMethodName> = RequestPropsMap[M];
/** Getter of response data of a method */
export declare type ReceiveData<M extends ReceiveMethodName = ReceiveMethodName> = ReceiveDataMap[M];
/** Property for matching sent request and received message */
export declare type RequestIdProp = {
    request_id?: number | string;
};
/** Client error data */
export declare type ErrorDataClientError = {
    error_code: number;
    error_reason: string;
    error_description?: string;
};
/** API error data */
export declare type ErrorDataAPIError = {
    error_code: number;
    error_msg: string;
    request_params: string[];
};
/** Auth error data */
export declare type ErrorDataAuthError = {
    error_code: number;
    error_reason: string;
    error_description?: string[];
};
export declare type ErrorData = {
    error_type: 'client_error';
    error_data: ErrorDataClientError;
    request_id?: number | string;
} | {
    error_type: 'api_error';
    error_data: ErrorDataAPIError;
    request_id?: number | string;
} | {
    error_type: 'auth_error';
    error_data: ErrorDataAuthError;
    request_id?: number | string;
};
export declare type VKConnectErrorEvent = {
    detail: {
        type: string;
        data: ErrorData;
    };
};
export declare type VKConnectSuccessEvent<T extends ReceiveMethodName> = {
    detail: {
        type: string;
        data: ReceiveData<T> & RequestIdProp;
        app_id?: string;
        scheme?: AppearanceSchemeType;
        appearance?: AppearanceType;
    };
};
/** VK Connect event */
export declare type VKConnectEvent<T extends ReceiveMethodName> = VKConnectErrorEvent | VKConnectSuccessEvent<T>;
/** The type of function that will be subscribed to VK Connect events */
export declare type VKConnectSubscribeHandler = (event: VKConnectEvent<ReceiveMethodName>) => void;
/** Sending method function type */
export declare type VKConnectSend = <K extends RequestMethodName>(method: K, params?: RequestProps<K> & RequestIdProp) => void;
/** Subscribing/unsubscribing method function type */
export declare type VKConnectSubscribeOrUnsubscribe = (fn: VKConnectSubscribeHandler) => void;
/** Subscribing/unsubscribing method function type */
export declare type VKConnectSupports = (method: string) => boolean;
/** Type of promisified send function */
export declare type VKConnectSendPromise = <K extends IOMethodName>(method: K, props?: RequestProps<K>) => Promise<ReceiveData<K>>;
