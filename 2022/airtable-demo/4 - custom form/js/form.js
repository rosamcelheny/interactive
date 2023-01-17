console.log("hello form");

// Setup airtable
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyMtkwYmfTiXSzA3' }).base('appaP9N6bcCt8D3IT');


//var submitURL = 'https://api.airtable.com/v0/appM60AXuV6ZUXo1v/Table%201?api_key=keyd53hWYGLlDlwa0';
var form = $('#my-form');
form.on('submit', function(e){
   e.preventDefault();
   
   var title = $(this).find('input[name=title]').val();
   var image = $(this).find('input[name=image]').val();

   base('Pages').create([
  {
    "fields": {
      "Title": title,
      "Description": "self-taught New York artist",
      "Link": "https://en.wikipedia.org/wiki/Caroline_Goe",
      "date": "2019-03-15"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  // records.forEach(function (record) {
  //   console.log(record.getId());
  // });
  $("#my-form").hide();
  $("#submit-message").show();
});


//    if (!title) {
//     console.log("error");
//       // $(this).find('input[name=title]').addClass("error");
//      return;
//    }
//    var data = {
//      'fields': {
//        'Title': title,
//     }
//    };
//   $.post(submitURL, data, function(data){
//      $('#submit-message').text('Submitted!!!!');
//      console.log('success',data)
//   });
});

// get form elements
// var form = document.querySelector("#form");
// var submit = document.querySelector("#submit");
// var title = document.querySelector("#emoji_choice");
// var description = document.querySelector("#description");
// var link = document.querySelector("#link");

// var button = document.querySelector("#button");

// // When the form is submitted...
// form.addEventListener("submit", function(event) {

//     console.log("submit");

//     // var new_title = 
//     // var new_description = form["description"].value;
//     // var new_link = form["link"].value;

//     base('Pages').create([{
//             "fields": {
//                 // "Title": $("#title").value;,
//                 "Title": "test entry",
//                 "Description": "hello",
//                 "Link": "hello",
//                 "icon": [{
//                     "url": "https://dl.airtable.com/.attachments/e1ec5495d740f09e85f0fb9f34d5558b/2ec8e2fc/Haltern_am_See_Lavesum_Knstlerhof_Acrylfarbe_--_2021_--_5727.jpg?ts=1650631110&userId=usrTvV7JMJy7C8WKZ&cs=5b63ec34a14075c7"
//                 }],
//                 "date": "2019-03-15"
//             }
//         }
//     ], function(err, records) {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         records.forEach(function(record) {
//             console.log(record.getId());
//         });
//     });
// });