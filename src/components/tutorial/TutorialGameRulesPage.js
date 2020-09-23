import React from 'react';
import TutorialSteps from "./TutorialSteps";
import image from "../../assets/tutorial-game.png";

const TutorialGameRulesPage = (props) => {
    return (
        <div>
            <TutorialSteps activeStep={props.match.url}/>
            <div style={{textAlign: "center"}}>
                <p>You have 10 seconds to win the game. On the left site of the board the stars will appear. 
                    Your goal is to tell how many stars just appeared. You can do it by clicking on numbers which are
                    on the right side. For example: When 5 stars appears, you have few options, you could choose number
                    5 which would be the easiest option but not the best. You can combine numbers, so for 5 stars you
                    can choose either 2,3 or 1,4 or 5</p>
                <img src={image}/>
            </div>
        </div>
    );
};

export default TutorialGameRulesPage;