const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const { register, savecatData,checkLoginData } = require('./controller/registercontrollers');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')));
app.post("/savecat", urlencodedParser, savecatData);

app.get("/", (req, res) => {
    res.render("register");
});

app.get('/home', (req, res) => {
    
    if(req.cookies && req.cookies.userinfo){
        let cookies = JSON.parse(req.cookies.userinfo)
        console.log(cookies)
        res.render('home',{
            userName:cookies.name
        });
    }else{
        res.redirect('/login')
    }
   
});
app.get('/logout',(req,res)=>{
    res.clearCookie('userinfo')
    res.redirect('/login')
})


app.get('/login',(req,res)=>{
    res.render('login')
})
app.post("/login", urlencodedParser, checkLoginData);


app.listen(1414, "localhost", () => {
    console.log("running port 1414");
});
