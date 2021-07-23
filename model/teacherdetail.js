
module.exports = (sequelize,Sequelize)=>{
    const teacherdetail  = sequelize.define('teacherdetail',{
        
        address:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        city:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        qualification:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        contact:{
            type:Sequelize.INTEGER,
            allowNull:false,}
      
    },
    {
        timestamps: false,
    }
    )
    return teacherdetail;
}
