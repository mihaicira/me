import Dynamic from "../../Dynamic";
import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";


function HomePage() {
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
            <h2>lol hi</h2>


        </>

    );
}

export default HomePage;
