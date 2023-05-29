//API Weather App Project

function myWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=504cf971d1fe1771c018f0c916d49420", {mode : "cors"}
  )
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

const input = document.createElement("input");

function selectWeather(input) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=", {mode : "cors"})
  .then((res) => {
    res.json();
  })
  .then((input) => {
    console.log(input);
  })
  .catch((err) => {
    console.error(err);
  })
  return input;
}

