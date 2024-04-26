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
      label: '# of Votes',
      data: [18, 8, 12, 2, 14, 5, 10, 7, 7, 4, 11, 9],
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