const connection = require('./index.js');

module.exports = {
  product: {
    get: function (callback) {
      console.log('db in get')
      const queryStr = "select * from products";
      connection.query(queryStr, (err, results) => {
        if (err) {
          callback(err, null)
        } else {
          callback(null, results);
        }
      })
    }
  // product_type: {
  //   get: function (callback) {
  //     console.log('db in get')
  //     const queryStr = "select * from products_type";
  //     connection.query(queryStr, (err, results) => {
  //       if (err) {
  //         callback(err, null)
  //       } else {
  //         callback(null, results);
  //       }
  //     })
  }

}