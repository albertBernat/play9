import React, {useEffect} from 'react';
import utils from '../../utils/Utils';
import StarMatchDisplay from "./StarMatchDisplay";
import PropTypes from "prop-types";
import {ACTIVE, LOST, WON} from './gameStatusConsts'
import {CANDIDATE, WRONG, AVAILABLE, USED} from './numberStatusConsts'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as gameActions from '../../redux/actions/gameActions';

const StarMatchPage = ({secondLeft, availableNums, actions, stars, candidateNums}) => {

    useEffect(() => {
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

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameStatus = availableNums.length === 0 ? WON : secondLeft === 0 ? LOST : ACTIVE;

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
        actions.resetState();
    };

    return (
        <StarMatchDisplay
            startNewGame={handleNewGame}
            stars={stars}
            checkNumberStatus={handleNumberStatus}
            onNumberClick={handleNumberClick}
            gameStatus={gameStatus}
            secondLeft={secondLeft}
        />
    );
};

StarMatchPage.propTypes = {
    secondLeft: PropTypes.number.isRequired,
    availableNums: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired,
    stars: PropTypes.number.isRequired,
    candidateNums:PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        secondLeft: state.secondLeft,
        stars: state.stars,
        availableNums: state.availableNums,
        candidateNums: state.candidateNums
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            timeRemainingTick: bindActionCreators(gameActions.timeRemainingTick, dispatch),
            starsNewRandom: bindActionCreators(gameActions.starsNewRandom, dispatch),
            updateAvailableNums: bindActionCreators(gameActions.updateAvailableNumbers, dispatch),
            updateCandidateNums: bindActionCreators(gameActions.updateCandidateNumbers, dispatch),
            resetState: bindActionCreators(gameActions.resetState, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarMatchPage);