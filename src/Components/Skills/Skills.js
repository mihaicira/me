import "./Skills.scss"
import HomeButton from "../HomeButton/HomeButton";
import {useEffect, useState,useRef} from 'react';
import PageTitle from "../PageTitle/PageTitle";
import Shapes from "./Shapes";
import {Canvas} from "@react-three/fiber";
import { MorphReplace } from 'react-svg-morph';
import Elephant from "./Svgs/Elephant";
import Cow from "./Svgs/Cow";
import Cat from "./Svgs/Cat";
import Monkey from "./Svgs/Monkey";
import Dog from "./Svgs/Dog";
import Crocodile from "./Svgs/Crocodile";



export default function Skills(){
    const [pageOpacity,setPageOpacity] = useState(0)
    const element = useRef()

    const [idx,setIdx] = useState(0)

    const Animals = [
        <Elephant key="elephant"/>,
        <Cow key="cow"/>,
        <Cat key="cat"/>,
        <Monkey key="monkey"/>,
        <Dog key="dog"/>,
        <Crocodile key="crocodile"/>]

    useEffect(()=>{
        element.current.scrollIntoView()
        setTimeout(()=>{
            setPageOpacity(1)
        },250)
    },[])

    return(<>
        <div id="skills-page" className="subpage" ref={element} style={{"opacity":`${pageOpacity}`}}>
            <HomeButton page="skills-page"/>
            <PageTitle text="Skills"/>

            <div onClick={()=>{setIdx((idx+1)%6)}} id="morph-container">
                <MorphReplace width={400} height={500}>
                    {/*{checked ? <Elephant key="checked" /> : <Cow key="checkbox" />}*/}
                    {
                        Animals[idx]
                    }
                </MorphReplace>
            </div>

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
                       <h4> User Interface JS Library: React (State, Context, Redux, Hooks, Styled components, Class / Functional components, Router)</h4>
                       <h4> Other JS libraries: JQuery</h4>
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
                        <h4> Expression oriented programming languages: <ul>
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