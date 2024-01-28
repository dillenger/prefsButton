function handleClick() {
  browser.prefsButtonApi.prefsButton();
};

browser.browserAction.onClicked.addListener(handleClick);
