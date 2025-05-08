const express = require('express');
const router = express.Router();
const { createParticipant} = require('../controllers/participant.js');

router.post('/participant/add', createParticipant);

module.exports = router;