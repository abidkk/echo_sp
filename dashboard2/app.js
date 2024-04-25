let menu = () => {
  // alert("Click ")
  document.getElementsByClassName("sidebar")[0].style.marginLeft = "100vw";
  document.getElementsByClassName("sidebar")[0].style.width = "100%";
};
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
});

let table1 = new DataTable("#myTable");
let table2 = new DataTable("#records-table");
