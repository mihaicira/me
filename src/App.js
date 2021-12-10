import {Canvas} from "@react-three/fiber";
import {Suspense} from 'react';
import HomePage from "./Components/HomePage/HomePage";
import DynamicContainer from "./Components/Dynamic/DynamicContainer";

export default  function App() {
  return (
      <>
          <DynamicContainer/>
      </>

  );
}

