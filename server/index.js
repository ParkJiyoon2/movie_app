const express = require('express');
const app = express();
const mysql = require('mysql');

const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
let jwt = require("jsonwebtoken");
let secretObj = require("../src/login/ignorefile/jwt")

const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "user2",
    password: "7402",
    database: "stock"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM review;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})

app.get("/api/Stock", (req, res)=>{
    const sqlQuery = "SELECT * FROM ticker_info;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})

app.get("/api/KOSPI", (req, res)=>{
    const sqlQuery = "SELECT * FROM kospi;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})

app.get("/api/KOSDAQ", (req, res)=>{
    const sqlQuery = "SELECT * FROM kosdaq;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})

app.get("/api/NASDAQ", (req, res)=>{
    const sqlQuery = "SELECT * FROM nasdaq;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})
app.post("/api/insert", (req, res) => {
    const title2 = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO review (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title2, content], (err, result)=>{
        res.send(result);
    });
});

app.get("/api/getDB", (req, res)=>{
    const sqlQuery = "SELECT * FROM dailyinfo;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
});

app.post("/api/userStock", (req, res)=>{
    console.log('req:',req.body);
    const id = req.body.userid;
    console.log('userStock id = ',id);
    const sqlQuery = "SELECT * FROM ticker_info,userstock where ticker_info.symbol = userstock.symbol and userId=?;";
    db.query(sqlQuery, [id],(err, result)=>{
        res.send(result);
    });
});
app.post("/api/insertUserStock", (req, res)=>{
    console.log('req:',req.body);
    const email = req.body.useremail;
    const symbol = req.body.symbol;
    const count = req.body.count;
    const avg_cost = req.body.avg_cost;
    const sqlQuery = "insert into userstock values(?,?,?,?);";
    console.log('sqlQuery:',sqlQuery);
    db.query(sqlQuery, [email,symbol,count, avg_cost],(err, result)=>{
        res.send(result);
        console.log('sqlQuery2:',sqlQuery);
    });
});
app.post("/api/login", (req, res) => {
    const email = req.body.is_Email;
    const pw = req.body.is_Password;
    console.log('email=',req.body.is_Email)
    const sqlQuery = "select * from userinfo2 where useremail=? and userpassword=?;";
    console.log('sqlQuery:',sqlQuery);
    db.query(sqlQuery, [email, pw], (err, result)=>{
        res.send(result);
        console.log("result:",result);
    });
});

app.post("/api/register", (req, res) => {
    const id = req.body.is_Email;
    const pw = req.body.is_Password;
    const name = req.body.is_Name;
    const phone = req.body.is_Phone;
    //console.log('id=',req.body.is_Email)
    const sqlQuery = "insert into userinfo2 values(?,?,?,?);";
    console.log('id,pw,name,phone:',id,pw,name,phone);
    db.query(sqlQuery, [id, pw,name,phone], (err, result)=>{
        res.send(result);
        console.log("result:",result);
    });
});
//Dankook2021!
app.post("/api/registerConfirm", (req, res) => {
    const email = req.body.is_Email;
    //console.log('id=',req.body.is_Email)
    const sqlQuery = "select * from userinfo2 where useremail=?;";
    
    db.query(sqlQuery, [email],(err, result)=>{
        res.send(result);
        console.log("result:",result);
    });
});
app.post("/api/loginSession", (req, res) => {
    const id = req.body.is_Email;
    const pw = req.body.is_Password;
    var userid = req.body.is_Email;
    var name = req.body.is_UserName;
    console.log('session');
    try {
        let token1 = jwt.sign(
        { email: userid },
        secretObj.secret,
        { expiresIn: '60m' })
       
        let token2 = jwt.sign(
        { username: name },
        secretObj.secret,
        { expiresIn: '60m' })
        res.send({"token1":token1, "token2":token2});
      } catch (error) {
        res.send(error)
      }
    console.log('sessionid=',req.body.is_Email)
});

app.post("/api/SessionConfirm", (req, res) => {
    try {
        let token1 = req.body.token1;
        let token2 = req.body.token2;
        console.log('token1:',token1);
        console.log('token2:',token2);

        if(token1 != undefined && token1 != '' && token2 != undefined && token2 != ''){
          let decoded1 = jwt.verify(token1, secretObj.secret);
          let decoded2 = jwt.verify(token2, secretObj.secret);
          res.send({"token1":decoded1.email, "token2":decoded2.username});
          console.log('decode1:',decoded1.email);
          console.log('decode2:',decoded2.username);
        }else{
          res.send({"token1":"", "token2":""});
        }
      } catch (error) {
        res.send(error)
      }
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});