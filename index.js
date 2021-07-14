const btn = document.querySelector("#citySearchBtn");
const citySearched = document.querySelector("#yourCity").value; 
const currTemp = document.querySelector("#currTemp");
const currHum = document.querySelector("#currHum");
const currWind = document.querySelector("#currWind");
const fiveDayCard = document.querySelector(".fiveDayCard");
const currentWeatherIcn = document.querySelector("#currentWeatherIcn");


/*Getting Current Location
window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
        })
    }
})*/



//updates dom on results container
btn.addEventListener("click", () => {
    
    const citySearched = document.querySelector("#yourCity").value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${citySearched},au&units=metric&appid=2ffd9582b4b57a4f7c33fcb8f4e2e5c6`
    const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearched},au&Appid=2ffd9582b4b57a4f7c33fcb8f4e2e5c6&units=metric`
    //const apiIcon = `http://openweathermap.org/img/wn/${iconIdc}@2x.png`

    
    $('#currDate').text(moment().format('MMMM Do YYYY, h:mm a'));

    console.log(citySearched);
    
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temp, humidity,} = data.main;
            currTemp.innerHTML = "Temp: " + temp + " degrees c";
            currHum.innerHTML = "Humidity: " + humidity + "%";
            const {speed} = data.wind;
            currWind.innerHTML = "Wind: " + speed + " knots";
            const cityName = document.querySelector("#city");
            cityName.innerHTML = citySearched;

        });     
        
       

    
    


    /*fetch(apiUv)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            
        });*/



    fetch(apiForecast)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            
        });      
});



/*const lat = data.coord.lat;
            const lon = data.coord.lon;
            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);
            const icon = data.weather[0].icon;
            const apiIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`
            currentWeatherIcn.innerHTML = apiIcon; */