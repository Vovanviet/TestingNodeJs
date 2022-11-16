

const db=require('../models');
const User=db.user;
const Op=db.Sequelize.Op;
 exports.createUser =(req,res)=>{
    User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phonenumber:req.body.phoneNumber,
      password:req.body.password
    }).then(user =>{
      res.send({message: "1 người đã sinh ra tại server"});
    }).catch(err=>{
      res.status(501).send({message: err.message});
    });
    
 };
 exports.getAll=(req,res)=>{
  User.findAll().then(data=>{
    res.send(data);
  }).catch(err=>{
    res.status(404).send({
      message:err.message||"co's lỗi!!!"
    });
  });
 };