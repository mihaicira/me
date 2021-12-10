import {Canvas} from "@react-three/fiber";
import Dynamic from "../../Dynamic";
import {Suspense} from "react";
import {OrbitControls} from '@react-three/drei'


export default function DynamicContainer(){
    return(
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
        )
}

