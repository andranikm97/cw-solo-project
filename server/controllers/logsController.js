const Log = require("./../models/Log");

const createLog = async (req, res) => {
  try {
    console.log("Info receieved", req.body);
    res.send("Created a log");
    const newLog = await Log.create({ products: req.body });
    res.status(201);
    res.json(newLog);
  } catch (error) {
    res.status(400).send({ error, message: "Could not create log" });
  }
};

const getLogs = async (req, res) => {
  try {
    const logs = await Log.find({});
    res.status(200);
    res.json(logs);
  } catch {
    res.status(400).send({ error, message: "Could not get logs" });
  }
};

module.exports = { getLogs, createLog };
