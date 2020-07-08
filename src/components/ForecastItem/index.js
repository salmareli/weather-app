import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './.././/WeatherLocation/WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <div>{weekDay} Hora: {hour} hr</div>
        <WeatherData data={data}></WeatherData>
    </div>

);

ForecastItem.propTypes = {
    weekDay: PropTypes.string,
    hour: PropTypes.number,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired, 
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItem;