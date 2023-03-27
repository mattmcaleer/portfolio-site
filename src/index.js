let menuToggle = document.querySelector(".toggle-psuedo-table");
let navbar = document.querySelector(".navigation")
let hideMenu = true;
let menu = document.querySelector(".nav-menu");

const toggleMenu = () => {
  menu.classList.toggle("nav-menu-active");

  hideMenu = !hideMenu;

  if (hideMenu) {
    menuToggle.style.transform = 'rotate(0deg)';
    menuToggle.style.transition = 'transform 1s ease-out';
    setTimeout('menu.style.height = 0;', 300)
  } else {
    menuToggle.style.transform = 'rotate(405deg)';
    menuToggle.style.transition = 'transform 1s ease-out';
    menu.style.height = '100vh'
  };
}

menuToggle.addEventListener('click', toggleMenu)

// make function that closes navbar (if its open) when page scrolled

let pos1 = window.scrollY;
let stickyNav = navbar.offsetTop;
let projects = document.querySelector("#project-list");
let projectsHeading = document.querySelector("#projects-heading");
let stickyHeading = projects.offsetTop;
let footer = document.querySelector(".footer");

window.onscroll = function() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add("sticky-navbar")
  } else {
    navbar.classList.remove("sticky-navbar");
  }

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 12) {
    footer.style.opacity = 1
    footer.style.transition = 'opacity 300ms'
    navbar.style.opacity = 0
  } else if (window.pageYOffset <= stickyNav) {
    navbar.style.opacity = 0
    navbar.style.transition = 'opacity 300ms'
  } else {
    footer.style.opacity = 0
    navbar.style.opacity = 1
    navbar.style.transition = 'opacity 300ms'
  }

  let pos2 = window.scrollY;

  if (pos1 > pos2) {
    return;
  } else {
    hideMenu = true;
    menu.classList = "nav-menu";
    menuToggle.style.transform = 'rotate(0deg)';
    menuToggle.style.transition = 'transform 1s ease-out';
    setTimeout('menu.style.height = 0;', 300)
  }
}

let reveal = () => {
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

const allProjects = document.querySelectorAll(".project");
let projectOpen;

let toggleProject = (p) => {
  toggle = p.querySelector('.menu-toggle-container table')

  if (projectOpen) {

    toggle.style.transform = 'rotate(0deg)'

    p.classList.remove('active-project')

  } else {

    toggle.style.transition = 'transform 250ms'

    setTimeout(() => toggle.style.transform = 'rotate(225deg)', 250)

    p.classList.add('active-project')
  }

  projectOpen = !projectOpen;

  
}

const closeProjectsOnScroll = () => {
  let pos2 = window.scrollY;

  let toggle = document.querySelectorAll('.menu-toggle-container table')

  if (pos1 > pos2) {
    return;
  } else {
    allProjects.forEach(e => e.classList.remove('active-project'))
    toggle.forEach(e => e.style.transform = 'rotate(0deg)');
    toggle.forEach(e => e.style.transition = 'transform 1s ease-out');
  }
}

allProjects.forEach(e => e.addEventListener('click', () => toggleProject(e)))
window.addEventListener('scroll', closeProjectsOnScroll)


