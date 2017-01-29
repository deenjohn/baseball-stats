const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS', {logging: false});

const awdsPlayersSchema = {
    playerid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    awardid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

   yearid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

   lgid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

   tie: {
        type: Sequelize.STRING,
        defaultValue: null
    },

   notes: {
        type: Sequelize.STRING,
        defaultValue: null
    },

   
};

const awdsPlayersConfig = {
    tableName: 'awardsplayers'
};

const AwdsPlayers = db.define('awardsplayers', awdsPlayersSchema, awdsPlayersConfig);

module.exports = AwdsPlayers;