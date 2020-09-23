import React, {useState} from 'react';
import StarMatchPage from './game/StarMatchPage';
import {Route, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";
import Header from "./commons/Header";
import TutorialMenuPage from "./tutorial/TutorialMenuPage";
import TutorialGameStartPage from "./tutorial/TutorialGameStartPage";
import TutorialGameRulesPage from "./tutorial/TutorialGameRulesPage";
import TutorialWinGamePage from "./tutorial/TutorialWinGamePage";
import TutorialGameOverPage from "./tutorial/TutorialGameOverPage";

function App() {

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={StarMatchPage}/>
                <Redirect exact from="/tutorial" to="/tutorial/menu"/>
                <Route path="/tutorial/menu" component={TutorialMenuPage}/>
                <Route path="/tutorial/start-game" component={TutorialGameStartPage}/>
                <Route path="/tutorial/game-rules" component={TutorialGameRulesPage}/>
                <Route path="/tutorial/win-game" component={TutorialWinGamePage}/>
                <Route path="/tutorial/game-over" component={TutorialGameOverPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    );
}

export default App;
