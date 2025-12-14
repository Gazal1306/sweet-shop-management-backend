const express = require("express");
const router = express.Router();

const {
  getSweets,
  addSweet,
  updateSweet,
  deleteSweet,
} = require("../controllers/sweetController");

router.get("/", getSweets);
router.post("/", addSweet);
router.put("/:id", updateSweet);
router.delete("/:id", deleteSweet);

module.exports = router;
