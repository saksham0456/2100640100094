const express = require('express');
const app = express();
const port = 3000;

const products = [
  // ... your product data
];

const categories = [
  // ... your category data
];

const companies = [
  // ... your company data
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/companies', (req, res) => {
  res.json(companies);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});