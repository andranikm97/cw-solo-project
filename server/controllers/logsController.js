const Log = require("./../models/Log");

const createLog = async (req, res) => {
  try {
    console.log("Info receieved", req.body);
    let now = Date.now();
    const newLog = await Log.create({
      products: req.body,
      date: now,
    });
    res.status(201);
    res.json(newLog);
  } catch (error) {
    console.log(error);
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
