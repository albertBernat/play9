import React, {useEffect, useState} from 'react';
import utils from '../../utils/Utils';
import StarMatchDisplay from "./StarMatchDisplay";
import PropTypes from "prop-types";
import {ACTIVE, LOST, WON} from './gameStatusConsts'
import {AVAILABLE, CANDIDATE, USED, WRONG} from './numberStatusConsts'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as gameActions from '../../redux/actions/gameActions';
import DifficultyLevelPage from "./DifficultyLevelPage";
import {EASY, HARD, MEDIUM} from "./difficultyLevels";
import * as saveScoreActions from '../../redux/actions/saveScoreActions';

const StarMatchPage = ({secondLeft, availableNums, actions, stars, candidateNums, difficultyLevel, scoreSaveStatus}) => {

    const [username, setUsername] = useState('');
    const [score, setScore] = useState(0);

    const gameStatus = availableNums.length === 0 ? WON : secondLeft === 0 ? LOST : ACTIVE;

    useEffect(() => {
        if (gameStatus === ACTIVE) {
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
        actions.saveScore({username, score: calculatePoints()})
    }

    const calculatePoints = () => {
        if (gameStatus !== WON) {
            return;
        }
        const levelFactors = new Map();
        levelFactors.set(EASY, 1);
        levelFactors.set(MEDIUM, 10);
        levelFactors.set(HARD, 30);

        const factor = levelFactors.get(difficultyLevel);
        if (score === 0) {
            setScore(secondLeft * factor + factor);
        }
        return score;
    };

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

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
        resetGame(difficultyLevel);
    };

    const handleDifficultyChange = (event) => {
        resetGame(event.target.value);
    };

    const resetGame = (level) => {
        setScore(0);
        actions.resetSavedScoreStatus();
        actions.changeDifficultyLevel(level);
    }

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
                scoreSaveStatus={scoreSaveStatus}
                score={calculatePoints()}
            />
            <DifficultyLevelPage handleDifficultyChange={handleDifficultyChange}/>
        </>
    );
};

StarMatchPage.propTypes = {
    secondLeft: PropTypes.number.isRequired,
    availableNums: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    stars: PropTypes.number,
    candidateNums: PropTypes.array.isRequired,
    scoreSaveStatus: PropTypes.string,
}

function mapStateToProps(state) {
    return {
        secondLeft: state.game.secondLeft,
        stars: state.game.stars,
        availableNums: state.game.availableNums,
        candidateNums: state.game.candidateNums,
        difficultyLevel: state.game.difficultyLevel,
        scoreSaveStatus: state.saveScoreStatus,
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
            saveScore: bindActionCreators(saveScoreActions.saveScore, dispatch),
            resetSavedScoreStatus: bindActionCreators(saveScoreActions.resetSavedScoreStatus,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarMatchPage);
