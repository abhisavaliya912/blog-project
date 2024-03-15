// const { mongoose } = require('mongoose')
// const Employee=require('../models/registermodels')
// const { json } = require('body-parser')

// const register=async(req,res)=>{
//     res.render('register')
// }
// const savecatData = async (req, res) => {
//     console.log(req.body);
//     try {
//         const { name, email, password } = req.body;

//         const emp = new Employee({ name, email, password });

//         await emp.save();
//         res.redirect('/login');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// }

// const login=async(req,res)=>{
//     res.render('login')
// }

// const checkLoginData= async(req,res)=>{
     
//     const {email,password}=req.body
//     console.log(email,password)

//     const emp =await Employee.findOne({email,password})
  

//     if(emp !== null){
//         //  console.log('successfull login')
        
//         res.cookie('userinfo',json.stringify({email:emp.email,name:emp.name}))
//         console.log(userinfo)
//          res.redirect('/home')
//     }else{
//         // console.log('id & password is not match')
//         res.redirect('/login')
//     }


// }
// module.exports =  {register,savecatData,login,checkLoginData} 

const { mongoose } = require('mongoose');
const Employee = require('../models/registermodels');
const bodyParser = require('body-parser');

const register = async (req, res) => {
    res.render('register');
};

const savecatData = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password } = req.body;
        const emp = new Employee({ name, email, password });
        await emp.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const login = async (req, res) => {
    res.render('login');
};

const checkLoginData = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);

    const emp = await Employee.findOne({ email, password });

    if (emp !== null) {
        
        res.cookie('userinfo', JSON.stringify({ email: emp.email, name: emp.name }));
        // console.log(userinfo);
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
};

module.exports = { register, savecatData, login, checkLoginData };
