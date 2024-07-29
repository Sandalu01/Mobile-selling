const express = require('express');
const router = express.Router();

// Import the item controller (create the controller file accordingly)
const { getItems, createItem, deleteItem } = require('../controllers/items');

// Routes
router.get('/', getItems);
router.post('/', createItem);
router.delete('/:id', deleteItem);

module.exports = router;
