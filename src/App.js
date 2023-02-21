import './App.css';
import Contact from './Components/Contact'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects';
import About from './Components/About';

function App() {

  const setPreload = () => {
    document.body.className="preload";

    setTimeout(() => {
      document.body.className="";
    }, 1000);
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={ <About setPreload={setPreload} /> } />
          <Route exact path="/projects" element={ <Projects setPreload={setPreload} /> } />
          <Route exact path="/contact" element={ <Contact setPreload={setPreload} /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
