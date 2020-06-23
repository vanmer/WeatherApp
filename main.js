// select the elements
const dateElement = document.querySelector(".location .date");
const searchBox = document.querySelector('.search-box');
let city = document.querySelector('.location .city');
let temp = document.querySelector('.current .temp');
let weatherElement = document.querySelector('.current .weather');
let hilow = document.querySelector('.hi-low');

// api
const api = {
  key: "46098c7949a688b482ae72bccedf24a3",
  base: "https://api.openweathermap.org/data/2.5/"
}

// display todays date
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// input for search box
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  .then(weather => {
    return weather.json();
  })
  .then(displayResults);
}

function displayResults(weather) {
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  weatherElement.innerText = weather.weather[0].main;
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}
