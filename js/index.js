// script for index

$(document).ready(function() {

    console.log("in doc ready");
    // li is the element that is being selected to use the hover function on
    $("li").hover(function(){
        // this is the color when you are hovering over it
        $(this).css("background-color", "black")
    }, function(){
        // this is the color after you move your mouse (stopped hovering)
        $(this).css("background-color", "white")
    })
    
  });