const db = require('../database/model.js');

module.exports = {
  product: {
    get: (req, res) => {
      console.log('in get');
      db.product.get()
    }
    
  }
}