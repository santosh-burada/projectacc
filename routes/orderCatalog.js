var express = require('express');
var router = express.Router();


const basket = require('../controllers/basket')

router.get(['/allOrders','/checkOut'],basket.order_list)
router.get('/removeItemById',basket.order_removeById)

module.exports = router;