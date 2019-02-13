const connection = require('./index.js');

module.exports = {
  product: {
    get: function (type, callback) {
      console.log('db in get')
      const queryStr = "select * from product where product_type= ? ";
      connection.query(queryStr, type, (err, results) => {
        if (err) {
          callback(err, null)
        } else {
          callback(null, results);
        }
      })
    }
  }

}
