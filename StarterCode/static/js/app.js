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


// // reference button
var button = d3.select("#filter-btn");

//reference for input field
var form = d3.select(".form-control");

button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler for button click and enter
function runEnter() {
    //prevent page from refreshing
    d3.event.preventDefault();

    //select input element 
    var inputElement = d3.select("#datetime");

    // get the value of the input element
    var inputValue = inputElement.property("value");

    // log input
    console.log(inputValue)

    if (inputValue.length == 0) {
        tbody.html("");

        return tableData.forEach(function(sightingsReport) {
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
        
        
        
    }

    else {
           // filtered data based on form submission
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

        console.log(filteredData); 
        tbody.html("");

        filteredData.forEach(function(filteredReport) {
            var filteredRow = tbody.append("tr");
            Object.entries(filteredReport).forEach(function([key, value]) {
                var newCell = filteredRow.append("td");
                newCell.text(value);
            });
        });
    };

    
};

var resetButton = d3.select("#reset-btn");

resetButton.on("click", resetTable);

function resetTable() {
    d3.event.preventDefault();
    
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
}
