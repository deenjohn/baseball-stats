const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DOCS');

const salariesSchema = {
    yearID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    teamID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    lgID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    playerID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    salary: {
        type: Sequelize.FLOAT,
        defaultValue: null
    },
};

const salariesConfig = {
    tableName: 'salaries'
};

const Salaries = db.define('salaries', salariesSchema, salariesConfig);

module.exports = Salaries;