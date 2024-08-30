const { User } = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { username, phoneNumber, email } = req.body;
    const user = await User.create({ username, phoneNumber, email });
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting users' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};