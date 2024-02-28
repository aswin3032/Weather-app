const search = async ()=>{
    let countryname = cname.value
    // console.log(countryname);
    if(countryname){
      const response =    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=4c062448d8bd21ba73f9522f457a76be`)
    //   console.log(response);
    response.json().then((country)=>{
        console.log(country);

        //temp
        let temp = country.main.temp

        // description
         let clouds = country.weather[0].description
         console.log(clouds);
         // humidity
         let humidity = country.main.humidity
         console.log(humidity);
         // wind speed
         let wind = country.wind.speed
         console.log(wind);
        // icon
        let icon = country.weather[0].icon
        console.log(icon);
        //name
        let name = country.name
        console.log(name);
      

  

        

        result.innerHTML = ` <h2 class="city">Weather in ${name}</h2>
        <h1 class="temp">${(temp-273.15).toFixed(1)}°C</h1>
        
        <div class="description">${clouds}</div>
        <div class="humidity">Humidity: ${humidity}</div>
        <div class="wind">Wind speed: ${wind} km/h</div>`
      
    })
    }else{
        alert('please enter the city name')
    }
    
}
