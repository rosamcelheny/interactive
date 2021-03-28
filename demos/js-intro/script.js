console.log("my external script is loaded!!");


function greeting(name) {
  console.log("nice to see you " + name + "!!");
}

var codingClass; 

var codingClass = ["Rosa", "Eric", "Raphy"];

// greeting(codingClass[2]);

for (i = 0; i < codingClass.length; i++) {
  
};

function tick() {
  console.log(codingClass);
  setTimeout(tick, 1000);
}

greeting(codingClass[0]);
// tick();




// var divs = document.querySelectorAll("div");
// for (var x = 0; x < divs.length; x++) {
//   divs[x].style.color = "blue";
// }


// document.querySelectorAll("div").style.backgroundColor = "blue";


// var day = 32;
// var month = 18;
// var year = 22;

// document.body.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";


// var today = new Date();
// var day = date.getDate();
// var week = 



// javascript:(function(){var links = document.getElementsByTagName("a");
//   for (var x = 0; x < links.length; x++) {
//     var size = Math.floor(Math.random() * 164) + 16;
//     links[x].style.fontSize = size + "px";
//   }})();

//   var images = document.getElementsByTagName("img");
//   for (var x = 0; x < images.length; x++) {
//     images[x].setAttribute("src", "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2019/07/nature-3294543_1280-photo-graphe-pixabay.jpg");
//     return images[x];
//   };

//   javascript:(function(){
//     var imgs=document.getElementsByTagName('img');
//     for(i=0;i<imgs.length;i++){
//       var w=imgs[i].width,h=imgs[i].height;
//       if(w&&h){
//         imgs[i].src='http://placekitten.com/'+w+'/'+h}
//       }
//     })
