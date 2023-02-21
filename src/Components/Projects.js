import { useEffect } from "react";
import NavBar from './NavBar';
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Navigation]);

function Projects({setPreload}) {
  useEffect(() => setPreload());

  return (
    <>
      <NavBar />
      <div className="section-container">
        <div className="projects">
        <Swiper
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          }}
          navigation={true}
          className="swiper"
        >
          <SwiperSlide>
            <div className="project">
              <h2>
                <a href="https://trip-journal.herokuapp.com" className="ext-link" target="_blank" rel="noreferrer">Trip Journal</a>
              </h2>
              <p>
                Keep a holiday journal.<br/>
                <i>Tech Used:
                  <li>Ruby on Rails</li>
                  <li>PostgreSQL</li>
                </i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <h2>
                <a href="https://mattmcaleer.github.io/tasker/" className="ext-link" target="_blank" rel="noreferrer">Tasker</a>
              </h2>
              <p>
                Because the world needed another task management app.<br/>
                <i>Tech Used:
                  <li>React</li>
                </i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <h2>
                Itinerant <i>(Under Maintenance)</i>
              </h2>
              <p>
                Plan your travel itineraries.<br/>
                <i>
                  Tech Used:
                  <li>Ruby on Rails</li>
                  <li>PostgreSQL</li>
                  <li>React</li>
                </i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <h2>
                <a href="https://rubygems.org/gems/fender_guitar_catalogue" className="ext-link" target="_blank" rel="noreferrer">Fender Guitar Catalogue</a>
              </h2>
              <p>
                Browse Fender's guitar catalogue.<br/>
                <i>Tech Used:
                  <li>Ruby</li>
                </i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <h2>
                <a href="https://bundesliga-fixtures-results.herokuapp.com/" className="ext-link" target="_blank" rel="noreferrer">Bundesliga Fixtures & Results</a>
              </h2>
              <p>
                Explore past and future Bundesliga results and fixtures.<br/>
                <i>Tech Used:
                  <li>React</li>
                </i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <h2>
                <a href="https://mattmcaleer.github.io/astronomy-image-randomiser/" className="ext-link" target="_blank" rel="noreferrer">Astronomy Image Randomiser</a>
              </h2>
              <p>
                View random astronomy images.<br/>
                <i>Tech Used:
                  <li>JavaScript</li>
                </i>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
          





        </div>
      </div>
    </>
  )
}

export default Projects;