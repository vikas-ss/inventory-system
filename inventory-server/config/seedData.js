const db = require('../config/database');
const ProductList = require('./ProductList.json');
// db.createDatabase('mydb').then(
//   () => console.log('Database created'),
//   err => console.error('Failed to create database:', err)
// );

const collection = db.collection('product');


// collection.truncate().then(
//     () => console.log('Truncated collection'),
//     err => console.error('Failed to truncate:', err)
//   );


// collection.create().then(
//       () => console.log('Collection created'),
//       err => console.error('Failed to create collection:', err)
//     );



   
    collection.import(ProductList).then(
        result => console.log('Import complete:', result),
        err => console.error('Import failed:', err)
      );
       

    // collection.save(doc).then(
    //     meta => console.log('Document saved:', meta._rev),
    //     err => console.error('Failed to save document:', err)
    //   );