
module.exports = (sequelize,Sequelize)=>{
    const studentdetail  = sequelize.define('studentdetail',{
        
        address:{
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
