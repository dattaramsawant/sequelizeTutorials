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

// Create query
// User.sync({alter:true})
//     .then((data)=>{
//         return User.create({
//             username:"parkar",
//             password:'12345',
//             age:25
//         })
//     })
//     .then(data=>{
//         console.log('User added successfully')
//     })
//     .catch(error=>{
//         console.log('Error syncing the table and model.')
//     })