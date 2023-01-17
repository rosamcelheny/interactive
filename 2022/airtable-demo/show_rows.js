function showRows() {
    console.log("showRows()");
    
    var today = new Date;
    if (today < row.fields.expirationDate) {

        // here's where you show the row

        // const div = document.createElement("div");
        // div.innerText = row.fields.Description;
        // div.classList.add("description");
        // document.body.appendChild(div);
    } 

    else {
        //show the next row
        index = index + 1;
        showRows(index);
    }
}