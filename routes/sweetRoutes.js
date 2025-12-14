const express = require("express");
const router = express.Router();

const {
  addSweet,
  getSweets,
  updateSweet,
  deleteSweet
} = require("../controllers/sweetController");

// 🔴 THIS LINE WAS MISSING
const auth = require("../middleware/auth");

router.post("/", auth, addSweet);
router.get("/", auth, getSweets);
router.put("/:id", auth, updateSweet);
router.delete("/:id", auth, deleteSweet);

module.exports = router;
