import "./PopUp.scss"
import {useState,useEffect} from 'react'
import { faSadTear as cry,faFrown as sad, faMeh as meh, faSmile as smile, faLaughBeam as happy, faTimes as exit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FirstQuestion(props){
    return(<>
        <div>
            <h5>Hello! Thank you for being here.</h5>
            <h5>What are your interests?</h5>

            <div className="answer_1" onClick={()=>{props.set(1)}}>
                <div className={props.get === 1 ? "circle selected_answer" : "circle"}></div>
                <h5>Personal curiosity</h5>
            </div>

            <div className="answer_1" onClick={()=>{props.set(2)}}>
                <div className={props.get === 2 ? "circle selected_answer" : "circle"}></div>
                <h5>Professional curiosity</h5>
            </div>
        </div>

        </>)
}


function SecondQuestion(props){
    return(<>
        <div>
            <button><FontAwesomeIcon icon={exit} /></button>
            <h5>Thanks! </h5>
            <h5>How would you rate the website?</h5>

            <div className="rating">
                <div onClick={()=>{props.set(1)}}>
                    <FontAwesomeIcon icon={cry} />
                </div>
                <div onClick={()=>{props.set(2)}}>
                    <FontAwesomeIcon icon={sad} />
                </div>
                <div onClick={()=>{props.set(3)}}>
                    <FontAwesomeIcon icon={meh} />
                </div>
                <div onClick={()=>{props.set(4)}}>
                    <FontAwesomeIcon icon={smile} />
                </div>
                <div onClick={()=>{props.set(5)}}>
                    <FontAwesomeIcon icon={happy} />
                </div>

            </div>
        </div>
    </>)
}

export default function PopUp(props){

    const [question,setQuestion] = useState(1)
    const [firstAnswer,setFirstAnswer] = useState(null)
    const [secondAnswer,setSecondAnswer] = useState(null)

    const [translate,setTranslate] = useState("130")

    useEffect(()=>{
        if(firstAnswer){
            document.getElementById("popup-container").style.opacity='0';
            setTimeout(()=>{
                setQuestion(2)
                document.getElementById("popup-container").style.opacity='1';
            },500)

        }
        if(secondAnswer){
            setTimeout(()=>{
                setQuestion(3)
                document.getElementById("popup-container").style.opacity='1';
                props.sendFeedback(firstAnswer,secondAnswer)
                setTimeout(()=>{
                    document.getElementById("popup-container").style.opacity='0';
                },2000)
            },500)
        }

    },[firstAnswer,secondAnswer])

    useEffect(()=>{
        setTimeout(()=>{
            setTranslate("0")
        },1000)

    },[])

    return(<>
        <div id="popup-container" style={{"transform":`translateX(${translate}%)`}}>
            {
                question === 1 &&
                <FirstQuestion get={firstAnswer} set={setFirstAnswer}/>
            }

            {
                question === 2 &&
                <SecondQuestion get={secondAnswer} set={setSecondAnswer}/>
            }

            {
                question === 3 &&
                <div>
                    <h5>Thank you!</h5>
                </div>
            }
        </div>
        </>)
}