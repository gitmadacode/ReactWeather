//We import React to be able to work with it inside the file
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';  

/*We create a arrow function*/
/*
const WeatherLocation = () => (
    <div className="weatherLocationCont">
    <Location city={"Tokyo japan"}></Location>
    <WeatherData data={data}></WeatherData>
    </div>
);*/
 //we will transform the above into a class component to achieve other things
class WeatherLocation extends Component{
 //Constructor set the status
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
      }

handleUpdateClick = () => {
//we call the apl url
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather).then(resolve =>{
        
        return resolve.json();
    }).then (data => {
        console.log("result handleupdateclick")
        const newWeather = transformWeather(data);
        console.log(newWeather);
        debugger;
        this.setState({
            data: newWeather
        });
    });
    
    /*console.log("updated");
    // "this" can use only in constructor, in others invoke "setState" to update a state, in it we put the new and updated
    // "setState" o≧o≦o tell React that you will have to do a status update
        this.setState({
            city: 'Buenos aires!',
            data: data2
        });*/
    }
    //se renderiza lo que se mostrara
    render() {
        console.log("render");
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ?
                <WeatherData data={data}></WeatherData> :
                <CircularProgress size={50} />
            }
            </div>
        );
    }

}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
/*Exportamos para que la funcion pueda ser utilizada por todo el proyecto(app.js)-/-We export so that the function can be used throughout the project*/
export default WeatherLocation;