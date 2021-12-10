import './Projects.scss'
import HomeButton from "../HomeButton/HomeButton";
import PageTitle from "../PageTitle/PageTitle";
import ProjectsSVG from "./ProjectsSVG/ProjectsSVG";
import Choicezz from '../../assets/choicez.png'
import ClassroomLab from '../../assets/clab.png'
import CSF from '../../assets/csf.png'
import OfficeAssistant from '../../assets/OfficeAssistant.png'
import Snake from '../../assets/Snake.png'
import dataWalk from '../../assets/dataWalk.png'

// function Project({props}){
//     return(<>
//
//         </>)
// }


export default function Projects(){
    return(<>
        <div id="projects-page">
            <HomeButton/>
            <PageTitle text="Projects"/>

            <ProjectsSVG/>


            <div className="projects-list">

                <button>  <img src={Choicezz}/> </button>
                <button>  <img src={ClassroomLab}/> </button>
                <button>  <img src={CSF}/> </button>
                <button>  <img src={OfficeAssistant}/> </button>
                <button>  <img src={Snake}/> </button>
                <button>  <img src={dataWalk}/> </button>

            </div>

            <div className="selected-project">
                <img src={dataWalk}/>
                <h2>Datawalk Landing Page</h2>
                <h5>Website</h5>
                <h5>Link: <a href="">Datawalk Landing Page</a></h5>
                <p>This project is a single-page website built with React. I was told what the page should contain and I had to put it all together using my own UI design idea.</p>
            </div>
        </div>

        </>)
}