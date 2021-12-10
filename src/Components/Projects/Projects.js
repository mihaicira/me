import './Projects.scss'
import HomeButton from "../HomeButton/HomeButton";
import PageTitle from "../PageTitle/PageTitle";
import ProjectsSVG from "./ProjectsSVG/ProjectsSVG";
import Choicezz from '../../assets/choicez.png'
import ClassroomLab from '../../assets/clab.png'
import CSF from '../../assets/csf.png'
import OfficeAssistant from '../../assets/OfficeAssistant.png'
import Snake from '../../assets/Snake.png'
import DataWalk from '../../assets/dataWalk.png'

export default function Projects(){
    return(<>
        <div id="projects-page">
            <HomeButton/>
            <PageTitle text="Projects"/>

            <ProjectsSVG/>


            <div className="projects-list">

                <button>  <img src={Choicezz} alt="img"/> </button>
                <button>  <img src={ClassroomLab} alt="img"/> </button>
                <button>  <img src={CSF} alt="img"/> </button>
                <button>  <img src={OfficeAssistant} alt="img"/> </button>
                <button>  <img src={Snake} alt="img"/> </button>
                <button>  <img src={DataWalk} alt="img"/> </button>

            </div>

            <div className="selected-project">
                <img src={DataWalk} alt="img"/>
                <h2>Datawalk Landing Page</h2>
                <h5>Website</h5>
                <h5>Link: <a href="wdarf">Datawalk Landing Page</a></h5>
                <p>This project is a single-page website built with React. I was told what the page should contain and I had to put it all together using my own UI design idea.</p>
            </div>
        </div>

        </>)
}