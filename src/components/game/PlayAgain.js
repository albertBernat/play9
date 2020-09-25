import React from 'react';
import {LOST, WON} from './gameStatusConsts';
import PropTypes from 'prop-types';
import SaveHighScore from "./SaveHighScore";

const PlayAgain = ({gameStatus, onClick, onUsernameChange, onHighscoreSave, score}) => {
    return (
        <div className='game-done'>
            <div className='message'
                 style={{color: gameStatus === LOST ? 'red' : 'green'}}
            >
                {gameStatus === LOST ? 'Game over' : 'Nice'}</div>
            <button onClick={() => onClick()}>
                Play Again
            </button>
            {gameStatus === WON && <SaveHighScore onUsernameChange={onUsernameChange}
                                                  onHighscoreSave={onHighscoreSave}
                                                  score={score}/>}
        </div>
    )
}

PlayAgain.propTypes = {
    gameStatus: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onHighscoreSave: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
}

export default PlayAgain;