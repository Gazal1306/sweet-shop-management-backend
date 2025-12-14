require("dotenv").config();

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const sweetRoutes = require("./routes/sweetRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// 🔹 Parse JSON body
app.use(express.json());

// 🔹 Health check / test route
app.get("/", (req, res) => {
  res.send("Sweet Shop Backend is running");
});

// 🔹 Auth routes (Register & Login)
app.use("/api/auth", authRoutes);

// 🔹 Sweet routes (Protected)
app.use("/api/sweets", sweetRoutes);

// 🔹 Protected test route (JWT verification)
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

// 🔹 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
