
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key = "1454172ef18f221f0c53c6a1b5828542";
const img = document.querySelector(".weather_img");
const input = document.querySelector(".search input");
const button = document.querySelector(".search_button");


async function check_weather(city) {
    let response = await fetch(api_url + city + `&appid=${api_key}`);
    let data = await response.json();
    console.log(data);

    if (data.cod == 404) {
        document.querySelector(".city").innerHTML = "Invalid city";
        document.querySelector(".temp").innerHTML = "0 °c";
        document.querySelector(".humidity").innerHTML = "0%";
        document.querySelector(".wind").innerHTML = "0 km/h";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clouds") {
            img.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            img.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            img.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            img.src = "images/snow.png";
        }
    }



}

button.addEventListener("click", () => {
    check_weather(input.value);
})


