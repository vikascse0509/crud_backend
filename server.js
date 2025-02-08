const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
require("./db/db");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", userRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
