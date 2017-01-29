const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS', {logging: false});

const masterSchema = {
    playerid: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        primaryKey: true
    },

    birthyear: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    birthmonth: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    birthday: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    birthcountry: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    birthstate: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    birthcity: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    deathyear: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    deathmonth: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    deathday: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    deathcountry: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    deathstate: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    deathcity: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    namefirst: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    namelast: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    namegiven: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
    weight: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    height: {
        type: Sequelize.FLOAT,
        defaultValue: null
    },

    bats: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    throws: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    debut: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    finalgame: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    retroid: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    bbrefid: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    
};


const masterConfig = {
    tableName: 'master'
};

const Master = db.define('master', masterSchema, masterConfig);

module.exports = Master;