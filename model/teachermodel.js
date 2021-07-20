const { teachermodel } = require(".");

module.exports = (sequelize,Sequelize)=>{
    const Roles  = sequelize.define('teacher',{
        id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        DOB:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        password:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
      
    },{
        timestamps: false,
    }
    )
    return teachermodel;
}
