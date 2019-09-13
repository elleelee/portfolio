// Get the navbar
const navbar = document.querySelector(".navbar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const stickyNavbar = () => {
  if (navbar) {
    document.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY >= 680) {
        navbar.classList.remove("position-fixed");
      }
      if (window.scrollY <= 680) {
        navbar.classList.add("position-fixed");
      }
    });
  };
};

stickyNavbar();
