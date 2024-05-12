const navBtn = document.querySelector(".nav__toggle-icon");
const navBtnLin = document.querySelector(".nav__toggle-line");
const menuMobile = document.querySelector(".nav-menu");
const resumeListItems = document.querySelectorAll(".resume-list__item");
const portfolioMenuItems = document.querySelectorAll(".portfolio-menu__item");
const menuItems = document.querySelectorAll(".nav-menu__item");
const themBtn = document.querySelector(".footer__them-wrapper");
const darkThemIcon = `<svg viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
const lightThemIcon = `<svg viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>`;

if (window.localStorage.getItem("them") == "dark-them") {
  document.documentElement.classList.add("dark-them");
  themBtn.innerHTML = darkThemIcon;
}

navBtn.addEventListener("click", () => {
  navBtnLin.classList.toggle("nav__toggle-line--open");
  menuMobile.classList.toggle("nave-menu--active");
  document.body.classList.toggle("body");
});

function navigationTabsInit(listItems, itemActiveClass, itemShowClass) {
  listItems.forEach((listItem) => {
    listItem.addEventListener("click", function () {
      removeActiveClass(itemActiveClass);
      removeActiveClass(itemShowClass);
      this.classList.add(`${itemActiveClass}`);
      let swiperId = this.getAttribute("data-content-id");
      document.querySelector(swiperId).classList.add(`${itemShowClass}`);
    });
  });
}

function removeActiveClass(className) {
  document.querySelector(`.${className}`).classList.remove(`${className}`);
}

navigationTabsInit(
  resumeListItems,
  "resume-list__item--active",
  "resume-content--show"
);

navigationTabsInit(
  portfolioMenuItems,
  "portfolio-menu__item--active",
  "swiper--show"
);

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClass("nav-menu__item--active");
    item.classList.add("nav-menu__item--active");
    let sectionClass = item.getAttribute("data-section");
    let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop;
    window.scrollTo({
      top: sectionOffsetTop - 120,
      behavior: "smooth",
    });
  });
});

themBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-them");
  if (document.documentElement.classList.contains("dark-them")) {
    this.innerHTML = darkThemIcon;
    window.localStorage.setItem("them", "dark-them");
  } else {
    this.innerHTML = lightThemIcon;
    window.localStorage.setItem("them", "light-them");
  }
});
