import React from 'react';
import * as gameStatusConsts from './gameStatusConsts';
import PropTypes from 'prop-types';

const PlayAgain = ({gameStatus, onClick}) => {
    return (
        <div className='game-done'>
            <div className='message'
                 style={{color: gameStatus === gameStatusConsts.LOST ? 'red' : 'green'}}
            >
                {gameStatus === gameStatusConsts.LOST ? 'Game over' : 'Nice'}</div>
            <button onClick={() => onClick()}>
                Play Again
            </button>
        </div>
    )
}

PlayAgain.propTypes = {
    gameStatus: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default PlayAgain;