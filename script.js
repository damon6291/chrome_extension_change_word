// var text = 'coronavirus';

// function replaceText(element) {
//   if (element.hasChildNodes()) {
//     element.childNodes.forEach(replaceText);
//   } else if (element.nodeType === 3) {
//     if (element.textContent.match(/coronavirus|damon/gi)) {
//       const newElement = document.createElement('span');
//       newElement.innerHTML = element.textContent.replace(
//         /coronavirus|damon/gi,
//         '<span class="rainbow">' + text + '</span>'
//       );
//       element.replaceWith(newElement);
//     }
//     // element.textContent = element.textContent.replace(/coronavirus/gi, 'Damon');
//   }
// }

// chrome.storage.sync.get('virus', function (result) {
//   var v = result['virus'];
//   if (v === 1) {
//     text = 'Damon';
//     replaceText(document.body);
//   } else if (v === 2) {
//     text = 'Coronavirus';
//     replaceText(document.body);
//   }
// });

var from;
var to;

chrome.storage.sync.get('from', function (result) {
  from = result['from'];
});
chrome.storage.sync.get('to', function (result) {
  to = result['to'];
});

if (from.length >= 1) {
  replaceText(document.body);
}

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
