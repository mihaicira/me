import "./Skills.scss"
import HomeButton from "../HomeButton/HomeButton";
import {useEffect, useState,useRef} from 'react';
import PageTitle from "../PageTitle/PageTitle";
import Shapes from "./Shapes";
import {Canvas} from "@react-three/fiber";
import SkillsSVG from "./SkillsSVG/SkillsSVG";



export default function Skills(){
    const [pageOpacity,setPageOpacity] = useState(0)
    const element = useRef()


    useEffect(()=>{
        document.title = 'Mihai\'s Website - Skills ✌';
        element.current.scrollIntoView()
        setTimeout(()=>{
            setPageOpacity(1)
        },250)
    },[])

    return(<>
        <div id="skills-page" className="subpage" ref={element} style={{"opacity":`${pageOpacity}`}}>
            <HomeButton page="skills-page"/>
            <PageTitle text="Skills"/>

            <SkillsSVG/>

            <div id="skills-cube">
                <Canvas>
                    <Shapes/>
                </Canvas>
            </div>
            <div className="skills-container">
                <div>
                    <h3>Web development</h3>
                    <div>
                       <h4> World Wide Web structuring: HTML</h4>
                       <h4>HTML Format: CSS, SASS</h4>
                       <h4>Programming language: JavaScript</h4>
                       <h4>User Interface JS Library: React (State, Context, Redux, Hooks, Styled components, Class / Functional components, Router, React Three Fiber [3D Modelling])</h4>
                       <h4>APIs / Tools: Google Firebase, Google Analytics</h4>
                       <h4>Back-end development: Node.js</h4>
                       <h4>Other JS libraries: jQuery</h4>
                       <h4>Other web technologies: TCP, UDP, HTTP Requests</h4>
                    </div>
                </div>

                <div>
                    <h3>Software engineering</h3>
                    <div>
                        <h4> Object-oriented programming languages:
                            <ul>
                                <li>Python;</li>
                                <li>Java;</li>
                                <li>Javascript;</li>
                                <li>C++;</li>
                                <li>Ruby;</li>
                            </ul></h4>
                        <h4> Procedure oriented programming language: C;</h4>
                        <h4> Expression oriented programming languages (Functional programming): <ul>
                            <li>CLISP;</li>
                            <li>Jess;</li>
                        </ul></h4>
                        <h4> Scientific programming language: R;</h4>
                    </div>
                </div>

                <div>
                    <h3>Mobile development</h3>
                    <div>
                        <h4> iOS Development:
                            <ul>
                                <li>Swift;</li>
                                <li>SwiftUI Library;</li>
                                <li>Firebase iOS SDK;</li>
                                <li>NextStep UserDefaults;</li>
                            </ul></h4>
                    </div>
                </div>
            </div>
        </div>
        </>)
}