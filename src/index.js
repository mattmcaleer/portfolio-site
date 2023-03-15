let menuToggle = document.querySelector(".toggle-psuedo-table");
let navbar = document.querySelector(".navigation")
let hideMenu = true;
let menu = document.querySelector(".nav-menu");

function toggleMenu() {
  menu.classList.toggle("nav-menu-active");

  hideMenu = !hideMenu;

  if (hideMenu) {
    menuToggle.style.opacity = '.3'
    menuToggle.style.transform = 'rotate(0deg)';
    menuToggle.style.transition = 'transform 1s ease-out, opacity 1s';
    setTimeout('menu.style.height = 0;', 300)
  } else {
    menuToggle.style.opacity = '1'
    menuToggle.style.transform = 'rotate(405deg)';
    menuToggle.style.transition = 'transform 1s ease-out, opacity 1s';
    menu.style.height = '100vh'
  };
}

menuToggle.addEventListener('click', toggleMenu)

// make function that closes navbar (if its open) when page scrolled

let pos1 = window.scrollY;
let sticky = navbar.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-navbar")
  } else {
    navbar.classList.remove("sticky-navbar");
  }

  let pos2 = window.scrollY;

  if (pos1 > pos2) {
    return;
  } else {
    hideMenu = true;
    menu.classList = "nav-menu";
    menuToggle.style.opacity = '.3'
    menuToggle.style.transform = 'rotate(0deg)';
    menuToggle.style.transition = 'transform 1s ease-out, opacity 1s';
    setTimeout('menu.style.height = 0;', 300)
  }
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);