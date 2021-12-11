import "./Contact.scss"
import HomeButton from "../HomeButton/HomeButton";
import {useEffect, useState,useRef} from 'react';
import PageTitle from "../PageTitle/PageTitle";
import emailjs from "emailjs-com";

export default function Contact(){
    const [pageOpacity,setPageOpacity] = useState(0)
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [sent,setSent] = useState()
    const element = useRef()


    useEffect(()=>{
        element.current.scrollIntoView()
        setTimeout(()=>{
            setPageOpacity(1)
        },250)
    },[])

    const handleForm = (e)=>{
        if(message !== '' && email !== ''){
            e.preventDefault()
            const date = new Date()

            setSent(true)

            //Send email
            emailjs.send("service_rzi5f25","template_58vtlaj",{
                email: email,
                message: message,
                date: date.toString()
            },'user_T4jIQ0R5325FA0lZ8gMtO');
        }
    }

    return(<>
        <div id="contact-page" className="subpage" ref={element} style={{"opacity":`${pageOpacity}`}}>
            <HomeButton page="contact-page"/>
            <PageTitle text="Contact"/>
            <h3>Complete the form below or send me an email at <a href="mailto:ciramihai291@gmail.com">ciramihai291@gmail.com</a></h3>

            <div>
                <form onSubmit={handleForm} id="contact-form">
                    {
                        !sent &&
                            <>
                                <label>Your name</label>
                                <input type="text" onChange={e=>setEmail(e.target.value)} required/>

                                <label>Your name</label>
                                <textarea  onChange={e=>setMessage(e.target.value)} required/>

                                <button>Submit</button>
                            </>
                    }
                    {
                        sent &&
                            <h2>Your message has been sent. Thank you!</h2>
                    }

                </form>
            </div>
        </div>
    </>)
}