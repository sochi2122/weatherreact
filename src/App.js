import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import './App.css';
import WeatherData from './components/WeatherData';
import Form from './components/Form';
import {useState, useEffect } from "react"

// const API_KEY= "c16eb7fb6b774aedbc623c11ae3e5c33	"
// const BASE_URL = "   "

function App() {
  

  // const image = `
  // const iconapi = {props.weather.list.weather.icon};
  const [weather, setWeather] = useState(null)

  const getWeather = async (searchTerm) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&units=imperial&appid=92d153842dbc08a4c1b69168e7caeed5&units=imperial`)
    const data = await response.json()

    setWeather(data);
    };







    

    useEffect(() => {
      getWeather("New York")
    },
    [])


    
  return ( 
  
  <div className = "App" >

<h1>My Weather App Using React</h1> 

<br></br>


  <Form getWeather= {getWeather} />


  <br></br>
    <WeatherData weather={weather} />

<br></br>


  </div>
  );
};

export default App

