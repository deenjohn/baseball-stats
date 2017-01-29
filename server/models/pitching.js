const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS', {logging: false});

const pitchingSchema = {
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

    w: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    l: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    g: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    gs: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    cg: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    sho: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    sv: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ipouts: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    h: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    er: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    hr: {
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

    baopp: {
        type: Sequelize.FLOAT,
        defaultValue: null
    },

    era: {
        type: Sequelize.FLOAT,
        defaultValue: null
    },

    ibb: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    wp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    hbp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    bk: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    bfp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    gf: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    r: {
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

const pitchingConfig = {
    tableName: 'pitching'
};

const Pitching = db.define('pitching', pitchingSchema, pitchingConfig);

module.exports = Pitching;