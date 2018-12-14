var express = require('express');
var bodyParser = require('body-parser');

const db = require('../config/database');
const router = express.Router();


router.post("/", function(req, res) {

  const collection = db.collection('product');
  console.log(req.body.product_name);

  const doc = {
        "product_name": req.body.product_name,
        "product_description": req.body.product_description,
        "product_price": req.body.product_price
      };


    collection.save(doc).then(
        meta => res.send("Product Saved Successfully:" + doc),
        err => console.error('Failed to save document:', err)
      );

        

});


router.get("/", async function(req, res) {

    console.log("product list ");
    const collection = db.collection('product');
    
  
    let productList = [];
    collection.all().then(async (cursor) =>  {

    while(cursor.hasNext()) {
      let doc = await cursor.next();
      productList.push(doc);
    }
      
      res.send(productList);
});

    // collection.document().then(
    //   doc => console.log('Document:', JSON.stringify(doc, null, 2)),
    //   err => console.error('Failed to fetch document:', err)
    // );


});

module.exports = router;
