// дата у форматі таймстамп(кількість мілісекунд що пройшли з 1.01.1970),
// дані беруться з json openweathermap (coord(dt))
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "1aab64290751190d2719fa18bf8fa94d";
let units = "metric";
let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
let city = "Dnipro";
let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);
