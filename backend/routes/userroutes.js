const express = require('express');
const verifyToken = require('../middleware/authmiddleware.js');
const authorizeRole = require('../middleware/rolemiddleware.js');
const router = express.Router();

router.get('/admin', verifyToken, authorizeRole("admin"), (req, res) => {
    res.send('Admin route accessed successfully');
});

router.get('/user', verifyToken, authorizeRole("admin", "user"), (req, res) => {
    res.send('User route accessed successfully');
});

module.exports = router;