import {Canvas} from "@react-three/fiber";
import {Suspense} from 'react';
import HomePage from "./Components/HomePage/HomePage";
import DynamicContainer from "./Components/Dynamic/DynamicContainer";
import Dynamic from "./Dynamic";

export default  function App() {
  return (
      <>
          <Suspense fallback={<div style={{color:"red"}}>Loading... </div>}>
              <Canvas>
                  {/*<OrbitControls />*/}

                  <ambientLight intensity={0.5}/>
                  <pointLight position={[5, 20, 30]} />
                  <camera/>

                  <Dynamic/>
              </Canvas>
          </Suspense>
      </>

  );
}

