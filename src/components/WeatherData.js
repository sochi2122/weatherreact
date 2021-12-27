
const WeatherData = (props) => {

  const loaded = () => {
    return (

<>
<main>

<div className="weather">
<img src="http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg" alt=""></img>

      <h1><span> City: {props.weather.name} </span> </h1>
            <p><span>Temperature: {props.weather.main.temp}  </span></p>
            <p><span>Description: {props.weather.weather[0].description}  </span></p>
            <p><span>Description: {props.weather.weather[0].description}  </span></p>





            <p><span>Icon: {props.weather.weather[0].icon}  </span></p>

           <img src= "http://openweathermap.org/img/wn/{props.weather.weather[0].icon}@2x.png"></img>

            <a href=""> <img src="http://openweathermap.org/img/wn/10d@2x.png" className="Icon"></img></a>


      </div>
      </main>
      </>
    );



  }
  


  const loading = () => <h1>No Weather to Display</h1>

  




    return props.weather ? loaded(): loading()

    };

  
    


export default WeatherData;