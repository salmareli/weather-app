import React, { Component }from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeatherData from '../services/transformWeatherData';
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {

            return resolve.json();
        }).then(data => {

            const newWeather = transformWeatherData(data);
            this.setState({
                data: newWeather,
            });  

            // debugger;
        });

    };

    render() {
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data} ></WeatherData> :
                    <CircularProgress size={50} ></CircularProgress>}
            </div>
        );
    }

};
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;