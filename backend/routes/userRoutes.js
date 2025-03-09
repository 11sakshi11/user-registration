// const express = require("express");
// const User = require("../models/User");

// const router = express.Router();
 
// // Create User
// router.post("/register", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// router.post("/register", async (req, res) => {
//   try {
//     console.log("Received data:", req.body);
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Error during registration:", err.message);
//     res.status(400).json({ error: err.message });
//   }
// });


// // Get all users
// router.get("/users", async (req, res) => { 
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;





//yaha se 
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create User
router.post("/register", async (req, res) => {
  try {
    console.log("API called"); // ✅ Logs when API is hit
    // console.log("Received data:", req.body); // ✅ Logs request data

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
