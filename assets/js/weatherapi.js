 function getWeather() {
      const apiKey = '475d39876425b15c0ba05c9e8bf622f4';
      const city = document.getElementById('cityInput').value;

      // Make sure a city is entered
      if (!city) {
	  const weatherResult = document.getElementById('weatherResult');
          weatherResult.innerHTML = 
		  `
		  <img height="110px" src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/bc4d49110109751.5fe3c2163d557.gif'></img>
		  <p class="no_city_enter">Enter city first !</p>
		  `;
        return;   }
	
	
	
	
      // Fetch weather data from OpenWeatherMap API
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
		
          // Display the weather information
		  //my script to change the background
		  
		  const w = data.weather[0].description;
          switch(w){
		 
				
		 case "":
				document.getElementById('poster').style.background ="url('') no-repeat center" ;
				break;
		  
		  
		  }
		  
		  
		  
		  
		  
		  const weatherResult = document.getElementById('weatherResult');
          weatherResult.innerHTML = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        })
		
	
	
        .catch(error => {
          console.error('Error fetching weather data:', error);
		  const weatherResult = document.getElementById('weatherResult');
          weatherResult.innerHTML = `
            <p class="no-conn">Something's Wrong!</p>
			<img height="70px" src='https://i.gifer.com/PXG7.gif'></img>
			<p class="errorinfo">Please check the connection or name of the city you entered.</p>
          `;    });
		  
    }