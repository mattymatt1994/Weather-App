//API Weather App Project

function myWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=504cf971d1fe1771c018f0c916d49420",
    { mode: "cors" }
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
input.textContent = "Add Place";

function selectWeather(input) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=", { mode: "cors" })
    .then((res) => {
      res.json();
    })
    .then((input) => {
      console.log(input);
    })
    .catch((err) => {
      console.error(err);
    });
  return input;
}

class SelectedAreas {
    
  constructor(save, home) {
    this.save = save;
    this.home = home;
  }

  removeArea(remove) {
    for (let i = 0; i < this.home.length; i--) {
      const element = this.home[i];
      console.log(element);
      if (element == remove) {
        return true;
      } else {
        return false;
      };
    };
  }
  addArea(add) {
    for (let i = 0; i < this.save.length; i++) {
      const element = this.save[i];
      console.log(element);
      if (element == add) {
        return true;
      } else {
        return false;
      };
    };
  };
  
};

const button = document.createElement("button");
button.textContent = "Fetch";
Date.now();
