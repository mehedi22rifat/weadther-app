let apiKey = "c6013afe65215ecb335f85d5ef53903b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchInput = document.querySelector(".search-fuild input");
let searchBtn = document.querySelector(".search-fuild button");
let weadtehrImage = document.querySelector(".weadther-image");
let cityis = document.getElementsByClassName(".city");

async function checkWeadther(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weadther").style.display = "none";
  } else {
    document.querySelector(".weadther").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  let data = await response.json();
  console.log(data);

  if (!data.name) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weadther").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weadther").style.display = "block";
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humindity-percent").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind-percent").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weadtehrImage.src = "images/weadther1.jpeg";
  } else if (data.weather[0].main == "Clear") {
    weadtehrImage.src = "images/weadther2.jpeg";
  } else if (data.weather[0].main == "Rain") {
    weadtehrImage.src = "images/weadther3.png";
  } else if (data.weather[0].main == "Drizzle") {
    weadtehrImage.src = "images/weadther4.jpeg";
  } else if (data.weather[0].main == "Mist") {
    weadtehrImage.src = "images/weadther5.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeadther(searchInput.value);
});
