const db = require('../database/model.js');

module.exports = {
  product: {
    get: (req, res) => {
      const { product_type } = req.query;
      db.product.get(product_type, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },
  },
};
