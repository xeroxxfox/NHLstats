const mysql = require('mysql');


const insertIntoTeams = function (dataArray) {
    console.log("data array", dataArray);
    var queryString = "INSERT INTO teams (id, teamName, city, abbreviation, divisionName, divisionID) VALUES ?";
    var values = [];
    for (var x = 0; x < dataArray.length; x++ ) {
        var tempArray = [];
        tempArray.push(dataArray[x].id);
        tempArray.push(dataArray[x].name);
        tempArray.push(dataArray[x].venue.city);
        tempArray.push(dataArray[x].abbreviation);
        tempArray.push(dataArray[x].division.name);
        tempArray.push(dataArray[x].division.id);
        values.push(tempArray);
    }
    console.log("values", values);
    // connection.query(queryString, values, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         callback(data);
    //     }
    // })
    
}








module.exports = {
    //insert method names here
    insertIntoTeams
}