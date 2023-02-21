import bioPic from '../Images/IMG-9123.jpeg'
import NavBar from './NavBar';
import { useEffect } from 'react';

function About({setPreload}) { 
  useEffect(() => setPreload());

  return (
    <>
      <NavBar/>
      <div className="section-container">
        <div>I'm Matt, a full-stack software developer.</div>
        <img className="bio-image" src={bioPic} alt="bio-image"/>
        <div>
          My tech-stack includes:
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
        </div>
        <div>Please feel free to drop me an <a href="mailto:mattmcaleer3@gmail.com" className="inline-ext-link">email</a> for any enquiries!</div>
      </div>
    </>
  )
}

export default About;