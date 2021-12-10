import "./HomePage.scss"
import Dynamic from "../../Dynamic";
import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";


function HomePage() {
    return (
        <>
            <div className="dynamic-container">
                <Suspense fallback={<div style={{color:"red"}}>Loading... </div>}>
                    <Canvas>
                        {/*<OrbitControls />*/}

                        <ambientLight intensity={0.5}/>
                        <pointLight position={[5, 20, 30]} />
                        <camera/>

                        <Dynamic/>
                    </Canvas>
                </Suspense>
            </div>

            <div className="main-content-container">

                <div className="main-left-container">
                    <h1>Cîra Mihai</h1>
                    <h6>web developer</h6>
                    <h6>mobile developer</h6>
                    <h6>problem solver</h6>
                </div>

                <div className="main-navbar">
                    <button>About me</button>
                    <button>Projects</button>
                    <button>Skills</button>
                    <button>Contact</button>
                </div>
            </div>


        </>

    );
}

export default HomePage;
