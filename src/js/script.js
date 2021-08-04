// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
});

// Header Animation
sr.reveal(".nav__logo");
sr.reveal(".nav__item", { interval: 200 });
sr.reveal(".nav__button", { delay: 1000 });
sr.reveal(".nav__toggle", { interval: 200 });

// Home Animation
sr.reveal(".home__welcome");
sr.reveal(".home__title", { delay: 200 });
sr.reveal(".home__text", { delay: 400 });
sr.reveal(".home__button", { delay: 600 });
sr.reveal(".home__img", { delay: 400 });
