const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id',userController.getUserById);
router.get('/:id/orders',userController.getOrdersByUserId);


router.post('/',userController.createUser);

module.exports = router;

