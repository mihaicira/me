import "./Skills.scss"
import HomeButton from "../HomeButton/HomeButton";
import {useEffect, useState,useRef} from 'react';
import PageTitle from "../PageTitle/PageTitle";

export default function Skills(){
    const [pageOpacity,setPageOpacity] = useState(0)
    const element = useRef()


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
                    <h3>Web development</h3>
                    <div>
                        <h4> World Wide Web structuring: HTML</h4>
                        <h4>HTML Format: CSS, SASS</h4>
                        <h4>Programming language: JavaScript</h4>
                        <h4> User Interface JS Library: React (State, Context, Redux, Hooks, Styled components, Class / Functional components, Router)</h4>
                        <h4> Other JS libraries: JQuery</h4>
                    </div>
                </div>
            </div>
        </div>
        </>)
}