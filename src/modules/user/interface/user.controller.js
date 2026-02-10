const userService = require("../service/user.service");

async function createUser(req, res) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const user = await userService.createUser({ name, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message || "Error creating user" });
  }
}

async function getUser(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  createUser,
  getUser
};
