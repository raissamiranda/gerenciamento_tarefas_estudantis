const Sequelize = require('sequelize');
const database = require('../database/index');
 
const User = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    interesses: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    periodo: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    materias: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})
 
module.exports = User;