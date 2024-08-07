let input = document.getElementById('input');
let ul = document.getElementById('myUl');

function addItem() {
  if (input.value === '') {
    alert('Please Enter the title !!!');
  } else if (input.value != '') {
    let li = document.createElement('li');
    li.innerHTML = input.value.trim();
    ul.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  input.value = '';
  saveData();
}

ul.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('listData', ul.innerHTML);
}

function showData() {
  ul.innerHTML = localStorage.getItem('listData');
}
showData();
