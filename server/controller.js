const db = require('../database/model.js');

module.exports = {
  product: {
    get: (req, res) => {
      console.log('in get');
      const product_type = req.params.product_type;
      console.log('controller', product_type)
      db.product.get(product_type, (err, results)=> {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(results)
        }
      })
    }
    
  }
}