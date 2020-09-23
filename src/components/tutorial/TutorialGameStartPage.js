import React from 'react';
import TutorialSteps from "./TutorialSteps";

const TutorialGameStartPage = (props) => {
    return (
        <div>
            <TutorialSteps activeStep={props.match.url}/>
            <div style={{textAlign: "center"}}>
                <p>Game will start automatically after you click "Game" button.</p>
            </div>
        </div>
    );
};

export default TutorialGameStartPage;