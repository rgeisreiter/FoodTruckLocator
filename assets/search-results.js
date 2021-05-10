// $(document).ready(function () {
//   $("#myModal").modal("hide");
// });

var citySearched = document.location.search.split("=")[1];
var searchQuery = citySearched.toLowerCase();
console.log(searchQuery);

// Get search results from API

function mapIt(lat, long, name) {
  document.location =
    "./map.html?long=" + long + "&lat=" + lat + "&name=" + name;
}

function displaySearchResults(trucksObject) {
  console.log(trucksObject.name);
  var truckCard = document.createElement("div");
  truckCard.classList.add("card");

  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  truckCard.append(cardBody);

  if (trucksObject.name) {
    var cardTitle = document.createElement("h3");
    cardTitle.textContent = trucksObject.name;
  }

  if (trucksObject.description) {
    var truckDescription = document.createElement("p");
    truckDescription.classList.add("truck-description");
    truckDescription.innerHTML = trucksObject.description + "<br/>";
  }

  if (trucksObject.last.display) {
    var truckAddress = document.createElement("p");
    truckAddress.classList.add("truck-address");
    truckAddress.innerHTML = trucksObject.last.display + "<br/>";
  }

  if (trucksObject.email) {
    var truckEmail = document.createElement("a");
    truckEmail.href = "mailto:" + trucksObject.email;
    truckEmail.innerHTML = trucksObject.email + "<br/>";
  }

  if (trucksObject.phone) {
    var truckPhone = document.createElement("p");
    truckPhone.innerHTML = trucksObject.phone + "<br/>";
  }

  var truckLogo = document.createElement("img");
  truckLogo.classList.add("truck-logo");
  if (trucksObject.images) {
    truckLogo.src = trucksObject.images.logo;
  } else {
    truckLogo.src = "./assets/Img/FoodTruckIcon.png";
  }

  if (trucksObject.url) {
    var truckURL = document.createElement("a");
    truckURL.href = "http://" + trucksObject.url;
    truckURL.innerHTML = "<br/>" + trucksObject.url + "<br/>";
  }

  var mapButton = document.createElement("button");
  mapButton.classList.add("map-button", "btn");
  mapButton.setAttribute("id", trucksObject.name);
  mapButton.innerHTML = "Map it!";

  cardBody.append(
    cardTitle,
    truckDescription,
    truckAddress,
    truckEmail,
    truckPhone,
    truckLogo,
    truckURL,
    mapButton
  );

  var resultsEl = document.getElementById("results");
  resultsEl.append(cardBody);

  var lat = trucksObject.last.latitude;
  var long = trucksObject.last.longitude;
  // Add event listener

  mapButton.addEventListener("click", function (e) {
    e.preventDefault();
    mapIt(lat, long, trucksObject.name);
  });
}

// Check if API page exists
function urlExists(url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  if (http.status === 200) {
    return true;
  } else {
    return false;
  }
}

var url =
  "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/" +
  searchQuery +
  "/";

if (urlExists(url)) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var arr = Object.keys(data).map((key) => [key, data[key]]);
      var arr2 = Object.keys(arr[1][1]).map((key) => [key, arr[1][1][key]]);

      console.log(arr2);

      if (arr2.length != 0) {
        for (var i = 0; i < arr2.length; i++) {
          displaySearchResults(arr2[i][1]);
        }
      } else {
        noResultsEl = document.getElementById("results");
        var notice = document.createElement("h1");
        notice.classList.add("no-results");
        notice.innerHTML = "Sorry, no food trucks added for this city yet";
        noResultsEl.append(notice);
      }
    });
} else {
  noResultsEl = document.getElementById("results");
  var notice = document.createElement("h1");
  notice.classList.add("no-results");
  notice.innerHTML = "Sorry, no food trucks added for this city yet";
  noResultsEl.append(notice);
}
