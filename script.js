const openButton = document.getElementById("open-button");

const closeButton = document.getElementById("close-button");

const navDrawer = document.getElementById("nav-menu");

closeButton.addEventListener("click", function () {
  navDrawer.classList.remove("open");
});

openButton.addEventListener("click", function () {
  navDrawer.classList.add("open");
});
