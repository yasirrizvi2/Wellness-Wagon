const TodoItem = require('../models/todoitem.js');

// CREATE
const addtodoItem = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const item = await TodoItem.create({ title, description });
    res.status(201).json({ message: 'Item added successfully', item });
  } catch (error) {
    if (error.code === 11000) {
      // Mongo duplicate key error
      return res.status(409).json({ error: 'Title must be unique' });
    }
    res.status(500).json({ error: 'Failed to add item', details: error.message });
  }
};

// READ
const getalltodoItems = async (req, res) => {
  try {
    const items = await TodoItem.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items', details: error.message });
  }
};

// DELETE
const deletetodoitem = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await TodoItem.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item', details: error.message });
  }
};

// UPDATE
const updatetodoitem = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedItem = await TodoItem.findByIdAndUpdate(
      id,
      { title, description, updatedAt: new Date() },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item updated successfully', updatedItem });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item', details: error.message });
  }
};

module.exports = {
  addtodoItem,
  getalltodoItems,
  deletetodoitem,
  updatetodoitem,
};
