const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require("mysql")

// Định nghĩa route handler cho đường dẫn gốc
app.get('/', (req, res) => {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })
  db.connect((err) => {
    if(err) {
      res.send(`Đây là web của Quân <br> Next :  access Database - demo crud <br> Database status : ${err.message}`);
    }
    res.send('Đây là web của Quân <br> Next :  access Database - demo crud <br> Database status : Success');
  })
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
