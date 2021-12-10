// import {Canvas} from "@react-three/fiber";
// import {Suspense} from 'react';
// import HomePage from "./Components/HomePage/HomePage";
// import DynamicContainer from "./Components/Dynamic/DynamicContainer";
import './App.scss'
import HomePage from "./Components/HomePage/HomePage";
import StarfieldAnimation from "react-starfield-animation";

export default  function App() {
  return (
      <>
          <StarfieldAnimation
              style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%'
              }}
              lineWidth={3}
              numParticles={500}
          />
          <HomePage/>
      </>

  );
}

