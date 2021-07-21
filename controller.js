const db = require('./model');
const teacherdetail = require('./model/teacherdetail');
const studentdetail = require('./model/studentdetail');
const Teacher =  db.teachermodel;
const Teacherdetail = db.teacherdetail;
const Student = db.studentmodel;
const Studentdetail = db.studentdetail;


exports.teacher = (req,res)=>{
    console.log(req.body)
    const role = {
       id:req.body.id,
       name:req.body.name,
       DOB:req.body.DOB,
       password:req.body.password,
    };
  Teacher.create(role).then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
      res.status(500).send({
          message:err.message
      })
  })
}
exports.create = async(req,res)=>{
   console.log(result)
    const user = {
        id:req.body.id,
        name:req.body.name,
        DOB:req.body.DOB,
        password:req.body.password,
    };
  User.create(user).then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
      res.status(500).send({
          message:err.message
      })
  })
}


exports.teacherdetail= async (req,res)=>{
    const emp = {
        address:req.body.address,
        city:req.body.city,
        qualification:req.body.qualification,
        contact:req.body.contact,
    }
    Teacherdetail.create(emp).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message
        })
    
    })
}

exports.student = (req,res)=>{
    console.log(req.body)
    const role = {
       id:req.body.id,
       name:req.body.name,
       DOB:req.body.DOB,
       password:req.body.password,
    };
  Student.create(role).then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
      res.status(500).send({
          message:err.message
      })
  })
}
exports.create = async(req,res)=>{
   console.log(result)
    const user = {
        id:req.body.id,
        name:req.body.name,
        DOB:req.body.DOB,
        password:req.body.password,
    };
  User.create(user).then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
      res.status(500).send({
          message:err.message
      })
  })
}

exports.studentdetail= async (req,res)=>{
    const emp = {
        address:req.body.address,
        city:req.body.city,
        class:req.body.class,
        parentscontact:req.body.parentscontact,
    }
    Studentdetail.create(emp).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message
        })
    
    })
}

//delete the user

exports.deleteteacher = async(req,res)=>{
    try{
      const userdelete = await Teacher.destroy({
          where:{id:req.params.id}
      })
      return res.status(200).send({
          status:200,
          message:"user is deleted successfully",
          user:userdelete
      })
    }
      catch (error){
        return res.status(400).send({
            status:400,
            message:"there is some error",
            errors:error
        }) 
      }  
    
    
}

exports.deletestudent = async(req,res)=>{
    try{
      const userdelete = await Student.destroy({
          where:{id:req.params.id}
      })
      return res.status(200).send({
          status:200,
          message:"user is deleted successfully",
          user:userdelete
      })
    }
      catch (error){
        return res.status(400).send({
            status:400,
            message:"there is some error",
            errors:error
        }) 
      }  
    }
//update

    exports.updateteacher = async (req,res)=>{
        try{
     const updateuser = await Teacher.update({
         name:req.body.name,
         DOB:req.body.DOB,
     },{where:{id:req.params.id}});
     return res.status(200).send({
         user:updateuser,
         message:"user is updated"
     })
    }
    catch(error){
      return res.status(400).send({
      message:"there is some error",
      status:400,
      errors:error
     })
    }
    }


    exports.updatestudent = async (req,res)=>{
        try{
     const updatestudent = await Student.update({
         name:req.body.name,
         DOB:req.body.DOB,
     },{where:{id:req.params.id}});
     return res.status(200).send({
         user:updatestudent,
         message:"user is updated"
     })
    }
    catch(error){
      return res.status(400).send({
      message:"there is some error",
      status:400,
      errors:error
     })
    }
    }

    //find user by ID

exports.getteacher = async (req,res)=>{
    try{
    const userdetails = await Teacher.findOne({where :{id:req.params.id}});
    res.status(200).send({
        status:200,
        message:"details is fetch successfully ",
        data:userdetails
    })
}
catch(error){
    return res.status(400).send({
        status:400,
        message:"there is some error",
        errors:error
    })
}

}


exports.getstudent = async (req,res)=>{
    try{
    const userdetails = await Student.findOne({where :{id:req.params.id}});
    res.status(200).send({
        status:200,
        message:"details is fetch successfully ",
        data:userdetails
    })
}
catch(error){
    return res.status(400).send({
        status:400,
        message:"there is some error",
        errors:error
    })
}

}