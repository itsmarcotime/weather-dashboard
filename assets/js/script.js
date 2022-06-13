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

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + inputEl.value + "id=524901&appid=98802acd30e720990862db94022d3f8d");

};


buttonEl.addEventListener("click", )
