const Router = require("express").Router();
const aiBugFixer = require("../controllers/aiBugFixer_controller");
const verifyToken = require("../utils/verifyToken");
const aiCodeTranslator = require("../controllers/aiCodeTranslator_controller")

Router.post("/ai-bugs-fixer", verifyToken, aiBugFixer);
Router.post("/code-translator", verifyToken, aiCodeTranslator);
Router.post("/ai-resume-analyzer-preparation", );




module.exports = Router