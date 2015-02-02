function highlightFeeder() {
  $("#feeder").html("Take The Tour &raquo;").animate({backgroundColor:"#4D4"}, 200);
}

function deHighlightFeeder() {
  $("#feeder").html("Take The Tour").animate({backgroundColor:"#27A027"}, 200);
}

var backgrounds = ["../img/wood-water.jpg",
                   "../img/library-books.jpg",
                   "../img/blurry-city-traffic.jpg", 
                   "../img/orange-tree.jpg",
                   "../img/designer-desk.jpg",
                   "../img/desk-and-chair.jpg",
                   "../img/old-tools.jpg"];

function preloadBackgrounds(imageList) {
  for (i = 0; i < imageList.length; i++) {
    $("div#preload").append("<img src=" + imageList[i] + "></img>");
  }
}

function changeBackgrounds(imageList) {
  var i = 0;

  setInterval(function () {
    $("#base").css("background-image", "url(" + imageList[i] + ")");
  
    $("#splash").fadeOut(1000, function () {
      i++; //should probably do this as modulus but w/e
      if (i == imageList.length) i = 0;

      $("#splash").css("background-image", "url(" + imageList[i] + ")");
      $("#splash").fadeIn(2000);
    });
  }, 10000);
}

function handleBackgrounds(imageList) {
  preloadBackgrounds(imageList);
  changeBackgrounds(imageList);
}

$(window).load(handleBackgrounds(backgrounds));
