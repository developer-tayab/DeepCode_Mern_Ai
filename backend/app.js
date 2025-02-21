const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectionDB = require("./database/db")
const auth = require("./routes/auth_router");
const services = require("./routes/services_router")



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));
app.use(cookieParser());
connectionDB();


app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.use("/api/auth", auth);
app.use("/api/services", services)



module.exports = app