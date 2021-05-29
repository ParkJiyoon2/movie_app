const express = require('express');
const app = express();
const mysql = require('mysql');

const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

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
})



app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});