import "./AboutMe.scss"
import HomeButton from "../HomeButton/HomeButton";
import PageTitle from "../PageTitle/PageTitle";
import AboutMeSVG from "./AboutMeSVG/AboutMeSVG";
import Mihai from "../../assets/about-me-mihai.png"
import {useEffect,useState} from 'react'

export default function AboutMe(){

    const [pageOpacity,setPageOpacity] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setPageOpacity(1)
        },250)

    },[])

    return(
        <>
            <div id="about-me-page" style={{"opacity":`${pageOpacity}`}}>
                <HomeButton/>
                <PageTitle text="About me"/>

                <AboutMeSVG/>

                <div className="white-section">
                    <div>
                        <h5>$whoami</h5>
                        <p>
                            A highly motivated 3rd year Computer Science student. I have been coding since highschool, building a great variety of programs and games using C++ or Python. I participated in the Zero Robotics Competition and managed to qualify in the semi-finals, with my team made up of fellow classmates. Until recently I have taught Python language to a group of 9th grade students. I am an open-minded person whose main objective is to wide up his domain of knowledge and keep up with the most used technology. I enjoy talking to people and working with them, discussing stuff and solving issues together. At the moment you're reading this I am looking for a job to help me grow professionally.
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