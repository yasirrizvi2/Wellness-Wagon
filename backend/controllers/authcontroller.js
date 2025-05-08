const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/usermodel');


const registerUser = async (req, res) => {
    
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ message: "Username and password are required" });
        }
        const { username, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({username, password: hashedPassword, role});
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        if (error.code === 11000) {
          return res.status(409).json({ message: "Email already in use" });
      } 
        res.status(500).json({ message: "Internal server error" });
    }
  
}

const loginUser = async (req, res) => {
  try {
    const { username, password} = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
    
    const user = await User.findOne({username});
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    } 

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET, { expiresIn: '1h' }
    );

    res.status(200).json({ message: "Login successful", token });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  registerUser,
  loginUser
}