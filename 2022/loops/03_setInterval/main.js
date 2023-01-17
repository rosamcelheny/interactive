var images = [
  "images/fsa_01.jpeg", 
  "images/fsa_02.jpeg", 
  "images/fsa_03.jpeg", 
  "images/fsa_04.jpeg", 
  "images/fsa_05.jpeg", 
  "images/fsa_06.jpeg", 
  "images/fsa_07.jpeg", 
  "images/fsa_08.jpeg", 
  "images/fsa_09.jpeg",
];
var slideshow;

function update_image() {
  var index = Math.floor(Math.random() * images.length);
  var image_src = images[index];
  $('img').attr("src", image_src);
}

// update_image();

$("#play").click(function(){
  slideshow = setInterval(update_image, 1000);
});

$("#pause").click(function() {
  clearInterval(slideshow);
});









// to do:
// when you click play, show one image at a time for 2s each.
// when you click pause, pause the slideshow.
// when the page loads, show an image.
