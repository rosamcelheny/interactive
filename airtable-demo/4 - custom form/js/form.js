console.log("hello form");

// CODE
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyMtkwYmfTiXSzA3' }).base('appaP9N6bcCt8D3IT');


var form = document.querySelector("#form");
var submit = document.querySelector("#submit");
var title = document.querySelector("#emoji_choice");
var description = document.querySelector("#description");
var link = document.querySelector("#link");

// When the form is submitted...
// form.addEventListener("submit", function(event) {
form.addEventListener("click", function(event) {
    console.log("submit");

    console.log(form["title"]);

    // base('Pages').create([{
    //         "fields": {
    //             "Title": form["title"],
    //             "Description": "self-taught New York artist",
    //             "Link": "https://en.wikipedia.org/wiki/Caroline_Goe",
    //             "icon": [{
    //                 "url": "https://dl.airtable.com/.attachments/e1ec5495d740f09e85f0fb9f34d5558b/2ec8e2fc/Haltern_am_See_Lavesum_Knstlerhof_Acrylfarbe_--_2021_--_5727.jpg?ts=1650631110&userId=usrTvV7JMJy7C8WKZ&cs=5b63ec34a14075c7"
    //             }],
    //             "date": "2019-03-15"
    //         }
    //     }
    // ], function(err, records) {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     records.forEach(function(record) {
    //         console.log(record.getId());
    //     });
    // });

});