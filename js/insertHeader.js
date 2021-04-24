const xhr = new XMLHttpRequest();

const url = `/storage/html/header.html`;
xhr.open('GET', url, true);
xhr.onload = function () {
  writething(this.response)
}
xhr.send();

function writething(data) {
  document.getElementById("insertHeader").innerHTML += data
}