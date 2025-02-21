const Router = require("express").Router();
const registerUser = require("../controllers/registerUser_controller");
const loginUser = require("../controllers/loginUser_controller")

// crud operation user Authentication 

Router.post("/register", registerUser)
Router.post("/login", loginUser)




module.exports = Router