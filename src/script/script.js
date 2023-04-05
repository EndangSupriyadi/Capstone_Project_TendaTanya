//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//on click menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click sidebar to disapper navbar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
