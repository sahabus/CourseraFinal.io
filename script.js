$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  // this part is make the navbar menu button to auto collapse if user click anywhere on the page
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });


  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});