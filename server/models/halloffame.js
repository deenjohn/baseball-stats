const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS');

const hofSchema = {
    playerID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    yearID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    votedBy: {
        type: Sequelize.STRING,
        defaultValue: '',
        primaryKey: true
    },

    ballots: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    needed: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    votes: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    inducted: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    category: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    needed_note: {
        type: Sequelize.STRING,
        defaultValue: null
    },

    
};

const hofConfig = {
    tableName: 'hof'
};

const Hof = db.define('hof', hofSchema, hofConfig);

module.exports = Hof;