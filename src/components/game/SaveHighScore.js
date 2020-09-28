import React from 'react';
import TextInput from "../commons/TextInput";
import PropTypes from 'prop-types';
import {SCORE_NOT_SAVED} from "../../saveScoreStatus";

const SaveHighScore = ({onUsernameChange, onHighscoreSave, score, scoreSaveStatus}) => {
    return (
        scoreSaveStatus === SCORE_NOT_SAVED ?
            <form onSubmit={onHighscoreSave}>
                <p>Your score: {score}</p>
                <TextInput label="Name" onChange={onUsernameChange} name="Name"/>
                <button type="submit">Save your highscore</button>
            </form>:
            <p>Score saved</p>
    );
};

SaveHighScore.propTypes = {
    onUsernameChange: PropTypes.func.isRequired,
    onHighscoreSave: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
}

export default SaveHighScore;
