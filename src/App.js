import './App.scss'
import HomePage from "./Components/HomePage/HomePage";
import AboutMe from "./Components/AboutMe/AboutMe";
import {Routes, Route} from 'react-router-dom';
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import PopUp from "./Components/popUp/PopUp";
import emailjs from "emailjs-com";
import {useState,useEffect} from 'react';

export default  function App() {

    const [popUp,setPopUp] = useState(false)


    function sendFeedback(rating){

        switch(rating){
            case 1:
                rating = `cry (${rating}/5)`
                break;
            case 2:
                rating = `sad (${rating}/5)`
                break;
            case 3:
                rating = `meh (${rating}/5)`
                break;
            case 4:
                rating = `smile (${rating}/5)`
                break;
            case 5:
                rating = `happy (${rating}/5)`
                break;
            default:
                rating = "unknown case"
        }

        //Send email
        const date = new Date()
        emailjs.send("service_rzi5f25","template_316m40g",{
            rating: rating,
            date: date.toString()
        },'user_T4jIQ0R5325FA0lZ8gMtO');

        localStorage.setItem("feedback","yes")
    }

    useEffect(()=>{
        if(!localStorage.getItem("feedback"))
            setTimeout(()=>{
                setPopUp(true)
            },10*1000)
    },[])

  return (
      <>
          {
              popUp && <PopUp sendFeedback={sendFeedback}/>
          }


          <Routes>
              <Route path="/" exact element={<HomePage/>}/>
              <Route path="/about" exact element={<AboutMe/>}/>
              <Route path="/projects" exact element={<Projects/>}/>
              <Route path="/skills" exact element={<Skills/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
          </Routes>


      </>

  );
}

