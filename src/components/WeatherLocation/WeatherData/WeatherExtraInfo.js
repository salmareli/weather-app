import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity, wind
}) => (
    <div className="weatherExtraInfoCount">
        <span className="weatherExtraInfoText">{`${humidity}%  - `}</span>
        <span className="weatherExtraInfoText">{`${wind} wind`}</span>

    </div>

    
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;