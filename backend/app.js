const express = require("express");
const app = express();
const cors = require("cors");
const connectionDB = require("./database/db")
const auth = require("./routes/auth_router");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));
connectionDB();


app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.use("/api/auth", auth);



module.exports = app