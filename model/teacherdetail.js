
module.exports = (sequelize,Sequelize)=>{
    const teacherdetail  = sequelize.define('teacherdetail',{
        
        address:{
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
