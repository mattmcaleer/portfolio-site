import './App.css';
import Contact from './Components/Contact'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/contact" element={ <Contact /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
