const mysql        = require('mysql');
const connection   = mysql.createConnection({
  host     : "localhost",
  user     : "foo",
  password : "bar",
  database : "hostalpaca"
});
console.log("ha conectado con la base de datos");
module.exports = connection;
