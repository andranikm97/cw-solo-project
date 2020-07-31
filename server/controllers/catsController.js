const db = require("../db");

exports.getCategoryNames = async (req, res) => {
  try {
    const categories = await db.categories;
    res.status(200).json(categories);
  } catch (error) {
    res.sendStatus(500);
    console.error("Error in fetching categories' names:", error);
  }
};
