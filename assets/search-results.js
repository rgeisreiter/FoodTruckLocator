var citySearched = document.location.search.split("=")[1];
var searchQuery = citySearched.toLowerCase();
console.log(searchQuery);

// Get search results from API

var cities = [];

fetch(
  "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/" +
    searchQuery +
    "/"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var arr = Object.keys(data).map((key) => [key, data[key]]);
    console.log(arr);
    var arr2 = Object.keys(arr[1][1]).map((key) => [key, arr[1][1][key]]);

    // console.log(arr2);
    // console.log(arr2[0][0]);
    // console.log(arr2[0][1].description);

    var listEl = document.getElementById("search-results");
    var nameEl = document.createElement("li");
    nameEl.innerHTML = arr2[0][0];
    console.log(nameEl.text);
    listEl.appendChild(nameEl);

    //   for (var i = 0; i < arr.length; i++) {
    //         var city = arr[i][1].name;
    //   var country = arr[i][1].country;
    //   if (country == "us") {
    //     cities.push(city);
    //   }
    // }
  });
