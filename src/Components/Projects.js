import Back from "./Back";

function Projects() {
  return (
    <div className="section-container">
      <Back/>
      <div>
        <h2>Itinerant</h2>
        A web application that allows users to plan itineraries for upcoming trips and holidays. The frontend is written in React/Redux, while the backend is written in Ruby on Rails with a PostgreSQL database.
      </div>
      <div>
        <h2>Trip Journal</h2>
        A web application written using Ruby on Rails that allows users to keep a journal of trips and holidays. 
      </div>
      <div>
        <h2>Astronomy Image Randomiser</h2>
        A simple image randomiser web application written in plain JavaScript.
      </div>
      <div>
        <h2>Bundesliga Fixtures & Results</h2>
        A simple web application written using React for viewing match results and details in the Bundesliga (the German national football league).
      </div>
      <div>
        <h2>Fender Guitar Catalogue</h2>
        A simple CLI application written in Ruby using data scraped from the Fender musical instruments website.
      </div>
    </div>
  )
}

export default Projects;