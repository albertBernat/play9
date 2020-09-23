import React from 'react';
import TutorialSteps from "./TutorialSteps";
import image from "../../assets/tutorial-game-over.png";

const TutorialGameOverPage = (props) => {
    return (
        <div>
            <TutorialSteps activeStep={props.match.url}/>
            <div style={{textAlign: "center"}}>
                <p>You will loose if your time will end!</p>
                <img src={image}/>
            </div>
        </div>
    );
};

export default TutorialGameOverPage;