const Sequelize = require('sequelize');
const database = require('../database/index');
 
const Usuario = database.define('usuario', {
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
    
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    role: {
        type: Sequelize.ENUM,
        values: ['user'],
        allowNull: false,
    }
})
 
module.exports = Usuario;