import Back from "./Back";
import React, { useEffect } from 'react';

function Projects() {
  return (
    <>
    <Back/>
    <div className="section-container">
      <div className="projects">
      <div className="project">
        <h2>
          <a href="https://trip-journal.herokuapp.com" className="ext-link" target="_blank" rel="noreferrer">Trip Journal</a>
        </h2>
        <p>
          Keep a holiday journal.<br/>
          <i>Built with Ruby on Rails & PostgreSQL.</i>
        </p>
      </div>
      <div className="project">
        <h2>
          <a href="https://mattmcaleer.github.io/tasker/" className="ext-link" target="_blank" rel="noreferrer">Tasker</a>
        </h2>
        <p>
            Because the world needed another task management app.<br/>
          <i>Built with React.</i>
        </p>
      </div>
      <div className="project">
        <h2>
          Itinerant <i>(Under Maintenance)</i>
        </h2>
        <p>
          Plan your travel itineraries.<br/>
          <i>Built with Ruby on Rails, React & PostgreSQL.</i>
        </p>
      </div>
      <div className="project">
        <h2>
          <a href="https://rubygems.org/gems/fender_guitar_catalogue" className="ext-link" target="_blank" rel="noreferrer">Fender Guitar Catalogue</a>
        </h2>
        <p>
          Browse Fender's guitar catalogue.<br/>
          <i>Built with Ruby.</i>
        </p>
      </div>
      <div className="project">
        <h2>
          <a href="https://mattmcaleer.github.io/astronomy-image-randomiser/" className="ext-link" target="_blank" rel="noreferrer">Astronomy Image Randomiser</a>
        </h2>
        <p>
          View random astronomy images.<br/>
          <i>Built with JavaScript.</i>
        </p>
      </div>
      <div className="project">
        <h2>
          <a href="https://bundesliga-fixtures-results.herokuapp.com/" className="ext-link" target="_blank" rel="noreferrer">Bundesliga Fixtures & Results</a>
        </h2>
        <p>
          Explore past and future Bundesliga results and fixtures.<br/>
          <i>Built with React.</i>
        </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Projects;