const urlSpans = document.querySelectorAll('.url');

urlSpans.forEach(function(urlSpan) {
  urlSpan.addEventListener('click', function(event) {
    alert('User clicked on URL');
    event.preventDefault();
  });
});

// updating the code title and flaticon icon
const savedUrl = localStorage.getItem('url');
const nameSpan = document.querySelector('.name');
const urlSpan = document.querySelector('.url');
const icon = document.querySelector('.fa-stack-overflow');
const link = document.querySelector('#link');

urlSpan.addEventListener('input', updateLink);

function updateLink() {
  const domain = new URL('http://' + urlSpan.textContent).hostname.replace('www.', '');
  link.querySelector('.name').textContent = domain;
  link.href = 'http://' + urlSpan.textContent;
  const iconClass = 'fa-brands fa-' + domain.split('.')[0];
  icon.className = iconClass;
  localStorage.setItem('url', urlSpan.textContent);
}

window.addEventListener('load', function() {
  const savedUrl = localStorage.getItem('url');
  if (savedUrl) {
    urlSpan.textContent = savedUrl;
    updateLink();
  }
});

// Google search
function googleSearch() {
  var text = document.getElementById("search").value;
  var cleanQuery = text.replace(" ", "+", text);
  var url = 'http://www.google.com/search?q=' + cleanQuery;
  window.location.href = url;
}

// Editable text with localStorage
const editableText = document.getElementById('editable-text');

if (localStorage.getItem('savedText')) {
  editableText.textContent = localStorage.getItem('savedText');
}

editableText.addEventListener('input', function() {
  localStorage.setItem('savedText', this.textContent);
});
