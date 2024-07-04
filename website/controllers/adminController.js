const sequelize = require('../config/config');
const { DataTypes} = require("sequelize");
const User = require('../models/user')(sequelize, DataTypes);
const path = require('path');
const user = require('../models/user');

const getUsers = async (req, res) => {
    const data = await User.findAll();
    res.json(data);
}

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views/admin/users.html'))
}

const deleteUser = async (req, res) => {
    const userID = req.params.id;
    
    const user = await User.destroy({
        where: {
            id: userID
        }
    })
}

const addAdmin = async (req, res) => {
    const userID = req.params.id;

    const user = await User.update(
        {isAdmin: true},
        {
        where : {
            id: userID
        }
    })
}

const removeAdmin = async (req, res) => {
   const userID = req.params.id

   const user = await User.update(
    {isAdmin : false},
    {
        where: {
        id: userID
    }
    })
}


module.exports = {
    getUsers,
    index,
    deleteUser,
    addAdmin,
    removeAdmin
}