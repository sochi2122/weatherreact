
const WeatherData = (props) => {

  const loaded = () => {

    
    
    return (

<>
<div id="root"></div>


<header className="header">

<br></br>



<br></br>

</header>


<main className="section">



      <div className="weather">
      <h1> City: {props.weather.city.name} </h1>


            <p><span>Date and Time: {props.weather.list[0].dt_txt}  </span></p>
            <p><span>Temperature: {props.weather.list[0].main.temp}  </span></p>
            <p><span>Description: {props.weather.list[0].weather[0].description}  </span></p>
           <img src ={`http://openweathermap.org/img/w/${props.weather.list[0].weather[0].icon}.png`} alt="icon" />

</div>
           <div className="weather">
           <h1> City: {props.weather.city.name} </h1>


           <p><span>Date and Time: {props.weather.list[6].dt_txt}  </span></p>
          <p><span>Temperature: {props.weather.list[6].main.temp}  </span></p>
          <p><span>Description: {props.weather.list[6].weather[0].description}  </span></p>
          <img src ={`http://openweathermap.org/img/w/${props.weather.list[6].weather[0].icon}.png`} alt="icon" />
           
</div>

<div className="weather">
<h1> City: {props.weather.city.name} </h1>


          <p><span>Date and Time: {props.weather.list[12].dt_txt}  </span></p>
          <p><span>Temperature: {props.weather.list[12].main.temp}  </span></p>
          <p><span>Description: {props.weather.list[12].weather[0].description}  </span></p>
          <img src ={`http://openweathermap.org/img/w/${props.weather.list[12].weather[0].icon}.png`} alt="icon" />
</div>

<div className="weather">
<h1> City: {props.weather.city.name} </h1>


          <p><span>Date and Time: {props.weather.list[18].dt_txt}  </span></p>
          <p><span>Temperature: {props.weather.list[18].main.temp}  </span></p>
          <p><span>Description: {props.weather.list[18].weather[0].description}  </span></p>
          <img src ={`http://openweathermap.org/img/w/${props.weather.list[18].weather[0].icon}.png`} alt="icon" />

</div>


<div className="weather">
<h1> City: {props.weather.city.name} </h1>


          <p><span>Date and Time: {props.weather.list[24].dt_txt}  </span></p>
          <p><span>Temperature: {props.weather.list[24].main.temp}  </span></p>
          <p><span>Description: {props.weather.list[24].weather[0].description}  </span></p>
          <img src ={`http://openweathermap.org/img/w/${props.weather.list[24].weather[0].icon}.png`} alt="icon" />

</div>




      </main>
      </>
    );



  }
  


  const loading = () => <h1>No Weather to Display</h1>

  




    return props.weather ? loaded(): loading()

    };

  
    


export default WeatherData;