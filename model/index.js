const dbconfig = require('./database');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.database,dbconfig.user,dbconfig.password,{
    host:dbconfig.host,
    dialect:dbconfig.dialect,
    operatorsAliases: false,

})

const db = {};

db.sequelize =sequelize ;
db.Sequelize = Sequelize;

db.teachermodel=require("../model/teachermodel")(sequelize,Sequelize);
db.teacherdetail=require("../model/teacherdetail")(sequelize,Sequelize);
db.studentmodel=require("../model/studentmodel")(sequelize,Sequelize);
db.studentdetail=require("../model/studentdetail")(sequelize,Sequelize);
module.exports = db;



