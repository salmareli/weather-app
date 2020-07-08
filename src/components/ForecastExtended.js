import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ];

// const data = {
//     humidity: 10,
//     temperature: 10,
//     weatherState: 'sda',
//     wind: '10 ms',
// };

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData: null }
    }
    renderForecastItem() {
        return "Items";
        // return days.map( day => <ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>);
    }
    renderProgreess () {
        return <CircularProgress size={50} ></CircularProgress>;
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (<div>
                <h2 className="extends">
                 Pronostico Extendido { city }
                </h2>
                {forecastData}
                {this.renderForecastItem()}
                {this.renderProgreess()}
            </div>);
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string,
}
export default ForecastExtended;