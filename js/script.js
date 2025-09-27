const nav = document.querySelector(".navbar.navbar-expand-lg");
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    nav.classList.add("navbar-scrolled");
  } else {
    nav.classList.remove("navbar-scrolled");
  }
});
