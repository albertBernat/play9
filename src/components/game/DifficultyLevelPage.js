import React from 'react';
import {EASY, MEDIUM, HARD} from "./difficultyLevels";

const DifficultyLevelPage = ({handleDifficultyChange}) => {
    return (
        <div onChange={handleDifficultyChange}>
            <input type="radio" value={EASY} name="difficulty" defaultChecked /> Easy
            <input type="radio" value={MEDIUM} name="difficulty"/> Normal
            <input type="radio" value={HARD} name="difficulty"/> Hard
        </div>
    );
};

export default DifficultyLevelPage;