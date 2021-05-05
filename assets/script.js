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
fetch(
  "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/vendors/"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var arr = Object.keys(data).map((key) => [key, data[key]]);
    console.log(arr);
    console.log(arr[0][1].name);
    console.log(arr[0][1].description);

    console.log(arr[0][1].last.display);
  });

// json2array(data);
// function json2array(data) {
//   var keys = Object.keys(data);
//   keys.forEach(function (key) {
//     result.push(data[key]);
//   });
//   console.log(result);

// 1. declare url variable (add truck choice to search query)
// 2. fetch .then functions
