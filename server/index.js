const express = require('express');
const app = express();
const db = require('./config/db.config');
const cors = require('cors');
const { redirect } = require('express/lib/response');
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

// Route to get one post
app.post("/api/signin", (req, res) => {
    const name      = req.body.name;
    const password  = req.body.password;
    // console.log('signin', name, password);
    // you are idiot
    db.query(`SELECT no FROM user where name = '${name}' AND password = '${password}' `, function(err, result, fields) {
        if (err) {
            console.log(err);
            // db.end();
          return res.status(500).send({ result: "Server error" });
        } else {
            console.log('result', result.length);
            if( result.length == 0){
              console.log('failure');
              res.status(403).send({ result: "Server error" });
            } else {
              console.log('success');
              res.json(result)
            }
            // res.send(result);
            // return "success";
          }
    });
});

app.post("/api/signup", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    
    console.log(name, password);

    if(password == confirmpassword) {
        db.query(
            "INSERT INTO user (name, email, password, phone) VALUES (?, ?, ?, ?)",
            [name, email, password, phone],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send("Values Inserted");
              }
            }
          );
    } else {
        console.log(err);
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
