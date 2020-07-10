// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.sync.set({virus: 2}, function () {
//     console.log('The virus is coronavirus.');
//   });
// });

// chrome.browserAction.onClicked.addListener(function () {
//   chrome.storage.sync.get('virus', function (result) {
//     let v = result['virus'];
//     if (v === 1) {
//       chrome.browserAction.setTitle({title: 'Click for Damon'});
//       chrome.storage.sync.set({virus: 2});
//       chrome.tabs.executeScript({
//         file: 'script.js',
//       });
//     } else if (v === 2) {
//       chrome.browserAction.setTitle({title: 'Click for Coronavirus'});
//       chrome.storage.sync.set({virus: 1});
//       chrome.tabs.executeScript({
//         file: 'script.js',
//       });
//     }
//   });
// });

chrome.runtime.onInstalled.addListener(function () {
  // chrome.storage.sync.set({word: 1}, function () {
  //   console.log('The virus is coronavirus.');
  // });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: '.'},
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
