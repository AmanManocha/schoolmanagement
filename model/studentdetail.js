
module.exports = (sequelize,Sequelize)=>{
    const studentdetail  = sequelize.define('studentdetail',{
        
        address:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        city:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        
        class:{
            type:Sequelize.INTEGER,
            allowNull:false,},
        
        parentscontact:{
                type:Sequelize.INTEGER,
                allowNull:false,},
        
      
    },
    {
        timestamps: false,
    }
    )
    return studentdetail;
}
