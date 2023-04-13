 const Sequelize = require('sequelize')
 const sequelize = new Sequelize('databases','root','@5T3v3j085',{
     host: 'localhost',
     dialect: 'mysql'
 })

 module.export = {
    Sequelise: Sequelize,
    sequelize: sequelize
 }