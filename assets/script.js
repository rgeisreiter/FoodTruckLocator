// Truck Locator Application - Javascript

var result = [];
var cities = [];
fetch(
  "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/regions/"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var arr = Object.keys(data).map((key) => [key, data[key]]);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i][1].country == "us") {
        cities.push(arr[i][1].name);
        $(".dropdown-content").append(cities);
      }
    }
  });
console.log(cities);
