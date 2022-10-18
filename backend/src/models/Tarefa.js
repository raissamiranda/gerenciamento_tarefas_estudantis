const Sequelize = require('sequelize');
const database = require('../database/index');

const User = require('./User');
// const UserProject = require('./UserProject');

const Tarefa = database.define('Tarefa', {
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

  deadline: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  subject: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  value: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  activity: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});


module.exports = Tarefa;