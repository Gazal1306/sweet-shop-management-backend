const db = require("../db");

// ADD SWEET (Admin later)
exports.addSweet = (req, res) => {
  const { name, price, quantity } = req.body;

  // 🔴 Validation
  if (!name || price == null || quantity == null) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (price <= 0 || quantity < 0) {
    return res.status(400).json({ message: "Invalid price or quantity" });
  }

  const sql = "INSERT INTO sweets (name, price, quantity) VALUES (?, ?, ?)";

  db.query(sql, [name, price, quantity], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({ message: "Sweet added successfully" });
  });
};


  const query =
    "INSERT INTO sweets (name, category, price, quantity) VALUES (?, ?, ?, ?)";

  db.query(query, [name, category, price, quantity], (err) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }
    res.status(201).json({ message: "Sweet added successfully" });
  });


// GET ALL SWEETS
exports.getSweets = (req, res) => {
  db.query("SELECT * FROM sweets", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }
    res.json(results);
  });
};
// Update sweet
exports.updateSweet = (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  if (!name || price == null || quantity == null) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = "UPDATE sweets SET name=?, price=?, quantity=? WHERE id=?";

  db.query(sql, [name, price, quantity, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.json({ message: "Sweet updated successfully" });
  });
};
// Delete sweet
exports.deleteSweet = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM sweets WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.json({ message: "Sweet deleted successfully" });
  });
};
