const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'signup'
});


app.get('/signup', (req, res) => {
    const sql = "SELECT COUNT(DISTINCT carid) AS total FROM car_approve"; // แก้ชื่อ column จาก tatal เป็น total
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })    
})

app.listen(8081, ()=> {
    console.log("listening");
});
