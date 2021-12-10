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
            <p>heya</p>
        </div>
        </>)
}