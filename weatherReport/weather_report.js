function showWeatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    apiKey = 'e2749e3d3dad0f96bb064f748fe89c40';
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(function(resp){
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h3>Weather in ${resp.name}
                                    <p>Temperature: ${resp.main.temp} &#8451;</p>
                                    <p>Weather: ${resp.weather[0].description}</p>`;
        })
        .catch(error =>{
            console.error('Error fetching Weather:',error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Failed to fetch weather. Please try again later.</p>'
        })

}

document.getElementById('weatherForm').addEventListener("submit",showWeatherDetails);
