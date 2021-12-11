import "./AboutMe.scss"
import HomeButton from "../HomeButton/HomeButton";
import PageTitle from "../PageTitle/PageTitle";
import AboutMeSVG from "./AboutMeSVG/AboutMeSVG";
import Mihai from "../../assets/about-me-mihai.png"
import {useEffect,useState,useRef} from 'react'

export default function AboutMe(){

    const [pageOpacity,setPageOpacity] = useState(0)
    useEffect(()=>{
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
                            A highly motivated 3rd year Computer Science student looking for
                            experience to learn, be challenged and develop my skills. I have been
                            coding since highschool, building a great variety of programs, such as
                            Sudoku solvers and various games using C++ or Python. I participated
                            in the Zero Robotics Competition and managed to qualify in the semifinals, with my team made up of fellow classmates. I have taught Python
                            language to a group of 9th grade students. Beside that, I am a web
                            development enthusiast who enjoys creating interesting UI and UX
                            designs. I am also currently involved in some university web projects as
                            a full-stack developer, being the team leader of a bigger project at my
                            university.

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
            </div>

        </>
    )
}