function highlightFeeder() {
  $("#feeder").html("Take The Tour &raquo;").animate({backgroundColor:"#4D4"}, 200);
}

function deHighlightFeeder() {
  $("#feeder").html("Take The Tour").animate({backgroundColor:"#27A027"}, 200);
}
var backgrounds = ["../img/blurry-city-traffic.jpg", 
                   "../img/orange-tree.jpg",
                   "../img/designer-desk.jpg",
                   "../img/desk-and-chair.jpg",
                   "../img/old-tools.jpg"];


function changeBackgrounds(imageList) {
  var i = 0;

  //Setup initial image
  
  setInterval(function () {
    $("body").css("background-image", "url(" + imageList[i++] + ")");

    $("#splash").fadeOut(1000, function () {
      $("#splash").css("background-image", "url(" + imageList[i] + ")");
      $("#splash").fadeIn(1000);
    });

    if (i == imageList.length) i = 0;

  }, 10000);
}
    
$(window).load(changeBackgrounds(backgrounds));
