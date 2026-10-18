const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let inventory = [
  { id: 1, name: "Laptop", quantity: 10, price: 999, status: "in-stock" },
  { id: 2, name: "Mouse", quantity: 50, price: 25, status: "in-stock" }
];

app.get('/api/inventory', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  res.json({ success: true, data: inventory, page, total: inventory.length });
});

app.post('/api/inventory', (req, res) => {
  const newItem = { id: inventory.length+1, ...req.body };
  inventory.push(newItem);
  res.status(201).json({ success: true, message: "Item added", data: newItem });
});

app.listen(3000, () => console.log('Server running'));
