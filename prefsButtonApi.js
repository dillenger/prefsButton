var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");

var prefsButtonApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      prefsButtonApi: {
        async prefsButton() {
          let recentWindow = Services.wm.getMostRecentWindow("mail:3pane");
          if (recentWindow) {
            recentWindow.openOptionsDialog();
          }
        },
      },
    };
  }
};
