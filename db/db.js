require("dotenv").config();
const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("coonection failed", err);
    return;
  }
  console.log("Database connected succssfully");
});

module.exports = db;
