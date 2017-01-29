
let express = require('express');
let nunjucks = require('nunjucks');
let Sequelize = require('sequelize');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let bluebird = require('bluebird');
let path = require('path');
let router = require('./routes/index.js');
let models = require('./models/models.js');

let app = express();



app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/", express.static(path.resolve(__dirname, '../', 'public')));


app.use('/', router);

let master = models.master.sync();
let batting = models.batting.sync();
let pitching = models.pitching.sync();
let awards = models.awards.sync();
let teams = models.teams.sync();
let teamsFranch = models.teamsfranch.sync();

Promise.all([master, batting, pitching, awards, teams, teamsFranch])
    .then(function(){
        app.listen(1234, function () {
            console.log('Server is listening on port 1234!');
        });
    })





module.exports = app;