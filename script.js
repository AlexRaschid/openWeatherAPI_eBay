$(document).ready(function() {


    $("#buttonInput").on("click", function(event) {
        var userInput = $("#userInput").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=203c9b901d5404f094111c9da3767754";
        console.log(userInput);
        console.log(url);
        $.get(url, function(results) {
            console.log(userInput);
            console.log(results);

            $("#weather-results").append("<h4>------------------------------</h4>");
            $("#weather-results").append("<h4>" + results["main"]["temp"] + "</h4>");
            $("#weather-results").append("<h4>" + results["main"]["pressure"] + "</h4>");
            $("#weather-results").append("<h4>" + results["wind"]["speed"] + "</h4>");


        });



    });














})
