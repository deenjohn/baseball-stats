const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS', {logging: false});

const battingSchema = {
    playerid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    yearid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    stint: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    teamid: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    lgid: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    g: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ab: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    r: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    h: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    h2b: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    h3b: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    hr: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    rbi: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    sb: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    cs: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    bb: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    so: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ibb: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    hbp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    sh: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    sf: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    gidp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
};

const battingConfig = {
    tableName: 'batting',
    plural: 'batting',
    singular: 'batting'
};

const Batting = db.define('batting', battingSchema, battingConfig);

module.exports = Batting;