const mysql = require('mysql');


const insertIntoTeams = function (dataObj) {
    var queryString = "INSERT INTO teams (id, teamName, city, abbreviation, divisionName, divisionID) VALUES ?";
    var values = [];
    for (var x = 1; x < dataObj.teams.length; x++ ) {
        var tempArray = [];
        tempArray.push(dataObj.teams[x].id);  
        tempArray.push(dataObj.teams[x].name);
        tempArray.push(dataObj.teams[x].venue.city);
        tempArray.push(dataObj.teams[x].abbreviation);
        tempArray.push(dataObj.teams[x].division.name);
        tempArray.push(dataObj.teams[x].division.id);
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