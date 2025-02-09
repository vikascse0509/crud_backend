const db = require("../db/db");
// create user
const createUser = (req, res) => {
  const { user_name, password, contact_number } = req.body;
  const sql =
    "INSERT INTO testtable (user_name,password,contact_number) VALUES (?, ?, ?)";
  db.query(sql, [user_name, password, contact_number], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    res.status(201).json({
      message: "User resgistered successfully!",
      data: result,
    });
  });
};

// get users
const getUser = (req, res) => {
  db.query("SELECT * FROM testtable", (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    res.status(200).json({
      data: result,
    });
  });
};

// update users
const updateUsers = (req, res) => {
  const { id } = req.params;
  const { user_name, password, contact_number } = req.body;
  const sql =
    "UPDATE testtable SET user_name=?, password=?, contact_number=? WHERE user_id=?";
  db.query(sql, [user_name, password, contact_number, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    res.status(200).json({
      message: "User updated successfully!",
      data: result,
    });
  });
};
//delete users
const deleteUsers = (req, res) => {
  db.query("DELETE FROM testtable WHERE user_id=?", [req.params.id], (err) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    res.status(200).json({
      message: "User Deleted successfully!",
    });
  });
};

module.exports = { createUser, getUser, updateUsers, deleteUsers };
