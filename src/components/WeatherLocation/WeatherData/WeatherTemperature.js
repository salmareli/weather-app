import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
    CLOUD
} from './../../constants/wathers';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
}
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const sizeIcon  = "4x";
    if(icon) 
        return <WeatherIcons name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons name={"day-sunny"} size={sizeIcon} />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherDataTemperatureCont" >
        { getWeatherIcon(weatherState) }
        <span className="temperature">{`${temperature}`} </span>
        <span className="temperatureType">{` C°`} </span>
    </div>

    
);

WeatherTemperature.propsTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;