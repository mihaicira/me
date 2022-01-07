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
import RickAndMorty from '../../assets/rickandmorty.png'
import Remigoo from '../../assets/remigoo.png'
import {useState,useRef,useEffect} from 'react'

function Project(props){
    return(<>
        <img src={props.image} alt="img"/>
        <h2>{props.name}</h2>
        <h5>{props.type}</h5>
        {
            props.link &&
            <h5>Link: <a href={`${props.link}`} target="_blank" rel="noreferrer">{props.name}</a></h5>
        }

        <p>{props.text1 ? props.text1 : ""}</p>
        <p>{props.text2 ? props.text2 : ""}</p>
        <p>{props.text3 ? props.text3 : ""}</p>
        </>)
}

export default function Projects(){

    const Hardcoded_Projects = [
        {
            name: "Rick and Morty Characters",
            image: RickAndMorty,
            type: "Website (ReactJS Application)",
            link: "https://mihaicira.github.io/rick-and-morty/",
            text1: "The main purpose of the website is to present all characters from Rick and Morty TV Series. The user is able to search the characters by their name and filter by their status: dead, alive, unknown or all.",
            text2: " The user recieves the results as pages, being able to navigate through them. One page displays a maximum of 20 characters. Each character is has its own page where the user can find more informations about him. It's also possible for the user to share the URL of any character by clicking on the clipboard icon that can be found both on the searching page and his own detailed page."
        },
        {
            name: "Center of Francophone Studies",
            image: CSF,
            type: "Website",
            link: "https://csf.uvt.ro/",
            text1: "The Center of Francophone Studies aims to carry out a comprehensive and coherent research program in the field of francophonie from the perspective of interculturality and interdisciplinarity.",
            text2:"The project has been built by a team of six people whose team leader was me. The project subject belongs to the Faculty of Letters, History and Theology within West University of Timisoara. We developed the product via a patnership between that faculty and my faculty, within a certain subject matter.",
            text3:"The website is a complex online platform that manages some processes that in the past have been dealt with manually. It has plenty of systems, such as a user account system based on roles, each role having its responsabilities."
        },
        {
            name: "Remigoo",
            image: Remigoo,
            type: "Website",
            link: "https://remigoo.herokuapp.com/",
            text1: "Remigoo is a web-based appointment system website that operates as a third party for a fictional cinema.",
            text2: "It has been created in 2021-2022 by three students, a team which I led. Users can create their own accounts if they want to, book tickets to certain movies and visualize their history on their profile page.",
            text3: "The online website (the link above) does not have the server linked to it, that's why the main functionality doesnt work. Though, you can press the \"How to book a ticket\" button to see the main functionalities. Check out the 404 page too, it's kinda cool: https://remigoo.herokuapp.com/somerandomstuff"
        },
        {
            name: "Classroom Laboratory",
            image: ClassroomLab,
            type: "Website",
            link: "https://classroomlab.uvt.ro/",
            text1: "Classroom Laboratory is a classroom where selected courses are taught, an infrastructure for conducting experiments in teaching and methodology methods, and finally an arena for collaboration between students, teachers, researchers and the world of work.",
            text2: "It is a front-end website only, which I built alone, as a volunteer, for the Faculty of Sociology and Psychology (West University of Timișoara).When needed, I am called to update stuff on the website."
        },
        {
            name: "Datawalk Landing Page",
            image: DataWalk,
            type: 'Website',
            link: 'https://mihaicira.github.io/DatawalkLP/',
            text1: 'This project is a single-page website built with React. I was told what the page should contain and I had to put it all together using my own UI design idea.',
        },
        {
            name: "Choiceezz",
            image: Choicezz,
            type: "Mobile web application (ReactJS app)",
            link: "https://mihaicira.github.io/Choicezz/",
            text1: "Choicezz is the ezz way to make a choice. It's the perfect mobile application when you can't decide either to eat some Burger King, Tacobell or Mc Donald's. With Choicezz you can let the Gods decide for you when you have to choose between food, movies and barely anything. You can create your own lists of objects and even save them for the next visit.",
            text2: "Choicezz is a project that I've built alone from scratch while trying to learn ReactJS. I also needed a mobile application for a subject matter at University, so a mobile web application that uses ReactJS was the best ideea."
        },
        {
            name: "Office Assistant",
            image: OfficeAssistant,
            type: "iOS Native application",
            text1: "If you're the CEO of a small business and the pandemic affected your employees, this application might be the one you need. Office Assistant lets your employee to sign up for going to office whenever they need to, respecting the following rule: In one day there can be maximum 5 employees at the office. That way, in case someone gets sick, you can easily acces the day that he went at work and check who else worked at office that day. Even more, employees can add a profile picture with their own accounts.",
            text2: "Office Assistant is an application that I've built during my Mobile Development Internship at [e-spres-oh]. I also used it at University for a certain subject matter. Building this project I've learnt how mobile applications work and the issues that might occur."
        },
        {
            name: "Web Snake Game",
            image: Snake,
            type: "Website",
            link: "https://mihaicira.github.io/Snake/",
            text1: "The Snake Game was my first interactive web application, which I've built from scratch using plain JavaScript. The reason I didn't use any other framework or SDK is not that it wouldn't have been a great ideea, because it would have certainly been - but I had no clue what JavaScript frameworks are and how they work.",
            text2: "Building up this little game I learnt what DOM is, what classes and IDs are and I even learnt some CSS when I needed to do some transitions."
        }
        // name: "test",
        // image: "test",
        // type: "test",
        // link: "test",
        // text1: "test"
    ]

    const [chosenProject,chooseProject] = useState(null)
    const [pageOpacity,setPageOpacity] = useState(0)
    const project = useRef(null)
    const element = useRef()

    useEffect(()=>{
        document.title = 'Mihai\'s Website - Projects ✌';
        element.current.scrollIntoView()
        setTimeout(()=>{
            setPageOpacity(1)
        },250)
    },[])

    const handleProjectClick = (idx) =>{
        chooseProject(idx)

        setTimeout(()=>{
            project.current.scrollIntoView()
        },200)

    }

    return(<>
        <div id="projects-page" ref={element} style={{"opacity":`${pageOpacity}`}} className="subpage">
            <HomeButton page="projects-page"/>
            <PageTitle text="Projects"/>

            <ProjectsSVG/>


            <div className="projects-list">
                {
                    Hardcoded_Projects.map((elem,idx)=><button onClick={()=>{handleProjectClick(idx)}} key={'project-'+elem.name}>
                            <img src={elem.image} alt="img"/>
                        </button>)
                }

                {/*<button>  <img src={Choicezz} alt="img"/> </button>*/}
                {/*<button>  <img src={ClassroomLab} alt="img"/> </button>*/}
                {/*<button>  <img src={CSF} alt="img"/> </button>*/}
                {/*<button>  <img src={OfficeAssistant} alt="img"/> </button>*/}
                {/*<button>  <img src={Snake} alt="img"/> </button>*/}
                {/*<button>  <img src={DataWalk} alt="img"/> </button>*/}

            </div>

                {chosenProject !== null &&
                <div className="selected-project" ref={project}>
                    <Project
                        image={Hardcoded_Projects[chosenProject].image}
                        name={Hardcoded_Projects[chosenProject].name}
                        type={Hardcoded_Projects[chosenProject].type}
                        link={Hardcoded_Projects[chosenProject].link}
                        text1={Hardcoded_Projects[chosenProject].text1}
                        text2={Hardcoded_Projects[chosenProject].text2}
                        text3={Hardcoded_Projects[chosenProject].text3}
                    />

                </div>

                }


        </div>

        </>)
}