const xhr_footer = new XMLHttpRequest();

const url_footer = `/storage/html/footer.html`;
xhr_footer.open('GET', url_footer, true);
xhr_footer.onload = function () {
  writethingFooter(this.response)
}
xhr_footer.send();

function writethingFooter(data) {
  document.getElementById("insertFooter").innerHTML += data
}