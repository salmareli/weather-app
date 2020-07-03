import React from 'react';
import WeaterLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComponents = cities => (
    cities.map( city => <WeaterLocation key={city} city={city} /> ) 
);

const LocationList = ({ cities }) => (
    <div>
        {strToComponents(cities)}
    </div>
);

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;