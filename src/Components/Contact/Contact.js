import "./Contact.scss"
import HomeButton from "../HomeButton/HomeButton";
import {useEffect, useState,useRef} from 'react';
import PageTitle from "../PageTitle/PageTitle";

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
            <PageTitle text="Contact"/>
            <h2>heya</h2>
        </div>
    </>)
}