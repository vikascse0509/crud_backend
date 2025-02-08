const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "property_rental",
});

db.connect((err) => {
  if (err) {
    console.log("coonection failed", err);
    return;
  }
  console.log("Database connected succssfully");
});

module.exports = db;
