const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS', {logging: false});

const teamsSchema = {
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

    teamid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    franchid: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    divid: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    rank: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    g: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ghome: {
        type: Sequelize.INTEGER,
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

    divwin: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    wcwin: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    lgwin: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    wswin: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    r: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ab: {
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

    bb: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    so: {
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

    hbp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    sf: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ra: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    er: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    era: {
        type: Sequelize.FLOAT,
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

    ha: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    hra: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    bba: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    soa: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    e: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    dp: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    fp: {
        type: Sequelize.FLOAT,
        defaultValue: null
    },

    name: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    park: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    attendance: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    bpf: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    ppf: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    teamidbr: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    teamidlahman45: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    teamidretro: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    
};

const teamsConfig = {
    tableName: 'teams'
};

const Teams = db.define('teams', teamsSchema, teamsConfig);

module.exports = Teams;