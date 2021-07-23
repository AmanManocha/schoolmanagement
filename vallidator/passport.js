const passport = require('passport');
const localpassport = require('passport-local').Strategy;
const db = require('../Model/index');
const teachermodel = db.teachermodel;
const bcrypt  = require('bcrypt');


passport.use(
   new localpassport({ usernameField: "name"},
   async (name,password,done)=>{
       try{
        const user = await teachermodel.findOne({where:{name:name}},
            function(err){
                    console.log(err)
                return done(err);})
                if(!user){
                    return done(null,false,{message:"Incorrect user"})
                 }
                 const result = user;
               const value = await bcrypt.compareSync(password,result.password);
                if(value===true){
                    return done(null,user);
                }
                else{
                    return done(null,false,{message:"password is wrong"})
                }
    
                

            }
        
            
        catch(error){
            console.log(error);
        }               
          
            
   })
)