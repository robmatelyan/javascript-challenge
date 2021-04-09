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