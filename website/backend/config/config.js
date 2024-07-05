const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('d47bep', 'root', 'ilovebiking', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;

