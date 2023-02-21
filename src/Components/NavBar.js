import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  let [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    document.body.className="";
  }, 1000);

  const handleMenuToggle = () => {
    const menuToggle = document.querySelector('.menu-toggle').style;

    setDisplayMenu(!displayMenu);

    if (displayMenu) {
      menuToggle.transform = 'rotate(90deg)';
      menuToggle.transition = 'transform 0.5s';
    } else {
      menuToggle.transform = 'rotate(0deg)';
      menuToggle.transition = 'transform 0.5s';
    };
  }

  const goToPage = (endpoint) => {
    handleMenuToggle();
    
    setTimeout(() => 
      navigate(endpoint), 1000
    )
  }

  const setActivePage = (location) => {
    if (window.location.hash === `#${location}`) {
      return "nav-link-active"
    } else {
      return "nav-link"
    }
  }

  return (
    <div className="navigation">
      <div className="menu-bar">
        <div className="menu-toggle" onClick={handleMenuToggle}>|||</div>
      </div>
      <div className={displayMenu ? "nav-menu" : "nav-menu-hidden"}>
        <div onClick={(() => goToPage('/'))} className={setActivePage('/')}>ABOUT</div>
        <div onClick={(() => goToPage('/projects'))} className={setActivePage('/projects')}>PROJECTS</div>
        <div onClick={(() => goToPage('/contact'))} className={setActivePage('/contact')}>CONTACT</div>
      </div>
    </div>
  )
}

export default NavBar;