import React, {useEffect, useState} from 'react';
import utils from '../../utils/Utils';
import StarMatchDisplay from "./StarMatchDisplay";
import PropTypes from "prop-types";
import {ACTIVE, LOST, WON} from './gameStatusConsts'
import {AVAILABLE, CANDIDATE, USED, WRONG} from './numberStatusConsts'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as gameActions from '../../redux/actions/gameActions';
import {createHighScore} from '../../api/api'

import DifficultyLevelPage from "./DifficultyLevelPage";
import {EASY, HARD, MEDIUM} from "./difficultyLevels";

const StarMatchPage = ({secondLeft, availableNums, actions, stars, candidateNums, difficultyLevel}) => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        calculatePoints();
        if (secondLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                actions.timeRemainingTick();
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [secondLeft])

    const setStarMatchState = (newCandidateNums) => {
        if (utils.sum(newCandidateNums) !== stars) {
            actions.updateCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
            actions.starsNewRandom(newAvailableNums);
            actions.updateAvailableNums(newAvailableNums);
            actions.updateCandidateNums([]);
        }
    }

    const handleUsernameChange = ({target}) => {
        setUsername(target.value);
    }

    const handleSaveHighscore = (event) => {
        event.preventDefault();
        createHighScore({username, score: calculatePoints()});
        actions.changeDifficultyLevel(difficultyLevel);
    }

    const calculatePoints = () => {
        const levelFactors = new Map();
        levelFactors.set(EASY, 1);
        levelFactors.set(MEDIUM, 3);
        levelFactors.set(HARD, 10);

        const factor = levelFactors.get(difficultyLevel);
        return secondLeft * factor;
    };

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameStatus = availableNums.length === 0 ? WON : secondLeft === 0 ? LOST : ACTIVE;

    const handleDifficultyChange = (event) => {
        actions.changeDifficultyLevel(event.target.value);
    };

    const handleNumberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return USED;
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? WRONG : CANDIDATE;
        }
        return AVAILABLE;
    }

    const handleNumberClick = (number, status) => {
        if (gameStatus !== ACTIVE || status === USED) {
            return;
        }
        const newCandidateNums = status === AVAILABLE ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
        setStarMatchState(newCandidateNums);
    };

    const handleNewGame = () => {
        actions.changeDifficultyLevel(difficultyLevel);
    };

    return (
        <>
            <StarMatchDisplay
                startNewGame={handleNewGame}
                stars={stars}
                checkNumberStatus={handleNumberStatus}
                onNumberClick={handleNumberClick}
                gameStatus={gameStatus}
                secondLeft={secondLeft}
                onUsernameChange={handleUsernameChange}
                onHighscoreSave={handleSaveHighscore}
            />
            <DifficultyLevelPage handleDifficultyChange={handleDifficultyChange}/>
        </>
    );
};

StarMatchPage.propTypes = {
    secondLeft: PropTypes.number.isRequired,
    availableNums: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired,
    stars: PropTypes.number.isRequired,
    candidateNums: PropTypes.array.isRequired,
    changeDifficultyLevel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        secondLeft: state.game.secondLeft,
        stars: state.game.stars,
        availableNums: state.game.availableNums,
        candidateNums: state.game.candidateNums,
        difficultyLevel: state.game.difficultyLevel,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            timeRemainingTick: bindActionCreators(gameActions.timeRemainingTick, dispatch),
            starsNewRandom: bindActionCreators(gameActions.starsNewRandom, dispatch),
            updateAvailableNums: bindActionCreators(gameActions.updateAvailableNumbers, dispatch),
            updateCandidateNums: bindActionCreators(gameActions.updateCandidateNumbers, dispatch),
            changeDifficultyLevel: bindActionCreators(gameActions.changeDifficultyLevel, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarMatchPage);