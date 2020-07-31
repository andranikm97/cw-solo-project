const router = require("express").Router();
const categoriesController = require("./controllers/catsController");

router.get("/categories", categoriesController.getCategoryNames);
// router.get("/", (req, res) => {
//   try {
//     res.send("All good");
//   } catch (error) {
//     console.log(req.hostname);
//     res.send("Access denied");
//   }
// });

module.exports = router;
