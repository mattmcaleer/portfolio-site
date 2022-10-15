import Back from "./Back";

function Projects() {
  return (
    <div className="section-container">
      <Back/>
      <div className="projects">
      <div className="project">
        <h2>
          <a href="https://github.com/mattmcaleer/trip-journal" className="ext-link" target="_blank" rel="noreferrer">Trip Journal</a>
        </h2>
        <p>
          Keep a holiday journal.<br/>
          <i>Built with Ruby on Rails.</i>
        </p>
      </div>
      <div className="project">
        <h2>
          Itinerant <i>(<a href="https://github.com/mattmcaleer/itinerant-frontend" className="inline-ext-link" target="_blank" rel="noreferrer">Frontend code</a>/<a href="https://github.com/mattmcaleer/itinerant-backend" className="inline-ext-link" target="_blank" rel="noreferrer">Backend code</a>)</i>
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
          View past and future Bundesliga results and fixtures.<br/>
          <i>Built with React.</i>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Projects;