// GLOBAL VARS
//// First, the list of background images through which to cycle.

var backgrounds = ["../img/wood-water.jpg",
                   "../img/library-books.jpg",
                   "../img/blurry-city-traffic.jpg", 
                   "../img/orange-tree.jpg",
                   "../img/designer-desk.jpg",
                   "../img/desk-and-chair.jpg",
                   "../img/old-tools.jpg"];

// FUNCTION DEFINITIONS
//// makeHighlightable(element) - used to animate front page feeder link

function makeHighlightable(element, highlightColor) {
  var defaultColor = element.css("background-color");
  var defaultText = element.html();
  
  element.hover(function() {
    element.html(defaultText + " &raquo;").animate({backgroundColor: highlightColor}, {duration:200, queue:false}); }, function() {
    element.html(defaultText).animate({backgroundColor: defaultColor}, {duration:200, queue:false}); });
}

//// makeHideable(hideableContainer, hideable, peek) - animates bottom navbar

function makeHideable(hideableContainer, hideable, peek) {
  hideable.css("top", peek);
  hideableContainer.hover(function() {
    hideable.animate({top: "0%"}, {duration:500, queue:false}); }, function() {
    hideable.animate({top: peek}, {duration:500, queue:false}); })
}

//// preloadBackgrounds(imageList) - populates a hidden div with the background images as a means of pre-loading the images.

function preloadBackgrounds(imageList) {
  for (i = 0; i < imageList.length; i++) {
    $("div#preload").append("<img src=" + imageList[i] + "></img>");
  }
}

//// changeBackgrounds(imageList) - cycles through the background images on the front page.

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

//// handleBackgrounds(imagelist) - wrapper for background image functions

function handleBackgrounds(imageList) {
  preloadBackgrounds(imageList);
  changeBackgrounds(imageList);
}

//// handleHighlightItems(highlightItems) - unused presently, was adding hover animation to navbar links but animation queueing got all fucked up

function handleHighlightItems(highlightItems) {
  highlightItems.each(function() { makeHighlightable($(this).children(), "rgba(255,255,255,0.4)"); 
  });
}

// CALL ALL THE FUNCTIONS
$(window).load(makeHighlightable($("#feeder"), "#4D4"));
$(window).load(makeHideable($(".hideable-container"), $(".hideable"), "75%"));
$(window).load(handleHighlightItems($(".item")));
$(window).load(handleBackgrounds(backgrounds));
