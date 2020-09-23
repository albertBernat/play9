import React from 'react';
import TutorialSteps from "./TutorialSteps";
import image from '../../assets/tutorial-main-menu.png'

const TutorialMenuPage = (props) => {
    return (
        <div>
            <TutorialSteps activeStep={props.match.url}/>
            <div style={{textAlign: "center"}}>
                <p>Welcome in StarMatch tutorial. From main menu you can pick up 3 options. Game - to play the game,
                    Tutorial - to read this tutorial and About - to gain more knowledge about the project</p>
                <img src={image}/>
            </div>
        </div>
    );
};

export default TutorialMenuPage;