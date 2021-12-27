import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import './App.css';
import WeatherData from './components/WeatherData';
import Form from './components/Form';
import {useState, useEffect } from "react"


function App() {

  
  const [weather, setWeather] = React.useState(null)

  const getWeather = async (searchTerm) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=4915e88a7fa96de16b8653af0f567d60&units=imperial`)
    const data = await response.json()
    setWeather(data);
    };
    
    useEffect(() => {
      getWeather("New York")
    }, [])


    
  return ( 
  
  <div className = "App" >
  <main>
  <Form getWeather= {getWeather} />
    <WeatherData weather={weather}  />
  </main>
  </div>
  );
};

export default App

