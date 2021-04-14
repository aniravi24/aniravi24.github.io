function switchTheme() {
  var button = document.getElementById("theme-button");
  var html = document.getElementsByTagName("html")[0];
  html.classList.toggle("dark");

  if (button.innerHTML == "LIGHT MODE") {
    button.innerHTML = "DARK MODE";
    // Expire in two months
    setCookie("theme", "dark mode", 60 * 24 * 60 * 60 * 1000);
  } else {
    button.innerHTML = "LIGHT MODE";
    // Expire in two months
    setCookie("theme", "light mode", 60 * 24 * 60 * 60 * 1000);
  }
  return;
}

function setCookie(cname, cvalue, extime) {
  var d = new Date();
  d.setTime(d.getTime() + extime);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";" + "path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

// Switch theme if cookie is set
if (getCookie("theme") == "dark mode") {
  switchTheme();
}

// Switch theme if button is clicked.
var button = document.getElementById("theme-button");
button.addEventListener("click", switchTheme);
