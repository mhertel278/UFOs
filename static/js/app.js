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