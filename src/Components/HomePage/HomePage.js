import "./HomePage.scss"
import Dynamic from "../../Dynamic";
import {Suspense,useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {useNavigate} from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
    const [leftTranslate,setLeftTranslate] = useState(0)
    const [rightTranslate,setRightTranslate] = useState(0)
    const [modelTranslate,setModelTranslate] = useState(0)

    const changePageHandler = (newpage) =>{
        setLeftTranslate(-100)
        setRightTranslate(130)
        setModelTranslate(-100)
        setTimeout(()=>{
            navigate(newpage)

        },1000)
    }

    return (
        <>
            <div className="dynamic-container" style={{"transform":`translateY(${modelTranslate}%)`}}>
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

                <div className="main-left-container" style={{"transform":`translateX(${leftTranslate}%)`}}>
                    <h1>Cîra Mihai</h1>
                    <h6>web developer</h6>
                    <h6>mobile developer</h6>
                    <h6>problem solver</h6>
                </div>

                <div className="main-navbar" style={{"transform":`translateX(${rightTranslate}%)`}}>
                    <button onClick={()=>{changePageHandler('/about')}}>About me</button>
                    <button onClick={()=>{changePageHandler('/projects')}}>Projects</button>
                    <button onClick={()=>{changePageHandler('/skills')}}>Skills</button>
                    <button onClick={()=>{changePageHandler('/contact')}}>Contact</button>
                </div>
            </div>


        </>

    );
}

export default HomePage;
