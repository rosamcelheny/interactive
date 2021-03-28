

// var feet = [
//   "https://www.horsehealthproducts.com/-/media/Images/HorseHealth-NA/US/Horsemans%20Report/Hoof%20Leg%20Care/Hoof%20Anatomy/314_farnam_az_2017%20jpg.JPG",
//   "https://i.pinimg.com/originals/81/7a/ee/817aee2d081357cf9bc8813c672a9d71.jpg",
//   "https://media.dollskill.com/media/qGF3apNLYwg5xPzGWQIY7tKCQHuHzMUi-34.jpg", 
// ]

var feet = [
  "assets/boots.jpg",
  "assets/horse.jpg",
  "assets/jordan.jpg",
  "assets/tortoise.jpg"
];

var number = Math.floor(Math.random() * feet.length);
// // console.log(number);

var footer = document.createElement("img"); 
footer.classList.add("footer_styles");

var image_source = chrome.extension.getURL(feet[number]);
footer.setAttribute("src", image_source);
// footer.style.width = "100%";
// footer.style.height = "100vh";

document.body.appendChild(footer);

console.log("Just a test to make sure this is working...");

document.body.onclick(function() {
  console.log("hello world");
});