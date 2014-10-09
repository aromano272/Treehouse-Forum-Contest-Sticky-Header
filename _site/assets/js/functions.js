// $( document ).ready(function() {


var $header = $(".main-header"), 
    $menu = $(".main-nav__wrapper"), 
    yPosDelay, 
    yPosLive = window.pageYOffset, 
    yPosDiffHolderUp = 0,
    yPosDiffHolderDown = 0, 
    headerHeight = $header.outerHeight(),
    headingHeight = $(".main-header__heading").outerHeight(),
    menuHeight = $menu.outerHeight();

// sets initial value
$(".main-content").css("padding-top", headerHeight + 70 + "px");

// fix for mobile, when the heading wraps around it changes the header height
$(window).resize(function() {
  headerHeight = $header.outerHeight();
  headingHeight = $(".main-header__heading").outerHeight();
  menuHeight = $menu.outerHeight();

  $(".main-content").css("padding-top", headerHeight + 70 + "px");
});



var yScroll = function() {
  yPosLive = window.pageYOffset;
  

  

  if(yPosLive <= headingHeight) {
    $header.removeClass("main-header--hidden");
    $header.css("top", -yPosLive + "px");
  } else if(yPosLive > headingHeight && yPosLive < headingHeight + 200) {
    $header.addClass("main-header--hidden");
    $header.css("top", -headingHeight + "px");
  
    // if far enough from the top
  } else if(yPosLive > headingHeight + 200) {

      if(yPosDelay > yPosLive) {
        // going up
        yPosDiffHolderUp += yPosDelay - yPosLive;
        yPosDiffHolderDown = 0;
      } else if(yPosDelay < yPosLive) {
        // going down
        yPosDiffHolderUp = 0;
        yPosDiffHolderDown += yPosLive - yPosDelay;
      };

      if(yPosDiffHolderDown > 150) {
        // console.log("first if trigger" + " yPosDelay: " + yPosDelay);
        console.log("first if trigger" + " yPosDiffHolderUp: " + yPosDiffHolderUp + " yPosDiffHolderDown: " + yPosDiffHolderDown);
        
        // hide nav
        $header.css("top", -(yPosDiffHolderDown - 150) - headingHeight + "px");


      } else if(yPosDiffHolderUp > 150) {
        // console.log("second if trigger" + " yPosDelay: " + yPosDelay);
        console.log("second if trigger" + " yPosDiffHolderUp: " + yPosDiffHolderUp + " yPosDiffHolderDown: " + yPosDiffHolderDown);
        
        // show nav
        $header.css("top", (yPosDiffHolderUp - 150) -headerHeight + "px");
        if(parseInt($header.css("top")) > -(headerHeight - menuHeight)) {
          $header.css("top", -headingHeight + "px");
        }

      } else {
        // console.log("else trigger" + " yPosDelay: " + yPosDelay);
        console.log("else trigger" + " yPosDiffHolderUp: " + yPosDiffHolderUp + " yPosDiffHolderDown: " + yPosDiffHolderDown);
        
        // hide nav

      }
    } else {
      // show nav
    }

  

  yPosDelay = window.pageYOffset;
}

window.addEventListener("scroll", yScroll);








// });