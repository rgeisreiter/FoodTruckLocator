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

// AJAX call requires a third party library, jQuery
$.ajax({
  url: "https://api.yelp.com/v3/businesses/search",
  headers: {
    Authorization:
      "Bearer WAqlcaCxGhgzhQglKDmrOu5U3uh4hVvgJUH3BM6_Gy2LYSifSi00jlueG91_X1LwcwvsnuO0gVvr6SxYAU3WRr_lpJWKzmiWaoh0CUAHnkL7M5nyLV7ehh_BwLWSYHYx",
  },
  method: "GET",
}).then(function (response) {
  console.log("Ajax Reponse \n-------------");
  console.log(response);
});

// 1. declare url variable (add truck choice to search query)
// 2. fetch .then functions
