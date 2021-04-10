// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// reference table body
var tbody = d3.select("tbody");


// append data to a table within the HTML 

// use forEach to iterate through objects in array
tableData.forEach(function(sightingsReport) {
    console.log(sightingsReport);

    // reference tr
    var row = tbody.append("tr");
    // use Object.entries and forEach to iterate through key value pairs
    Object.entries(sightingsReport).forEach(function([key, value]) {
        // log key value pairs
        console.log(key, value);
        //reference td
        var cell = row.append("td");
        // insert value text into table
        cell.text(value);
    });
});


d3.selectAll(".form-control").on("change", function() {
    console.log(this);
});
// // reference button
// var button = d3.select("#filter-btn");

// //reference for input field
// var inputField = d3.select(".form-control");

// // Event handler for button click
// button.on("click", function() {
//     console.log("the button was clicked.");
// // Input Field
//     inputField.on("change", function() {
//         var newFilter = d3.event.target.value;
//         console.log(newFilter);
// });

// });