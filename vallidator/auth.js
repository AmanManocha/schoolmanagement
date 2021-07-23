const joi = require('@hapi/joi');

const auth_teachermodel = joi.object({
    name:joi.string().lowercase().required(),
    DOB:joi.string().lowercase().required(),
    password:joi.string().required(),
})

const auth_teacherdetail = joi.object({
    address:joi.string().lowercase().required(),
    city:joi.string().required().lowercase(),
    qualification:joi.string().lowercase().required(),
    contact:joi.number().required(),
})

const auth_studentmodel = joi.object({
    id:joi.string().lowercase().required(),
    name:joi.string().lowercase().required(),
    DOB:joi.string().lowercase().required(),
    password:joi.string().lowercase().required(),
})


const auth_studentdetail = joi.object({
    address:joi.string().lowercase().required(),
    city:joi.string().required().lowercase(),
    class:joi.string().lowercase().required(),
    parentscontact:joi.number().required(),
})

module.exports = {
    auth_teachermodel,
    auth_teacherdetail,
    auth_studentmodel,
    auth_studentdetail,
}