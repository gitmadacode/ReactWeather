import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation'

const LocationList = ({cities}) => {
    console.log(cities);
    return (
    <div>
        <WeatherLocation city = "buenos aires,ar" />
        <WeatherLocation city = "Bogota,col" />
        <WeatherLocation city = "Tokyo,jap" />
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;