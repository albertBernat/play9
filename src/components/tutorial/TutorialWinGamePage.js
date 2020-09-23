import React from 'react';
import TutorialSteps from "./TutorialSteps";
import image from "../../assets/tutorial-game-win.png";

const TutorialWinGamePage = (props) => {
    return (
        <div>
            <TutorialSteps activeStep={props.match.url}/>
            <div style={{textAlign: "center"}}>
                <p>You will win the game if every number is used within the 10 seconds. Then you can start again ;)</p>
                <img src={image}/>
            </div>
        </div>
    );
};

export default TutorialWinGamePage;