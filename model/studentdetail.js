const { studentdetail } = require(".");

module.exports = (sequelize,Sequelize)=>{
    const Roles  = sequelize.define('studentdetail',{
        
        adress:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        city:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        
        class:{
            type:Sequelize.INTEGER,
            allowNULL:false,},
        
        parentscontact:{
                type:Sequelize.INTEGER,
                allowNULL:false,},
        
      
    },
    {
        timestamps: false,
    }
    )
    return studentdetail;
}
