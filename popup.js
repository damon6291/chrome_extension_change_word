let from_word = document.getElementById('from');
let to_word = document.getElementById('to');
let button_word = document.getElementById('submit');

button_word.onclick = function () {
  let from_value = from.value;
  let to_value = to.value;

  chrome.storage.sync.set({from: from_value}, function () {
    console.log(from_value);
  });
  chrome.storage.sync.set({to: to_value}, function () {
    console.log(to_value);
  });

  chrome.tabs.executeScript({
    file: 'script.js',
  });
};
