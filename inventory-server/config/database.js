const Database = require('arangojs').Database;

const db = new Database('http://127.0.0.1:8529');
db.useBasicAuth('root', 'vikas');
db.useDatabase('mydb');


module.exports = db;