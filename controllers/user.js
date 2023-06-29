const User = require('../models/User')
const bcrypt = require('bcrypt');
const {generateToken} = require('../helpers/token')

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        // console.log(res)
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(400).json({
            message: 'the username you entered is not connected to an account.',
          });
        }
        const check = await bcrypt.compare(password, user.password);
        if (!check) {
          return res.status(400).json({
            message: 'Invalid credentials. Please try again.',
          });
        }
        const token = generateToken({ id: user._id.toString() }, '30d');
        res.send({
          id: user._id,
          username: user.username,
          picture: user.picture,
          token: token,
        });
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }