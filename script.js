var slider = document.getElementById('slider');
var toggle = document.getElementById('toggle');

// Toggle functionality
toggle.addEventListener('click', function() {
    var isOpen = slider.classList.contains('slide-in');

    slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});

// Load day or night mode
dayNightMode = () => {
  const date = new Date();
  const hour = date.getHours();

  if(hour >= 7 && hour < 19)
    document.body.style.background = 'linear-gradient(0.50turn, white, #66c2ff, white)';
  else
    document.body.style.background = 'linear-gradient(0.50turn, black, #66c2ff, black)';
}

window.addEventListener('load', dayNightMode);

// Load default weather
defaultWeather = () => {
  loadWeather('Patna, India');
};

window.addEventListener('load', defaultWeather);

// Event listener for click
document.getElementById("searchWeather").addEventListener("click", () => {
  const input = document.getElementById('input');
  loadWeather(input.value)
});

// Event listener for enter
document.getElementById("input").addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    const input = document.getElementById('input');
    loadWeather(input.value)
  }
});

// Request to the weather API
loadWeather = (input) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+input+'&units=metric&appid=16a2314e91b166c8c3c5b3c33539f22b';

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      alert('Error: ' + response.status + '\n\nFor better accuracy enter your city and full state name, for example, San Franscisco, California.\n\nIf your outside of the U.S., you may also enter your city and full country name, for example, Hong Kong, Japan');
  })

  .then(data => { 
    setImage(data);
    document.getElementById('degrees').innerHTML = ((data.main.temp * 9/5) + 32).toFixed(0) + '&deg;<span style="font-size: 1rem;margin-top: -10px;">F</span>';
    document.getElementById('city-name').innerHTML = data.name;
    document.getElementById('bar').innerHTML = ' | ';
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById("input").value = '';
    dayNightMode();
  });
}

// Set the weather image
setImage = (data) => {
  if(data.weather[0].main === "Clear"){
    document.getElementById("img");
  }

  if(data.weather[0].main === "Snow"){
    document.getElementById("img");
  }

  if(data.weather[0].main === "Thunderstorm"){
    document.getElementById("img");
  }

  if(data.weather[0].main === "Drizzle" || 
    data.weather[0].main === "Mist" ||
    data.weather[0].main === "Smoke" ||
    data.weather[0].main === "Haze" ||
    data.weather[0].main === "Dust" ||
    data.weather[0].main === "Fog" ||
    data.weather[0].main === "Sand" ||
    data.weather[0].main === "Dust" ||
    data.weather[0].main === "Ash" ||
    data.weather[0].main === "Squall" ||
    data.weather[0].main === "Tornado"){
      document.getElementById("img");
  }

  if(data.weather[0].main === "Clouds"){
    if(data.weather[0].description === "few clouds")
      document.getElementById("img");
    else
      document.getElementById("img");
  }

  if(data.weather[0].main === "Rain"){
      document.getElementById("img");
  }
    
}
