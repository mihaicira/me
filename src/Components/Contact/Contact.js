import "./Contact.scss"
import HomeButton from "../HomeButton/HomeButton";
import {Suspense, useEffect, useState,useRef} from 'react';

export default function Contact(){
    const [pageOpacity,setPageOpacity] = useState(0)
    const element = useRef()


    useEffect(()=>{
        element.current.scrollIntoView()
        setTimeout(()=>{
            setPageOpacity(1)
        },250)
    },[])

    return(<>
        <div id="contact-page" className="subpage" ref={element} style={{"opacity":`${pageOpacity}`}}>
            <HomeButton page="contact-page"/>
            <h2>heya</h2>
        </div>
    </>)
}