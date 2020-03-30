const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
var fetch = require('node-fetch')

 const db = require('./db/databaseMethods.js');


const PORT = 5000;
const app = express();




//middleware setup
app.use(morgan('dev'));
app.use(express.json());


//routes
// app.use('/', express.static('./client/dist'));


//set server to listen on a given port
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.get('/api/teams', (req, res) => {
    fetch('https://statsapi.web.nhl.com/api/v1/teams')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            db.insertIntoTeams(data);
            res.json(data);
        })
 })

