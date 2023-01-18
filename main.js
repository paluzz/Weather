$(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      var location = $('#location').val();
      var apiKey = 'YOUR_API_KEY';
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;
  
      $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
          var temperature = data.main.temp;
          var weather = data.weather[0].description;
          var icon = data.weather[0].icon;
          var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
          $('#weather-data').html("<p>Temperature: " + temperature + "</p>" + "<p>Weather: " + weather + "</p>");
          $('#weather-icon').html("<img src='" + iconUrl + "'>");
        },
        error: function(error) {
          if (error.status === 404) {
            $('#error-message').html("<p>Location not found</p>");
          }
        }
      });
    });
  });
  