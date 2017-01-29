const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS', {logging: false});

const franchSchema = {
    franchid: {
        type: Sequelize.STRING,
        allowNull: false,
        primarykey: true
    },

    franchname: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    active: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    naassoc: {
        type: Sequelize.STRING,
        defaultValue: null
    }
};

const franchConfig = {
    tableName: 'teamsfranchises'
};

const TeamsFranchises = db.define('teamsfranchises', franchSchema, franchConfig);

module.exports = TeamsFranchises;