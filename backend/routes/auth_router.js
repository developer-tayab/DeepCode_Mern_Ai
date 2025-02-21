const Router = require("express").Router();
const registerUser = require("../controllers/registerUser_controller");
const loginUser = require("../controllers/loginUser_controller");
const logoutUser = require("../controllers/logoutUser_controller")

// crud operation user Authentication 

Router.post("/register", registerUser)
Router.post("/login", loginUser)
Router.post("/logout", logoutUser)




module.exports = Router