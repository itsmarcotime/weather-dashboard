var inputEl = document.querySelector("#search-input");
var buttonEl = document.querySelector("#btn");
var h2El = document.querySelector("#cityId");
var dateEl = document.querySelector("#dateId");
var tempEl = document.querySelector("#tempId");
var humidEl = document.querySelector("#humid");
var windEl = document.querySelector("#windId");
var indexEl = document.querySelector("#index");

//function to call api
var apiFunction = function() {

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + inputEl.value + "id=524901&appid=98802acd30e720990862db94022d3f8d")
    .then(response => response.json).then(data => console.log(data)).catch(err => alert("Enter Valid City"));

};


buttonEl.addEventListener("click", apiFunction());
