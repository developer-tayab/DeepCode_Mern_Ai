const Router = require("express").Router();
const aiBugFixer = require("../controllers/aiBugFixer_controller");
const verifyToken = require("../utils/verifyToken");

Router.post("/ai-bugs-fixer", aiBugFixer);




module.exports = Router