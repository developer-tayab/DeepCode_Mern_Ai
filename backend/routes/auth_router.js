const Router = require("express").Router();
const registerUser = require("../controllers/registerUser_controller")

// crud operation user Authentication 

Router.post("/register", registerUser)




module.exports = Router