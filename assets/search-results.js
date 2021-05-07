var citySearched = document.location.search.split("=")[1];
var searchQuery = citySearched.toLowerCase();
console.log(searchQuery);

// Get search results from API

function displaySearchResults(trucksObject) {
  console.log(trucksObject.name);
  var truckCard = document.createElement("div");
  truckCard.classList.add("card", "bg-light", "text-dark", "mb-3", "p-3");

  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  truckCard.append(cardBody);

  var cardTitle = document.createElement("h3");
  cardTitle.textContent = trucksObject.name;

  var truckDescription = document.createElement("p");
  truckDescription.innerHTML = trucksObject.description + "<br/>";

  var truckAddress = document.createElement("p");
  truckAddress.innerHTML = "Address: " + trucksObject.last.display + "<br/>";

  var truckEmail = document.createElement("a");
  truckEmail.href = "mailto:" + trucksObject.email;
  truckEmail.innerHTML = "email: " + trucksObject.email + "<br/>";

  var truckPhone = document.createElement("p");
  truckPhone.innerHTML = "Phone: " + trucksObject.phone + "<br/>";

  if (trucksObject.images) {
    var truckLogo = document.createElement("img");
    truckLogo.src = trucksObject.images.logo;
  }

  var truckURL = document.createElement("a");
  truckURL.href = "http://" + trucksObject.url;
  truckURL.innerHTML = trucksObject.url + "<br/>";

  cardBody.append(
    cardTitle,
    truckDescription,
    truckAddress,
    truckEmail,
    truckPhone,
    truckLogo,
    truckURL
  );
  resultsEl = document.getElementById("results");
  resultsEl.append(cardBody);
}

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
    var arr2 = Object.keys(arr[1][1]).map((key) => [key, arr[1][1][key]]);

    console.log(arr2);
    for (var i = 0; i < arr2.length; i++) {
      displaySearchResults(arr2[i][1]);
    }
  });
