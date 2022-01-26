import "./AboutMe.scss"
import HomeButton from "../HomeButton/HomeButton";
import PageTitle from "../PageTitle/PageTitle";
import AboutMeSVG from "./AboutMeSVG/AboutMeSVG";
import Mihai from "../../assets/about-me-mihai.png"
import {useEffect,useState,useRef} from 'react'
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin,faFacebook,faTwitter,faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function AboutMe(){

    const [pageOpacity,setPageOpacity] = useState(0)
    useEffect(()=>{
        document.title = 'Mihai\'s Website - About me ✌';
        element.current.scrollIntoView()
        setTimeout(()=>{
            setPageOpacity(1)
        },250)
    },[])

    const element = useRef()

    return(
        <>
            <div id="about-me-page" style={{"opacity":`${pageOpacity}`}} ref={element} className="subpage">
                <HomeButton page="about-me-page"/>
                <PageTitle text="About me"/>

                <AboutMeSVG/>

                <div className="white-section">
                    <div>
                        <h5>$whoami</h5>
                        <p>
                            A highly motivated 3rd-year Computer Science student looking for experience to learn, be challenged, and develop my skills.
                            I have been coding since high school, building a great variety of programs, such as Sudoku solvers and various games using C++ or Python.
                            I participated in the Zero Robotics Competition and managed to qualify in the semi-finals, with my team made up of fellow classmates.
                            At the beginning of 2020, I have taught Python language to a group of 9th-grade students.
                            I have experience in web development, mobile development, and software development and I'm mainly interested in finding a junior position as a web developer
                            that will take advantage of my acknowledgment and help me grow professionally. I am involved in many web projects and I'm looking forwards to being part of as many interesting projects as I can.
                        </p>
                    </div>

                    <img src={Mihai} alt="mihai-pic"/>
                </div>

                <div className="green-section">
                    <div>
                        <h5>$pwd</h5>
                        <p>Country: Romania</p>
                        <p>City: Timișoara</p>
                        <p>Nationality: [ro] Romanian</p>
                        <p>Date of birth: 29 May 2000</p>
                    </div>

                    <div>
                        <h5>$education</h5>
                        <p>Highschool: Carmen Sylva College</p>
                        <p className="smaller">Specialization: Mathematics and Computer Science</p>
                        <p className="smaller">September 2015 - July 2019</p>
                        <br/>
                        <p>University: West University of Timișoara</p>
                        <p className="smaller">Faculty: Faculty of Mathematics and Computer Science</p>
                        <p className="smaller">Specialization: Computer Science</p>
                        <p className="smaller">September 2019 - present</p>

                    </div>
                </div>

                <div className="white-section">
                    <div>
                        <h5>$experience</h5>

                        <p>Mobile Development (Internship) at [e-spres-oh] </p>
                        <p>from August 2020 to December 2020</p>
                        <p>Web Developer (Volunteer) at Classroom Laboratory (UVT) </p>
                        <p>from November 2019 to present</p>
                    </div>

                </div>

                <div className="green-section">

                    <div className="long-green">
                        <h5>$social</h5>

                        <section id="social-container">
                            <a href='https://www.linkedin.com/in/mihai-cira-714a181b3/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='https://www.facebook.com/mihai.cira.7' target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href='https://twitter.com/mihai291291' target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='https://github.com/mihaicira' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </section>

                    </div>
                </div>
            </div>

        </>
    )
}