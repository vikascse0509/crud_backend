const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);
router.get("/getUser", userController.getUser);
router.put("/updateUser/:id", userController.updateUsers);
router.delete("/deleteUser/:id", userController.deleteUsers);

module.exports = router;
