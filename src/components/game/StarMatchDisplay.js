import React from 'react';
import PlayAgain from "./PlayAgain";
import StarsDisplay from "./StarsDisplay";
import utils from "../../utils/Utils";
import PlayNumber from "./PlayNumber";
import PropTypes from "prop-types";
import {ACTIVE} from './gameStatusConsts'

const StarMatchDisplay = ({
                              gameStatus,
                              startNewGame,
                              stars,
                              checkNumberStatus,
                              onNumberClick,
                              secondLeft,
                              onUsernameChange,
                              onHighscoreSave,
                              score,
                              scoreSaveStatus
                          }) => {
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {
                        gameStatus !== ACTIVE ?
                            <PlayAgain onClick={startNewGame}
                                       gameStatus={gameStatus}
                                       onUsernameChange={onUsernameChange}
                                       onHighscoreSave={onHighscoreSave}
                                       scoreSaveStatus={scoreSaveStatus}
                                       score={score}/> : <StarsDisplay count={stars}/>
                    }
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            value={number}
                            status={checkNumberStatus(number)}
                            onClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondLeft}</div>
        </div>
    );
};

StarMatchDisplay.propTypes = {
    gameStatus: PropTypes.string.isRequired,
    startNewGame: PropTypes.func.isRequired,
    stars: PropTypes.number,
    checkNumberStatus: PropTypes.func.isRequired,
    onNumberClick: PropTypes.func.isRequired,
    secondLeft: PropTypes.number.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onHighscoreSave: PropTypes.func.isRequired,
    score: PropTypes.number,
}

export default StarMatchDisplay;
