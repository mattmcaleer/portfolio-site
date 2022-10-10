import './App.css';
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects';
import About from './Components/About';
import githubLogo from './Images/GitHub-Mark-64px.png'
import linkedinLogo from './Images/LI-In-Bug.png'
import Home from './Components/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
