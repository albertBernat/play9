import React from 'react';
import utils from '../../utils/Utils';
import PropTypes from 'prop-types';

const StarsDisplay = ({count}) => {
    return (
        <>
            {utils.range(1, count).map(starId =>
                <div key={starId} className="star" />
            )}
        </>
    );
};

StarsDisplay.propTypes = {
    count: PropTypes.number.isRequired
}

export default StarsDisplay;