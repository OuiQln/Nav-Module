const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'uniqlo_inv',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to db!');
  }
});

module.exports = connection;
