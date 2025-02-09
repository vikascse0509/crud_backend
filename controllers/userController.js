const db = require("../db/db");
// create user
const createUser = (req, res) => {
  const { user_name, password, role, contact_info } = req.body;
  const sql =
    "INSERT INTO Users (user_name,password,role,contact_info) VALUES (?, ?, ?, ?)";
  db.query(sql, [user_name, password, role, contact_info], (err, result) => {
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
  db.query("SELECT * FROM users", (err, result) => {
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
  const { user_name, password, role, contact_info } = req.body;
  const sql =
    "UPDATE Users SET user_name=?, password=?, role=?, contact_info=? WHERE user_id=?";
  db.query(
    sql,
    [user_name, password, role, contact_info, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }
      res.status(200).json({
        message: "User updated successfully!",
        data: result,
      });
    }
  );
};
//delete users
const deleteUsers = (req, res) => {
  db.query("DELETE FROM Users WHERE user_id=?", [req.params.id], (err) => {
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
