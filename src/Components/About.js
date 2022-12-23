import Back from "./Back";
import bioPic from '../Images/IMG-9123.jpeg'

function About() {

  return (
    <div className="section-container">
      <Back />
      <div className="bio-container">
        <h2 className="bio-heading">I'm Matt, a full-stack software developer.</h2>
        <img className="bio-image" src={bioPic} alt="matt"/>
        <p className="bio-text">
            <b>My tech-stack includes:</b>
            <ul>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>NodeJs</li>
              <li>ExpressJS</li>
            </ul>
            <h2 className="bio-footer">Please feel free to drop me an <a href="mailto:mattmcaleer3@gmail.com" className="inline-ext-link">email</a> for any enquiries!</h2>
        </p>
      </div>
    </div>
  )
}

export default About;