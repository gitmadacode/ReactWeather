//We import React to be able to work with it inside the file
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';  
import {
    SUN,
    WINDY,
   
} from './../../constants/weathers';

//the next section is to work with the weather API
const location = "Buenos Aires,ar";
const api_key = "94bfeaa0d7f0ec98fb59c57a405389c4";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;



const data = {
    temperature: 4,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',

}

const data2 = {
    temperature: 14,
    weatherState: WINDY,
    humidity: 14,
    wind: '10 m/s',

}
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
    constructor(){
        super();
        this.state = {
            city: 'buenos aires',
            data: data,
        };
    }


handleUpdateClick = () => {
//we call the apl url
    fetch(api_weather).then(resolve =>{
        
        return resolve.json();
    }).then (data =>{
        console.log(data);
        debugger;
    });
    
    console.log("updated");
    // "this" can use only in constructor, in others invoke "setState" to update a state, in it we put the new and updated
    // "setState" o≧o≦o tell React that you will have to do a status update
        this.setState({
            city: 'Buenos aires!',
            data: data2
        });
    }
    //se renderiza lo que se mostrara
    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }

}


/*Exportamos para que la funcion pueda ser utilizada por todo el proyecto(app.js)-/-We export so that the function can be used throughout the project*/
export default WeatherLocation;