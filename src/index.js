// Change #display-date
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let date = now.getDate();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let displayDate = document.querySelector("#display-date");
displayDate.innerHTML = `${day} ${month} ${date} ${hours}:${minutes}`;

//Open page with current info
navigator.geolocation.getCurrentPosition(getCurrentLocation);

function getCurrentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(displayTemp);
}

// Current Button
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let current = document.querySelector("#current-weather-button");
current.addEventListener("click", getCurrentPosition);

// Change Search City, Temperature & 4 data
function search(event) {
  event.preventDefault();
  let searchACity = document.querySelector("#search-a-city");

  if (searchACity.value) {
    let displaySearchCity = document.querySelector("#display-search-city");

    displaySearchCity.innerHTML = `${searchACity.value}`;

    let city = searchACity.value.toLowerCase();
    let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
    let units = "imperial";
    let tempApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(tempApiUrl).then(displayTemp);
  } else {
    null;
  }
}

let form = document.querySelector("#searchCityForm");
form.addEventListener("submit", search);

// Main function
function displayTemp(response) {
  let cityElement = document.querySelector("#display-search-city");
  cityElement.innerHTML = response.data.name;

  let description = response.data.weather[0].main;
  let displayDescription = document.querySelector("#description");
  displayDescription.innerHTML = description;

  let currentTempF = Math.round(response.data.main.temp);
  let displayTempF = document.querySelector("#temperature");
  displayTempF.innerHTML = currentTempF;

  let humidity = response.data.main.humidity;
  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `${wind} mph`;

  let weatherIcon = document.querySelector("#weather-icon");
  let icon = response.data.weather[0].icon;
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", response.data.weather[0].main);

  currentTempFahrenheit = Math.round(response.data.main.temp);

  getForecast(response.data.coord);
}

//Temp FC Selector
function showTempF() {
  let showTempF = document.querySelector("#temperature");
  showTempF.innerHTML = currentTempFahrenheit;
}

let TempF = document.querySelector("#tempF");
TempF.addEventListener("click", showTempF);

function showTempC(event) {
  event.preventDefault();
  let showTempC = document.querySelector("#temperature");
  let tempC = showTempC.innerHTML;
  showTempC.innerHTML = Math.round(((currentTempFahrenheit - 32) * 5) / 9);
}

let currentTempFahrenheit = null;

let TempC = document.querySelector("#tempC");
TempC.addEventListener("click", showTempC);

// Header click Los Angeles
function displayLA(event) {
  let city = `los angeles`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let headerLA = document.querySelector("#los-angeles");
headerLA.addEventListener("click", displayLA);

// Header click New York
function displayNY(event) {
  let city = `new york`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let headerNY = document.querySelector("#new-york");
headerNY.addEventListener("click", displayNY);

// Header click London
function displayLondon(event) {
  let city = `London`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let headerLondon = document.querySelector("#london");
headerLondon.addEventListener("click", displayLondon);

// Header click Paris
function displayParis(event) {
  let city = `paris`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let headerParis = document.querySelector("#paris");
headerParis.addEventListener("click", displayParis);

// Header click Milan
function displayMilan(event) {
  let city = `milan`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let headerMilan = document.querySelector("#milan");
headerMilan.addEventListener("click", displayMilan);

// Header click Beijing
function displayBeijing(event) {
  let city = `beijing`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}

let headerBeijing = document.querySelector("#beijing");
headerBeijing.addEventListener("click", displayBeijing);

// Weather forecast
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        ` <div class="col fw-details">
          <div>${formatDay(forecastDay.dt)}</div>
          
          <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }.png"
          alt=""
        />
        
          <div>
          <strong>${Math.round(forecastDay.temp.max)}°F</strong> | ${Math.round(
          forecastDay.temp.min
        )}°F
          </div>
          <div>
          <strong>${Math.round(
            ((forecastDay.temp.max - 32) * 5) / 9
          )}°C</strong> | ${Math.round(((forecastDay.temp.min - 32) * 5) / 9)}°C
          </div>
        </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}
