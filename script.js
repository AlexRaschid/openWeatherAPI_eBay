$(document).ready(function() {


    $("#buttonInput").on("click", function(event) {
        var userInput = $("#userInput").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=203c9b901d5404f094111c9da3767754";
        console.log(userInput);
        console.log(url);
        $.get(url, function(results) {
            console.log(userInput);
            console.log(results);

            $("#weather-results").prepend("<h4> Temperature: " + results["main"]["temp"] + "</h4>");
            $("#weather-results").prepend("<h4> Humidity: " + results["main"]["pressure"] + "</h4>");
            $("#weather-results").prepend("<h4> Wind Speed: " + results["wind"]["speed"] + "</h4>");
            
            $("#weather-results").prepend("<img src = 'https://api.mapbox.com/styles/v1/alexraschid/ciyxgrigk002z2sn8jo29puor/static/" + results["coord"]["lon"] +"," +  results["coord"]["lat"] +   ", 12 /600x400?access_token=pk.eyJ1IjoiYWxleHJhc2NoaWQiLCJhIjoiY2l5eGdqd3I0MDBhMzMzcngwaDc3YzZmOCJ9.aAJ0NfqPkA_3CdtDgqCulw'>");
            $("#weather-results").prepend("<h4> Weather Map: </h4>");
            
           


        });
        
        var url2 = "http://api.openweathermap.org/data/2.5/forecast?q="+ userInput +"&appid=203c9b901d5404f094111c9da3767754";
        $.get(url2, function(results2) {
            
            $("#weather-results").prepend("<h4> Weather Description: " + results2["list"][0]["weather"][0]["description"] + "</h4>");
            $("#weather-results").prepend("<h3>"+ userInput +"'s Forecast: </h3>");
            $("#weather-results").prepend("<h4>------------------------------</h4>");
           // $("#weather-results").prepend("<h4> Time: " + results2["wind"]["speed"] + "</h4>");
        
        });

//APIS

//http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=203c9b901d5404f094111c9da3767754
//https://api.mapbox.com/styles/v1/alexraschid/ciyxgrigk002z2sn8jo29puor/static/-74.0059,40.7128,13/600x400?access_token=pk.eyJ1IjoiYWxleHJhc2NoaWQiLCJhIjoiY2l5eGdqd3I0MDBhMzMzcngwaDc3YzZmOCJ9.aAJ0NfqPkA_3CdtDgqCulw
    });














})
