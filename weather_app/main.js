const api = {
  key: "18ef47c82198d6889b4d43423c7e23bb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector('.search-box');
console.log(searchbox)
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {

  if(weather.main.temp < 30) {
    document.body.style.backgroundImage = 'url("rain.jpg")';
  }
   if (weather.main.temp < 20) {
    document.body.style.backgroundImage = 'url("winter.jpg")';
  }

  if(weather.main.temp > 30){
    document.body.style.backgroundImage = 'url("bg.jpg")';
  }
  let city = document.querySelector('.city');
  console.log("city = ", city);
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}