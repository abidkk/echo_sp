// let menu = () => {
//   // alert("Click ")
//   document.getElementsByClassName("sidebar")[0].style.marginLeft = "100vw";
//   document.getElementsByClassName("sidebar")[0].style.width = "100%";
// };
$(document).ready(function () {
  var sidebarOpen = false;
  $(".menu-btn").click(function () {
    if (sidebarOpen == false) {
      $(".sidebar").css("left", "0");
      sidebarOpen = true;
    } else {
      $(".sidebar").css("left", "-100vw");
      sidebarOpen = false;
    }
  });



  $("#myButton").click(function(){
    alert("Button clicked!");
});
});



let table1 = new DataTable("#myTable");
let table2 = new DataTable("#records-table");


// Charts
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: '# of Reported',
      data: [18, 8, 12, 2, 14, 5, 10, 7, 7, 4, 11, 9],
      borderWidth: 1
    },
    {
      label: '# of Solved',
      data: [10, 7, 3, 11, 9, 5, 2, 7, 4, 12, 18, 10],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



// MAP JS
// var map = L.map('map').setView([51.505, -0.09], 13);
var map = L.map('map').setView([33.6844, 73.0479], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


javascript
function setMapView(locationName) {
    // Assuming 'map' is the ID of your Leaflet map container
    var map = L.map('map');
    
    // Coordinates for Karachi
    var karachiCoordinates = [24.8607, 67.0011];

    // Set the view of the map to Karachi's coordinates
    map.setView(karachiCoordinates, 13);
}

// Call the function to set the view to Karachi
setMapView('Karachi');

