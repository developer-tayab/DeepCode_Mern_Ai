const Router = require("express").Router();
const aiBugFixer = require("../controllers/aiBugFixer_controller");
const verifyToken = require("../utils/verifyToken");
const aiCodeTranslator = require("../controllers/aiCodeTranslator_controller")
const aiResumeAnalyzer = require("../controllers/aiResumeAnalyzer_controller");
const upload = require("../utils/multer");

Router.post("/ai-bugs-fixer", verifyToken, aiBugFixer);
Router.post("/code-translator", verifyToken, aiCodeTranslator);
Router.post("/ai-resume-analyzer-preparation", verifyToken, upload.single("resume"), aiResumeAnalyzer);

module.exports = Router;
