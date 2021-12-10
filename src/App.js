import './App.scss'
import HomePage from "./Components/HomePage/HomePage";
import AboutMe from "./Components/AboutMe/AboutMe";
import StarfieldAnimation from "react-starfield-animation";
import {Routes, Route} from 'react-router-dom';
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

export default  function App() {
  return (
      <>
          <StarfieldAnimation
              style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex:'-100'
              }}
              lineWidth={3}
              numParticles={500}
          />

          <Routes>
              <Route path="/" exact element={<HomePage/>}/>
              <Route path="/about" exact element={<AboutMe/>}/>
              <Route path="/projects" exact element={<Projects/>}/>
              <Route path="/skills" exact element={<Skills/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
      </>

  );
}

