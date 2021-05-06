// Truck Locator Application - Javascript

// Variable Declaration
// 1. Idenfity selector for user food choice (dropdown selection)
// 2.

// Get truck locator api data
// 1. declare url variable (add food choice to search query)
// 2. fetch .then functions

// Location identifier - how do we get user current location??

// Get mapbox api data
// 1. declare url variable (add truck address from locator api (lat, long? Address?) choice to search query)
// 2. fetch .then functions

// Get yelp api data
// fecth call to streetfood api
// var truckData = {
//   name = '',
//   description = '',
//   last ='',
// }
// var truckList= [truckData];

var cities = [];

fetch(
  "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/regions/"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var arr = Object.keys(data).map((key) => [key, data[key]]);
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      var city = arr[i][1].name;
      var country = arr[i][1].country;
      if (country == "us") {
        cities.push(city);
      }
    }
    console.log("Cities array---------");
    console.log(cities[0]);
    for (var i = 0; i < cities.length; i++) {
      var selectEl = document.getElementById("dropdown");
      var option = document.createElement("option");
      option.text = cities[i];
      selectEl.add(option);
    }
  });

var submitEl = document.getElementById("submit");
submitEl.addEventListener("click", function () {
  var input = document.getElementById("dropdown").value;
  console.log(input);
});
