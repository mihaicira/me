import './Perks.scss';
import './PerksAnimation.scss'
import Brave from '../../../assets/brave.png'
import Frank from '../../../assets/frank.png'
import Empathetic from '../../../assets/empathetic.png'
import Passionate from '../../../assets/passionate.png'
import Teamplayer from '../../../assets/teamplayer.png'

import {useEffect} from 'react';

export default function Perks(){

    let played = false;
    function checkScroll(){
        const IDs = ["P1","P2","P3","P4",
            "E1","E2","E3","E4",
            "R1","R2","R3","R4","R5",
            "K1","K2","K3",
            "S1","S2","S3","S4","S5"]

        if(window.scrollY >= 100 && !played){
            played = true;
            for(let id of IDs)
                document.getElementById(`${id}`).style.animationPlayState='running';
        }
    }
    useEffect(()=>{

        //mount
        document.addEventListener('scroll',checkScroll)

        return () =>{
            //unmount
            document.removeEventListener('scroll',checkScroll)
        }
    })

    return(<div id="perks-container">
        <div id="perks-svg">
            <svg width="263" height="116" viewBox="0 0 263 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="PERKS">
                    <path id="S5" d="M221 88L260 88" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="S4" d="M259 89V45" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="S3" d="M220 46L260 46" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="S2" d="M221 47V3" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="S1" d="M260 4L220 4" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="K3" d="M196 85L168 48" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="K2" d="M201 5L168 48" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="K1" d="M168 2.00001L168 94" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="R5" d="M111 40L151 94" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="R4" d="M111 40H151" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="R3" d="M150 1V41" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="R2" d="M151 2L110 2" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="R1" d="M111 94V1" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="E4" d="M263 114L59 114" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="E3" d="M99 58H60" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="E2" d="M99 2L60 2" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="E1" d="M60 1L60 114" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="P4" d="M41 1L41 41" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="P3" d="M2 40H42" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="P2" d="M42 2L1 2" stroke="#D8F0EE" strokeWidth="3"/>
                    <path id="P1" d="M2 94V1" stroke="#D8F0EE" strokeWidth="3"/>
                </g>
            </svg>
        </div>

        <div id="perks-list">
            <div style={{'background':'#D8F0EE'}}>
                <img src={Brave}/>
                <div>
                    <h1>BRAVE</h1>
                    <p>Being able to think outside the box and not being afraid to stand up and share your ideas.</p>
                </div>
            </div>

            <div style={{'background':'#00EBD7'}}>
                <img src={Teamplayer}/>
                <div>
                    <h1>TEAM PLAYER</h1>
                    <p>Knowing that I can go solo, but knowing that successes are real only when shared with your team</p>
                </div>
            </div>

            <div style={{'background':'#365F62'}}>
                <img src={Frank}/>
                <div>
                    <h1>FRANK</h1>
                    <p>Knowing that speaking clearly is the key for great communication. Being always open to constructive feedbacks.</p>
                </div>
            </div>

            <div style={{'background':'#7CCFD4'}}>
                <img src={Passionate}/>
                <div>
                    <h1>PASSIONATE</h1>
                    <p> Feeling that love for technology is burning your soul and not being afraid to look behind your skills</p>
                </div>
            </div>

            <div style={{'background':'#045C62'}}>
                <img src={Empathetic}/>
                <div>
                    <h1>EMPATHETIC</h1>
                    <p>Believing that emotions are what makes us humans and being in other’s shoes might change your perspective</p>
                </div>
            </div>
        </div>

    </div>)
}