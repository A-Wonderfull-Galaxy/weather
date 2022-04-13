//api key
const apiKey = "b56281468079a6d5e7936b006a3e4899"; 
//dom var
var btnSearchEl = document.querySelector(".btn-search");
var cityInputEl = document.querySelector("#search-city");
var searchCityInputEl = document.querySelector(".search-city-input");
var selectedCityEl = document.querySelector("#selected-city");
var fiveDaysEl = document.querySelector(".five-days")
var day = fiveDaysEl.children;
//var theDate = moment().format("DD MM YYYY");
var defaultLocation = ["Trenton"];
var searchedCity = "";
//today var
var todayDateEl = document.querySelector("#today-date");
var todayTempEl = document.querySelector("#today-temp");
var todayWindEl = document.querySelector("#today-wind");
var todayHumidEl = document.querySelector("#today-humid");
//five day var
var fiveDayDateEl = document.querySelector(".five-day-date");
var fiveDayTempEl = document.querySelector(".five-day-temp");
var fiveDayWindEl = document.querySelector(".five-day-wind");
var fiveDayHumidEl = document.querySelector(".five-day-humid");
// btn
var btnSearchEl = document.querySelector("#btn-search");






var weatherApi = function(searchingCity){
    var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${searchingCity}&appid=${apiKey}&units=imperial`
    fetch(apiUrl)
        .then(function(response){
            if (response.ok){
                response.json().then(function(data){
                    todayInfo(data);
                    fiveDayInfo(data);
                    weatherIcon(data);
                    
                    searchedCity = searchingCity;
                });  
            }else{
                alert("City was not found please try again.")
            }
        })
}

var todayInfo = function(data){
    selectedCityEl.textContent = data.city.name;
    todayDateEl.textContent;
    todayTempEl.textContent= data.list[2].main.temp;
    todayWindEl.textContent = data.list[2].wind.speed;
    todayHumidEl.textContent = data.list[2].main.humidity;
    
}

var fiveDayInfo = function(data){
    var nextDay = 0;
    for (var i=0; i <day.length;i++){
        var child=day[i];
        child.children[2].textContent = "Temp: " + data.list[nextDay].main.temp + "F";
        child.children[3].textContent = "wind: " + data.list[nextDay].wind.speed + "MPH";
        child.children[4].textContent = "Humidity: " + data.list[nextDay].main.humidity+ "%";
        nextDay+=5;
    }
}

var weatherIcon = function(){
    
};

searchForCityBtn = function(anything){
    anything.preventDefault();

    var city = searchCityInputEl.value.trim();
    if (city){
        weatherApi(city);
        searchCityInputEl.value = "";
    }else{
        alert("Enter a City")
    }
}

var setDate = function(){
    theDate.closest("span").textContent = theDate;

    for (var i= 0; i <day.length;i++){
        var day = eachDay[i];
        child.children[0].textContent = moment().add(i+1, "days").format("MMM Do");
    }
}

// var defaultLaunch = function(){
//     searchCityInputEl.textContent = defaultLocation[1];
// }

// defaultLaunch();

btnSearchEl.addEventListener("click", searchForCityBtn);
