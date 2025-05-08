const express = require('express');
const router = express.Router();

const { addtodoItem, getalltodoItems, deletetodoitem, updatetodoitem } = require('../controllers/todolistcontroller.js');

router.post('/todoitem/add', addtodoItem);
router.get('/todoitem/getall', getalltodoItems);
router.put('/todoitem/update/:id', updatetodoitem);
router.delete('/todoitem/delete/:id', deletetodoitem);

module.exports = router;