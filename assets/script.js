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
        $(".dropdown").append(cities);
      }
    }
  });
console.log(cities);

// var form = $("#cityDropdown");

// form.append(cityList);
// function appendList(listElement)
// json2array(data);
// function json2array(data) {
//   var keys = Object.keys(data);
//   keys.forEach(function (key) {
//     result.push(data[key]);
//   });
//   console.log(result);

// 1. declare url variable (add truck choice to search query)
// 2. fetch .then functions
