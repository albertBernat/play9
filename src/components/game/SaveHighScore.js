import React from 'react';
import TextInput from "../commons/TextInput";
import PropTypes from 'prop-types';

const SaveHighScore = ({onUsernameChange, onHighscoreSave, score}) => {
    return (
        <form onSubmit={onHighscoreSave}>
            <p>Your score: {score}</p>
            <TextInput label="Name" onChange={onUsernameChange} name="Name"/>
            <button type="submit">Save your highscore</button>
        </form>
    );
};

SaveHighScore.propTypes = {
    onUsernameChange: PropTypes.func.isRequired,
    onHighscoreSave: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
}

export default SaveHighScore;