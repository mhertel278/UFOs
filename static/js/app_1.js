// import data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Create build Table function
function buildTable(data) {
    // clear any existing data from the table
    tbody.html("");
    // loop through each object in data to add rows and cells to the table
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // loop through each key value pair in the dataRow
        Object.values(dataRow).forEach((val) => {
            // append a cell to the table row
            let cell = row.append("td");
            // set the cell value to the value from the key, value pair
            cell.text(val);
        });
    });
}

// create function to handle a button click
function handleClick() {
    // Grabe the datetime value from the filter
    // let date = d3.select("#datetime").property("value");
    let date = d3.event.target.value;
    console.log(date);
    let filteredData = tableData;
    // Check if a date was entered, then filter the data by that date
    if (date) {
        // Apply `filter` to the table data to only keep
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE:  If no date was entered, filteredData is the original
    // tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("input").on("change", handleClick);

// Build the table when the page loads.
buildTable(tableData);