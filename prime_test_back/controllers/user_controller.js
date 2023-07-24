const bcrypt = require('bcrypt');
const { User } = require('../models');
const { generateAccessToken } = require('../utils/generateAccesToken');
require('dotenv').config();
const JWT = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function register( req, res ) {
    const { firstName, email, password, year} = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z0-9]).{6,}$/;
    const nameRegex = /^[a-zA-Z]{3,}$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      } else if (!nameRegex.test(firstName)) {
        return res.status(400).json({ error: "Short first name" });
      } else if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: "Invalid password format" });
      }

      try {
        const users = await User.findOne({ where: { email: email } });
        if (users) {
          return res.status(400).json({ error: "Email already exists" });
        }

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    if (firstName) {
      const data = await User.create({
        firstName,
        email,
        password: hashed_password,
        year,
        role: 0
      });
      console.log(data , 'data');
      let token = generateAccessToken(email, 0);
      console.log(email, token);
      return res.status(201).json(data);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function login(req, res) {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email: email } });
  
      if (!user) {
        return res.status(400).send("Email is not correct");
      }
  
      const hashedPasswordMatch = await bcrypt.compare(password, user.password);
      if (hashedPasswordMatch) {
        const token = generateAccessToken( user.id, email, user.role);
        console.log(token);
        return res.send(JSON.stringify({ status: "Logged in", jwt: token, role: user.role, userid: user.id }));
      } else {
        return res.status(400).send("Invalid password");
      }
    } catch (error) {
      return res.status(500).json({ error: message });
    }
  }

  //extra  

  async function userById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  

  async function updateUser(req, res) {
    const { firstName, email, password, year } = req.body;
    const { id } = req.params;
    try {
      const updatedUsers = await User.update(
        { firstName, email, password, year },
        { where: { id: id } }
      );
      res.status(201).json(updatedUsers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  

module.exports = { register, login, userById, updateUser };