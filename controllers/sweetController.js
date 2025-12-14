const db = require("../db");

/* GET all sweets */
exports.getSweets = (req, res) => {
  const query = "SELECT * FROM sweets";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.status(200).json(results);
  });
};

/* ADD sweet */
exports.addSweet = (req, res) => {
  const { name, category, price, quantity } = req.body;

  const query =
    "INSERT INTO sweets (name, category, price, quantity) VALUES (?, ?, ?, ?)";

  db.query(query, [name, category, price, quantity], (err) => {
    if (err) return res.status(500).json({ message: "Insert failed" });
    res.status(201).json({ message: "Sweet added successfully" });
  });
};

/* UPDATE sweet */
exports.updateSweet = (req, res) => {
  const { id } = req.params;
  const { name, category, price, quantity } = req.body;

  const query =
    "UPDATE sweets SET name=?, category=?, price=?, quantity=? WHERE id=?";

  db.query(query, [name, category, price, quantity, id], (err, result) => {
    if (err) return res.status(500).json({ message: "Update failed" });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Sweet not found" });

    res.status(200).json({ message: "Sweet updated successfully" });
  });
};

/* DELETE sweet */
exports.deleteSweet = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM sweets WHERE id=?";

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Delete failed" });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Sweet not found" });

    res.status(200).json({ message: "Sweet deleted successfully" });
  });
};
