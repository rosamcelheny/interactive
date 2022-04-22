var counter = 0;

$("#age").change(function() {

  var age = $("#age").val();
  
  console.log("age =" + age);
  console.log("counter = " + counter);

  counter = 0;
  $('img').remove();

  while (counter <= age) {
    $('body').append('<img src="candle.jpg" />');

    counter++;
  }
  
});


// TO DO:
// When you choose an age, show that many images of a candle.
// For age 21, show image of beer