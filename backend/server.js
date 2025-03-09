// const express = require("express");
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false); // or true, based on your preference

// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(express.json()); 
// app.use(cors());

// const PORT = process.env.PORT || 5000;  
// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// // Import user routes
// const userRoutes = require("./routes/userRoutes");
// app.use("/api", userRoutes);

// // Sample Route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



require("dotenv").config(); // ✅ Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const userRoutes = require("./routes/userRoutes"); 
app.use("/api", userRoutes); // ✅ Ensure "/api/register" route is used

app.get("/", (req, res) => {
  res.send("API is running...");
  // res.json({ message: `Hello` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
