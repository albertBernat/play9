import React from 'react'
import {AVAILABLE, CANDIDATE, USED, WRONG} from "./numberStatusConsts";
import PropTypes from 'prop-types';

const PlayNumber = ({status, value, onClick}) => {
    const colors = {
        [AVAILABLE]: 'lightgray',
        [USED]: 'lightgreen',
        [WRONG]: 'lightcoral',
        [CANDIDATE]: 'deepskyblue',
    };

    return (
        <button className="number"
                style={{backgroundColor: colors[status]}}
                onClick={() => onClick(value, status)}>
            {value}
        </button>
    );
}

PlayNumber.propTypes = {
    status: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default PlayNumber;