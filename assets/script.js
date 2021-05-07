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

    for (var i = 0; i < cities.length; i++) {
      var selectEl = document.getElementById("dropdown");
      var option = document.createElement("option");
      option.text = cities[i];
      selectEl.add(option);
    }
  });


<<<<<<< HEAD
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}​

console.log("When you run the site for the first time, there is potential for an error. If you receive this error, click on the button to request access and you will be let in. The problem will not occur again.")
=======
var submitEl = document.getElementById("submit");
submitEl.addEventListener("click", function () {
  var input = document.getElementById("dropdown").value;
  console.log(input);
  var searchHTML = "./results.html?q=" + input;
  location.assign(searchHTML);
});

>>>>>>> 227c3d406800bf9548c3f1fcd29957641d9b6625
