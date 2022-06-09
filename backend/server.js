const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config({ path: "./config/.env" });

const db = require("./config/db");
db();

const hotelrouter = require("./routes/hotel-router");

const app = express();

app.use(express.json());
app.use(express.static("public/"));
app.use(cors());
app.use("/api/v1", hotelrouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
