const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sequelizeTutorials','postgres','Datta@123',{
    dialect:'postgres'
})

const User = sequelize.define('user',{
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER
    }
});

User.sync()
    .then((data)=>{
        console.log('Table and model synced successfully.')
    })
    .catch(error=>{
        console.log('Error syncing the table and model.')
    })