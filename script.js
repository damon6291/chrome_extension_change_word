var from;
var to;

setFromTo();

setTimeout(function () {
  if (typeof from !== 'undefined') {
    replaceText(document.body);
    makeNull();
  }
}, 100);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === 3) {
    var reg_exp = new RegExp(from, 'gi');
    if (element.textContent.match(reg_exp)) {
      const newElement = document.createElement('span');
      newElement.innerHTML = element.textContent.replace(
        reg_exp,
        '<span class="rainbow">' + to + '</span>'
      );
      element.replaceWith(newElement);
    }
    // element.textContent = element.textContent.replace(/coronavirus/gi, 'Damon');
  }
}

function makeNull() {
  chrome.storage.sync.set({from: null}, function () {});
  chrome.storage.sync.set({to: null}, function () {});
  from = undefined;
  to = undefined;
}

function setFromTo() {
  chrome.storage.sync.get('from', function (result) {
    from = result['from'];
  });
  chrome.storage.sync.get('to', function (result) {
    to = result['to'];
  });
}
