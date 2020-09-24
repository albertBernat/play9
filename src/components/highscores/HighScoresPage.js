import React from 'react';
import HighScoresDisplay from "./HighScoresDisplay";
import {loadHighScores} from "../../api/api";
import Spinner from "../commons/Spinner";

class HighScoresPage extends React.Component {
    state = {
        highScores: []
    }

    componentDidMount() {
        if (this.state.highScores.length === 0) {
            loadHighScores().then(result => this.setState({highScores: result}));
        }
    }

    render() {
        return (
            this.state.highScores.length === 0
                ? <Spinner/>
                : <HighScoresDisplay highScores={this.state.highScores}/>
        );
    }

}

export default HighScoresPage;
