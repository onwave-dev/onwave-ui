import React, { Component } from "react";

declare global {
  interface Window {
    ChannelIO: any;
  }
}

/**
 * Language of Channel Talk plugin support.
 * Only (en, ko, ja) available.
 */
type ChannelTalkLocale = "en" | "ko" | "ja";

/** Props of ChannelTalk. */
interface ChannelTalkProps extends ChannelTalkPlugInSettings {
  /** Timeout before init Channel Talk plugin. */
  timeout?: number;
  /** On init. */
  onBoot?: (profile: ChannelTalkGuestMeta) => void;
  /** On error occurred. */
  onError?: (err?: any) => void;
  /** On chatbox show. */
  onShow?: () => void;
  /** On chatbox hide. */
  onHide?: () => void;
  /** On `unreadCount` is changed. */
  onChangeBadge?: (unreadCount: number) => void;
  /** On user success to create a chat. */
  onCreateChat?: () => void;
  /**
   * On user success to change their profile in the settings page and chats.
   * `profile` is an object of the user's profile.
   */
  onChangeProfile?: (profile: ChannelTalkUserProfile) => void;
  /**
   * On user clicks redirect images or buttons.
   * We pass the redirect url to a function.
   */
  onClickRedirect?: (url: string) => void;
}

/** State of ChannelTalk. */
interface ChannelTalkState {
  /** Is plugin init? */
  isInit: boolean;
}

/**
 * Settings for Channel Talk plugin.
 * - ref: https://developers.channel.io/docs/web-channelpluginsettings
 */

interface ChannelTalkPlugInSettings {
  /** Channel plugin's key */
  pluginKey: string;
  /** User id. */
  userId?: string | number;
  /**
   * Css selector for custom button.
   * Use it with `hideDefaultLauncher` set to `true`.
   */
  customLauncherSelector?: string;
  /** Flag to decide whether to hide the default button. */
  hideDefaultLauncher?: boolean;
  /** Set content on the top of messages on the chat view. */
  chatHeaderContent?: string;
  /**
   * Decide whether it shows a navigation bar on the chat view.
   * Default value is false.
   */
  hideNavigationBarOnChatView?: boolean;
  /**
   * Flag to decide whether to track default events or not.
   * Default value is `true` */
  enabledTrackDefaultEvent?: boolean;
  /**
   * Flag to decide whether to track UTM source and referrer or not.
   * Default value is `true`
   */
  enabledUtmSourceTrack?: boolean;
  /**
   * Flag to decide whether to enter a chat room when you click the button.
   * Default value is `false`
   */
  openChatDirectlyAsPossible?: boolean;
  /** Custom plugin button's z-index. */
  zIndex?: number;
  /**
   * Set default language.
   * Only (en, ko, ja) available.
   */
  locale?: ChannelTalkLocale;
  /**
   * Profile object contains user information.
   * If this property is present, it will be used when boot is get called
   */
  profile?: ChannelTalkUserProfile;
}

/** Guest meta data of Channel Talk. */
interface ChannelTalkGuestMeta {
  avatarUrl: string;
  bindFrom: string;
  channelId: string;
  color: string;
  country: string;
  createdAt: number;
  email: string;
  ghost: boolean;
  id: string;
  initial: string;
  latitude: number;
  longitude: number;
  locale: ChannelTalkLocale;
  mobileNumber: string;
  name: string;
  named: boolean;
  profile: ChannelTalkUserProfile;
  safeLocale: string;
  segment: string;
  updatedAt: number;
}

/**
 * User profile of Channel Talk plugin.
 * - ref: https://developers.channel.io/docs/web-channelpluginsettings#section-profile-optional
 */
interface ChannelTalkUserProfile {
  name?: string;
  mobileNumber?: string;
  email?: string;
  avatarUrl?: string;
  [key: string]: any;
}

/** URL of Channel Talk plugin. */
const PLUGIN_URL = "//cdn.channel.io/plugin/ch-plugin-web.js";

/**
 * Channel Talk plugin helper component.
 * - ref: https://developers.channel.io/docs/web-chplugin
 */
class RawChannelTalk extends Component<ChannelTalkProps, ChannelTalkState> {
  constructor(props: ChannelTalkProps) {
    super(props);
    this.state = {
      isInit: false,
    };
  }

  static defaultProps: ChannelTalkProps = {
    pluginKey: "",
    locale: "en",
    timeout: 1000,
  };

  /**
   * Open Channel Talk messenger.
   * - ref: https://developers.channel.io/docs/web-chplugin#section-show
   */
  static show = () => {
    if (typeof window.ChannelIO === "function") {
      window.ChannelIO("show");
    }
  };

  /**
   * Open chatroom directly at Channel Talk messenger.
   * - ref: https://developers.channel.io/docs/web-chplugin#section-open-chat
   */
  static openChat = (chatId: string | number) => {
    if (typeof window.ChannelIO === "function") {
      window.ChannelIO("openChat", chatId);
    }
  };

  /**
   * Go to the lounge view.
   * - ref: https://developers.channel.io/docs/web-chplugin#section-lounge
   */
  static lounge = () => {
    if (typeof window.ChannelIO === "function") {
      window.ChannelIO("lounge");
    }
  };

  /**
   * Close Channel Talk messenger.
   * - ref: https://developers.channel.io/docs/web-chplugin#section-hide
   */
  static hide = () => {
    if (typeof window.ChannelIO === "function") {
      window.ChannelIO("hide");
    }
  };

  /**
   * Track an event for Channel Talk.
   * - ref: https://developers.channel.io/docs/web-chplugin#section-track
   */
  static track = (eventName: string, eventProperty: any) => {
    if (typeof window.ChannelIO === "function") {
      window.ChannelIO("track", eventName, eventProperty);
    }
  };

  /**
   * Clear all registered callbacks of Channel Talk.
   * - ref: https://developers.channel.io/docs/web-chplugin#section-clear-callbacks
   */
  static clearCallbacks = () => {
    if (typeof window.ChannelIO === "function") {
      window.ChannelIO("clearCallbacks");
    }
  };

  componentDidMount() {
    // If plug in key not provided, return error.
    if (!this.props.pluginKey) {
      return;
    }

    // Init plugin on mount.
    this.preInitPlugIn();
    this.initPlugIn();
  }

  componentWillUnmount() {
    this.destroyPlugIn();
  }

  /**
   * Make ready before plug in init.
   */
  private preInitPlugIn() {
    const ch = function (...args: any[]) {
      ch.c(args);
    };
    ch.q = [] as any[];
    ch.c = function (args: any) {
      ch.q.push(args);
    };

    window.ChannelIO = ch;
  }

  /**
   * Initialize Channel Talk plugin.
   */
  private async initPlugIn(): Promise<void> {
    try {
      // If plugin already init, skip init.
      if (this.state.isInit) {
        return;
      }

      // Wait before init script.
      await new Promise((resolve) => setTimeout(resolve, this.props.timeout));

      // Inject script.
      await scriptInjector(PLUGIN_URL);

      // Register event listeners.
      this.registerEventListeners();

      // Create settings for plug in.
      const plugInSettings: ChannelTalkPlugInSettings = {
        ...this.props,
      };

      // Boot up with settings.
      window.ChannelIO("boot", plugInSettings);

      // Set init status.
      this.setState({ isInit: true });
    } catch (err) {
      this.handlePlugInError(err);
    }
  }

  /**
   * Destory Channel Talk plugin.
   */
  private destroyPlugIn() {
    this.setState({ isInit: false });

    if (typeof window.ChannelIO !== "function") {
      return;
    }

    window.ChannelIO("hide");
    window.ChannelIO("clearCallbacks");

    setTimeout(() => {
      // Shutdown channel plugin on unmount.
      window.ChannelIO("shutdown");
    }, 1000);
  }

  /**
   * Register event listeners for Channel Talk plugin.
   * - ref: https://developers.channel.io/docs/web-chplugin
   */
  private registerEventListeners() {
    if (typeof window.ChannelIO !== "function") {
      return;
    }

    // Register a callback function when boot was completed.
    window.ChannelIO("onBoot", (guest?: ChannelTalkGuestMeta) => {
      if (guest) {
        if (this.props.onBoot) this.props.onBoot(guest);
      } else {
        this.handlePlugInError(new Error("ERR_BOOT_FAILED"));
      }
    });

    // Register a callback function when the chat list is shown.
    window.ChannelIO("onShow", () => {
      if (this.props.onShow) this.props.onShow();
    });

    // Register a callback function when the chat list is hidden.
    window.ChannelIO("onHide", () => {
      if (this.props.onHide) this.props.onHide();
    });

    // Register a callback when `unreadCount` is changed.
    window.ChannelIO("onChangeBadge", (unreadCount: number) => {
      if (this.props.onChangeBadge) this.props.onChangeBadge(unreadCount);
    });

    // Register a callback when a user success to create a chat.
    window.ChannelIO("onCreateChat", () => {
      if (this.props.onCreateChat) this.props.onCreateChat();
    });

    // Register a callback when a user success to change their profile in the settings page and chats.
    // `profile` is an object of the user's profile.
    window.ChannelIO("onChangeProfile", (profile: ChannelTalkUserProfile) => {
      if (this.props.onChangeProfile) this.props.onChangeProfile(profile);
    });

    // Register a callback function when the chat list is hidden.
    window.ChannelIO("onClickRedirect", (url: string) => {
      if (this.props.onClickRedirect) this.props.onClickRedirect(url);
    });
  }

  /**
   * Handle error of plug in.
   */
  private handlePlugInError(err?: any) {
    if (this.props.onError) this.props.onError(err);
    this.destroyPlugIn();
  }

  render() {
    return null;
  }
}

function scriptInjector(scriptUrl: string) {
  return new Promise<void>((resolve, reject) => {
    const ele = document.createElement("script");

    // Set attributes for script.
    ele.src = scriptUrl;
    ele.async = true;
    ele.defer = true;

    // Set attributes for event listeners.
    ele.onload = () => {
      resolve();
      ele.onload = null;
      ele.onerror = null;
    };
    ele.onerror = () => {
      reject("ERR_SCRIPT_INJECTION_FAILED");
      ele.onload = null;
      ele.onerror = null;
    };

    // Append to head.
    document.head.appendChild(ele);
  });
}

export const ChannelTalk: React.FC<{ pluginKey: string }> = ({ pluginKey }) => {
  return <RawChannelTalk pluginKey={pluginKey} locale="ko" />;
};
