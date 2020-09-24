import React from 'react';
import {LOST, WON} from './gameStatusConsts';
import PropTypes from 'prop-types';
import SaveHighScore from "./SaveHighScore";

const PlayAgain = ({gameStatus, onClick, onUsernameChange, onHighscoreSave}) => {
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
                                                  onHighscoreSave={onHighscoreSave}/>}
        </div>
    )
}

PlayAgain.propTypes = {
    gameStatus: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onHighscoreSave: PropTypes.func.isRequired
}

export default PlayAgain;