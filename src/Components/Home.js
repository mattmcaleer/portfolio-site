import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <div className="home-container">
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
        <h1>Matt McAleer</h1>
        <div className="main-subheading">Software Developer</div>
      </div>
    </>
  )
}

export default Home;