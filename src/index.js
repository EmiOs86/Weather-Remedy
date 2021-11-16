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
  axios.get(apiUrl).then(displayCurrentTemp);
}

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

function displayTemp(response) {
  console.log(response);

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
}

let form = document.querySelector("#searchCityForm");
form.addEventListener("submit", search);

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
  axios.get(apiUrl).then(displayCurrentTemp);
}

function displayCurrentTemp(response) {
  console.log(response);
  let city = response.data.name;
  let displayCity = document.querySelector("#display-search-city");
  displayCity.innerHTML = city;

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
}

let current = document.querySelector("#current-weather-button");
current.addEventListener("click", getCurrentPosition);

//Temp FC Selector
function showTempF() {
  let showTempF = document.querySelector("#temperature");
  showTempF.innerHTML = 68;
}

let TempF = document.querySelector("#tempF");
TempF.addEventListener("click", showTempF);

function showTempC(event) {
  event.preventDefault();
  let showTempC = document.querySelector("#temperature");
  let tempC = showTempC.innerHTML;
  showTempC.innerHTML = Math.round(((tempC - 32) * 5) / 9);
}

let TempC = document.querySelector("#tempC");
TempC.addEventListener("click", showTempC);

// Header click Los Angeles
function displayLA(event) {
  let displayLA = document.querySelector("#display-search-city");
  displayLA.innerHTML = "Los Angeles";

  let city = `los angeles`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayLATempF);
}

function displayLATempF(response) {
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
}

let headerLA = document.querySelector("#los-angeles");
headerLA.addEventListener("click", displayLA);

// Header click New York
function displayNY(event) {
  let displayNY = document.querySelector("#display-search-city");
  displayNY.innerHTML = "New York";

  let city = `new york`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayNYTempF);
}

function displayNYTempF(response) {
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
}

let headerNY = document.querySelector("#new-york");
headerNY.addEventListener("click", displayNY);

// Header click London
function displayLondon(event) {
  let displayLondon = document.querySelector("#display-search-city");
  displayLondon.innerHTML = "London";

  let city = `London`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayLondonTempF);
}

function displayLondonTempF(response) {
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
}

let headerLondon = document.querySelector("#london");
headerLondon.addEventListener("click", displayLondon);

// Header click Paris
function displayParis(event) {
  let displayParis = document.querySelector("#display-search-city");
  displayParis.innerHTML = "Paris";

  let city = `paris`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayParisTempF);
}

function displayParisTempF(response) {
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
}

let headerParis = document.querySelector("#paris");
headerParis.addEventListener("click", displayParis);

// Header click Milan
function displayMilan(event) {
  let displayMilan = document.querySelector("#display-search-city");
  displayMilan.innerHTML = "Milan";

  let city = `milan`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayMilanTempF);
}

function displayMilanTempF(response) {
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
}

let headerMilan = document.querySelector("#milan");
headerMilan.addEventListener("click", displayMilan);

// Header click Beijing
function displayBeijing(event) {
  let displayBeijing = document.querySelector("#display-search-city");
  displayBeijing.innerHTML = "Beijing";

  let city = `beijing`;
  let apiKey = "f5d7d1d7d37ecee1388843b10cda310d";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayBeijingTempF);
}

function displayBeijingTempF(response) {
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
}

let headerBeijing = document.querySelector("#beijing");
headerBeijing.addEventListener("click", displayBeijing);
