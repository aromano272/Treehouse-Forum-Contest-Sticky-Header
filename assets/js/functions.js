$( document ).ready(function() {


var $header = $("main-header"), 
    $menu = $("main-nav__wrapper"), 
    yPos, 
    yPosDiff = window.pageYOffset, 
    yPosDiffHolder, 
    headerHeight = $header.outerHeight(),
    menuHeight = $menu.outerHeight();



var yScroll = function() {
  yPosDiff = window.pageYOffset;
  
  if(yPos > yPosDiff) {
    // going up
    yPosDiffHolder += yPos - yPosDiff;
  } else if(yPos < yPosDiff) {
    // going down
    yPosDiffHolder = 0;
  }
  
  if(yPosDiffHolder > 120 || window.pageYOffset < 100) {
    console.log("first if trigger" + " yPos: " + yPos);
    // show header
    $header.removeClass("main-header--hidden");

  } else if(yPos < 150) {
    console.log("second if trigger" + " yPos: " + yPos);
    // hide header
    $header.addClass("main-header--hidden");

  } else {
    console.log("else trigger" + " yPos: " + yPos);
    // hide header
    $header.addClass("main-header--hidden");

  } 
  yPos = window.pageYOffset;
}

window.addEventListener("scroll", yScroll);








});