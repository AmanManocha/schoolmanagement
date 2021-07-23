
module.exports = (sequelize,Sequelize)=>{
    const teachermodel  = sequelize.define('teacher',{
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        DOB:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false,
        },
      
    },{
        timestamps: false,
    }
    )
    return teachermodel;
}

