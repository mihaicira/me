// import "./HomePage.scss";
import DynamicContainer from "../Dynamic/DynamicContainer";
import React, {Suspense} from "react";


function HomePage() {
    return (
        <>

            {/*<DynamicContainer/>*/}

            <div className="main-content-container">

                <div className="main-left-container">
                    <h1>Cîra Mihai</h1>
                    <h6>web developer</h6>
                    <h6>mobile developer</h6>
                    <h6>problem solver</h6>
                </div>

                <div className="main-navbar">
                    <button>About me</button>
                    <button>Projects</button>
                    <button>Skills</button>
                    <button>Contact</button>
                </div>
            </div>


        </>

    );
}

export default HomePage;
