let express = require('express');
let models = require('../models/models.js');
let path = require('path')
let router = express();

let masterArray = ["playerid", "birthyear", "birthmonth", "birthday", "birthcountry", "birthstate", "birthcity","namefirst", "namelast", "namegiven","bats", "throws", "debut", "finalgame"];
let battingArray = ["playerid", "yearid", "teamid", "g", "ab", "r", "h", "h2b", "h3b", "hr", "sb", "cs", "bb", "so", "hbp", 'stint']
let pitchingArray = ["playerid", "yearid", "stint", "teamid", "lgid", "w", "l", "g", "gs", "cg", "sho", "sv", "ipouts", "h", "er", "hr", "bb", "so", "baopp", "era", "ibb", "wp", "hbp", "bk", "bfp", "gf", "r", "sh", "sf", "gidp"];
let awardsArray = ["playerid", "awardid", "yearid", "lgid", "tie", "notes"];
let teamsArray = ["yearid", "lgid", "teamid", "franchid", "divid", "rank", "g", "w", "l", "divwin", "lgwin", "wswin", "name", "park", "attendance"];
let teamsFranchArray = ["franchid", "franchname", "active", "naassoc"];


router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../../', 'react/index.html' ))
});

router.get('/player/:playerId', function(req, res, next){
    console.log(req.params.playerId)
    Promise.all([
        models.batting.findAll({attributes: battingArray, where:{playerid: req.params.playerId}}),
        models.pitching.findAll({attributes: pitchingArray, where:{playerid: req.params.playerId}}),
        models.awards.findAll({attributes: awardsArray, where:{playerid: req.params.playerId}})
    ])
    .then(allStats => {
        res.send(allStats);
    })
    .catch(err => next(err));
})

router.get('/player', function(req, res, next){
    models.master.findAll({
        attributes: masterArray,
        where: {
            $or: [{namefirst: {$iLike: req.query.firstName}}, {namegiven: {$iLike: `%${req.query.firstName}%`}}],
            namelast: {$iLike: req.query.lastName}
        }
    })
    .then(player => {
        res.send(player)
    })
    .catch(function(err){
        next(err);
    })

});

router.get('/team', function(req, res, next){
    let teamSearch = req.query.search
    if(req.query.search.startsWith('st ') || req.query.search.startsWith('St ')) {
        teamSearch = req.query.search.slice(0, 2) + '.' + req.query.search.slice(2)
        console.log(teamSearch)
    }
    models.teamsfranch.findAll({
        attributes: teamsFranchArray,
        where:{
            franchname: {$iLike: `%${teamSearch}%`}}
    })
    .then(teams => {
        res.send(teams)
    })
    .catch(next);
})

router.get('/team/:teamName', function(req, res, next){
    models.teams.findAll({
        attributes: teamsArray,
        where: {
            name: {$iLike: `${req.params.teamName}`}
    }})
    .then(years => {
        let teamStats = {
            name: years[0].name,
            years: years
        }
        res.send(teamStats);
    })
    .catch(next);
})

router.get('/year/:yearNum', function(req, res, next){
    Promise.all([
        models.batting.findAll({attributes: battingArray, where: {yearid: req.params.yearNum, $and: {ab: {$gt: 30}}}}),
        models.pitching.findAll({attributes: pitchingArray, where: {yearid: req.params.yearNum, $and: {g: {$gt: 5}}}}),
        models.awards.findAll({attributes: awardsArray, where: {yearid: req.params.yearNum}}),
        models.teams.findAll({attributes: teamsArray, where: {yearid: req.params.yearNum}}),
    ])
    .then(stats => {
        let players = [];
        for(let i=0; i<3; i++){
            stats[i].forEach(function(player){
                players.push(player.playerid)
            })
        }
        models.master.findAll({
            attributes: masterArray,
            where: {playerid: {$any: players}}
        })
        .then(players => {
            for(let x = 0; x < 3; x++){
                stats[x].forEach(function(player){
                    for(let i = 0; i<players.length; i++){
                        if(player.playerid === players[i].playerid){
                            player.dataValues.nameFirst = players[i].namefirst;
                            player.dataValues.nameLast = players[i].namelast;
                        }
                    }
                })
            }
            res.send(stats);
        })
        
    })
    .catch(next);
})

router.use('/', function(err, req, res, next){
    console.log("ERROR-------------------------------------------\n", err)
    res.status(404).send(err);
});



module.exports = router;