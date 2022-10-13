import Back from "./Back";
import bioPic from '../Images/gerd-muller.jpeg'

function About() {

  return (
    <div className="section-container">
      <Back />
      <div className="bio-container">
        <div className="bio-heading">
          I'm Matt, a full-stack software engineer based in Melbourne.
          <p className="bio-text">
            I have experience in using Ruby/Ruby on Rails, JavaScript, React, HTML, CSS, PostgreSQL, Git.
          </p>
        </div>
        <img className="bio-image" src={bioPic} alt="matt"/>
      </div>
    </div>
  )
}

export default About;