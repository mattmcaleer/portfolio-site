import { useEffect } from "react";
import Back from "./Back";

function About() {

  return (
    <div className="section-container">
      <Back />
      <div className="bio">
        I'm Matt, a full-stack software engineer based in Melbourne. I have experience in using Ruby/Ruby on Rails, JavaScript, React, HTML, CSS, PostgreSQL, Git.
      </div>
      <img className="bio-image" />
    </div>
  )
}

export default About;