const { teacherdetail } = require(".");

module.exports = (sequelize,Sequelize)=>{
    const Roles  = sequelize.define('teacherdetail',{
        
        adress:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        city:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        qualification:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        contact:{
            type:Sequelize.INTEGER,
            allowNULL:false,}
      
    },
    {
        timestamps: false,
    }
    )
    return teacherdetail;
}
