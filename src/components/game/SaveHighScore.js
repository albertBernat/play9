import React from 'react';
import TextInput from "../commons/TextInput";

const SaveHighScore = ({onUsernameChange, onHighscoreSave}) => {
    return (
        <form onSubmit={onHighscoreSave}>
            <p>Your highscore: 44</p>
            <TextInput label="Name" onChange={onUsernameChange} name="Name"/>
            <button type="submit">Save your highscore</button>
        </form>
    );
};

export default SaveHighScore;