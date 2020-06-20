const api = {
  key: "46098c7949a688b482ae72bccedf24a3",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
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
  console.table(weather)
}
