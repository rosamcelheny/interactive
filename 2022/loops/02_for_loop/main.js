var images = [
  "images/fsa_01.jpeg", 
  "images/fsa_02.jpeg", 
  "images/fsa_03.jpeg",
  "images/fsa_08.jpeg", 
  "images/fsa_04.jpeg", 
  "images/fsa_05.jpeg", 
  "images/fsa_06.jpeg", 
  "images/fsa_07.jpeg", 
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_09.jpeg"
]

var range = images.length;


$("button").click(function(){

  for (var i = 0; i < images.length; i++) {
    
    var image = document.createElement("img");
    image.src = images[i];
    $('body').append(image);
  }

});

// TO DO:
// when you click the button, show each image in the list.
// add some images, and still show each image in the list.