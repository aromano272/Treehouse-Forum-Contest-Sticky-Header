// $( document ).ready(function() {


var $header = $(".main-header"), 
    $menu = $(".main-nav__wrapper"), 
    yPosDelay, 
    yPosLive = window.pageYOffset, 
    yPosDiffHolder, 
    headerHeight = $header.outerHeight(),
    headingHeight = $(".main-header__heading").outerHeight(),
    menuHeight = $menu.outerHeight();



var yScroll = function() {
  yPosLive = window.pageYOffset;
  
  if(yPosDelay > yPosLive) {
    // going up
    yPosDiffHolder += yPosDelay - yPosLive;
  } else if(yPosDelay < yPosLive) {
    // going down
    yPosDiffHolder = 0;
  }
  

  if(yPosLive < headingHeight) {
    $header.removeClass("main-header--hidden");
    $header.css("top", -yPosLive + "px")
  } else {
    $header.addClass("main-header--hidden");
    $header.css("top", -headingHeight + "px");
  }


  // if(yPosDiffHolder > 120 || window.pageYOffset < 100) {
  //   console.log("first if trigger" + " yPosDelay: " + yPosDelay);
  //   // show header
  //   $header.removeClass("main-header--hidden");

  // } else if(yPosDelay < 150) {
  //   console.log("second if trigger" + " yPosDelay: " + yPosDelay);
  //   // hide header
  //   $header.addClass("main-header--hidden");

  // } else {
  //   console.log("else trigger" + " yPosDelay: " + yPosDelay);
  //   // hide header
  //   $header.addClass("main-header--hidden");

  // } 
  yPosDelay = window.pageYOffset;
}

window.addEventListener("scroll", yScroll);








// });