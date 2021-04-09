// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// reference table body
var tbody = d3.select("tbody");

tableData.forEach(function(sightingsReport) {
    console.log(sightingsReport);
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});