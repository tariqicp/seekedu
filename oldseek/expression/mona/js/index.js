//Toggle button
function toggleMenu() {
  var navMenu = document.getElementById("mobile-menu-js");
  if (navMenu.style.height == "0px") {
    navMenu.style.height = "134px";     
  } else {
    navMenu.style.height = "0px";                  
  }
}