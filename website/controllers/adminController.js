const sequelize = require('../config/config');
const { DataTypes} = require("sequelize");
const User = require('../models/user')(sequelize, DataTypes);
const path = require('path')

const getUsers = async (req, res) => {
    const data = await User.findAll();
    res.json(data);
}

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views/admin/users.html'))
}

module.exports = {
    getUsers,
    index
}