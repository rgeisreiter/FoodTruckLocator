var cities = [];
var arrayCity = [];
var search = document.querySelector(".searchHistory");

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
      // var valid = arr[i][1].ios_app_url;
      if (country == "us") {
        cities.push(city);
      }
    }

    for (var i = 0; i < cities.length; i++) {
      var selectEl = document.getElementById("dropdown");
      var option = document.createElement("option");
      option.text = cities[i];
      selectEl.add(option);
    }
  });

if (JSON.parse(localStorage.getItem("arrayCity"))) {
  arrayCity = JSON.parse(localStorage.getItem("arrayCity"));
}
var submitEl = document.getElementById("submit");
submitEl.addEventListener("click", function (e) {
  var input = document.getElementById("dropdown").value;
  console.log(input);
  var searchHTML = "./results.html?q=" + input;
  console.log(arrayCity.indexOf(input));
  if (arrayCity.indexOf(input) === -1) {
    arrayCity.push(input);
    localStorage.setItem("arrayCity", JSON.stringify(arrayCity));
  }

  location.assign(searchHTML);
});

for (var i = 0; i < arrayCity.length; i++) {
  var city = arrayCity[i];
  var li = document.createElement("li");
  li.textContent = city;
  li.setAttribute("data-index", i);
  search.appendChild(li);
}
