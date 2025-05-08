const e = require('express');
const Participant = require('../models/participant');

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const createParticipant = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  if (!name || !email || !phoneNumber) {
    return res.status(400).json({ error: 'Name, email, and phone number are required' });
  }

  try {
    const participant = await Participant.create({ name, email, phoneNumber });
    res.status(201).json({ message: 'Participant created successfully', participant });
  } catch (error) {
    if (error.code === 11000) {
      // Mongo duplicate key error
      return res.status(409).json({ error: 'Email must be unique' });
    }
    res.status(500).json({ error: 'Failed to create participant', details: error.message });
  }
})

module.exports = {
  createParticipant,
};