API_KEY = "a03dc0f287f7340ea58f5df888009402";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather-info");
      weather.innerText = `${data.name} : ${
        data.weather[0].main
      } / ${Math.round(data.main.temp)}℃`;
    })
  );
}
function onGeoError() {
  alert("Can't get your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
