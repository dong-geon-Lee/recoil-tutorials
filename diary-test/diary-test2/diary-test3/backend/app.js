const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectedDB = require("./config/database");

const app = express();
const port = process.env.PORT || 5000;
connectedDB();

app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/users"));

app.listen(port, () => console.log(`Server Runnding ${port}`));

module.exports = app;
