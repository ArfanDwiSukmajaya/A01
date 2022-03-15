const navSlide = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".link");

  burger.addEventListener("click", function () {
    // toggel nav
    nav.classList.toggle("nav-active");

    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
