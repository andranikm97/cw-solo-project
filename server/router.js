const router = require("express").Router();
const logsController = require("./controllers/logsController");

router.get("/logs", logsController.getLogs);
router.post("/logs", logsController.createLog);

module.exports = router;
