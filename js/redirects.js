function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
   });
    return vars;
  }


  var count = 6;
  // var redirect = "../download_page/chains";
  var redirect = `../download_page/${getUrlVars()["page"]}`;
  document.getElementById("pack_icon").src = `../images/resized_pack_icons/${getUrlVars()["page"]}.png`

  function countDown() {
    var timer =
      document.getElementById("timer");
    if (count > 0) {
      count--;
      timer.innerHTML = "Bringing you to the download in " + count + " seconds.";
      setTimeout("countDown()", 1000);
    } else {
      window.location.href = redirect;
      timer.innerHTML = "Redirecting you now.";
    }
  }