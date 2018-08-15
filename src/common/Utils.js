/*global browser*/
export function getCurrentTab(callback) {
    browser.tabs.query({
        active: true,
        currentWindow: true
    },
    (tabs) => {
        callback(tabs[0]);
    });
}