var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

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
