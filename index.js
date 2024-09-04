// Toggle Menu List JS Code
let menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "400px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    menuList.style.maxHeight = "0px";
  } else {
    document.getElementById("navbar").style.top = "-5rem";
    menuList.style.maxHeight = "0px";
  }
  prevScrollpos = currentScrollPos;
};
