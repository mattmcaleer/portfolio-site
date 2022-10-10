import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {

  return (
    <>
      <div className="section-container">
        <li>
          <Link to='about' className="section-link">ABOUT</Link>
        </li>
        <li>
          <Link to='projects' className="section-link">PROJECTS</Link>
        </li>
        <li>
          <Link to='contact' className="section-link">CONTACT</Link>
        </li>
      </div>
      <div className="title">
        <h1>Mattt McAleer</h1>
        <div className="main-subheading">Full-Stack Developer</div>
      </div>
    </>
  )
}

export default Home;