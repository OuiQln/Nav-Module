const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'uniqlo_inv',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } 
});

module.exports = connection;
