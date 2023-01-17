// this is where you write your javascript

$(window).keydown(function(key_press_event){

  var key = key_press_event.key;

  console.log(key);

  if (key == "Enter") {
    $("body").append("<br>");
  } 
  else {
    $("body").append(key);
  }

  // if (key == "a") {
  //   $(".message").html("Apple");
  //   $("body").css("background-color", "initial");
  // }
  // else if (key == "b") {
  //   $(".message").html("Bagpipes");
  //   $("body").css("background-color", "initial");
  // }
  // else if (key == "c") {
  //   $(".message").html("Cadillac");
  //   $("body").css("background-color", "initial");
  // }
  // else if (key == "r") {
  //   $("img").toggle();
  // }
  // else if (key == "z") {
  //   $("body").append("<h1>Z is the best letter</h1>");
  // }
  // else {
  //   // $("body").css("background-color", "red");
  // }

});







