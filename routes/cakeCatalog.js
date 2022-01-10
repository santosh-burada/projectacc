var express = require('express');

var router = express.Router();

/* GET home page. */
const cake = require('../controllers/cake')

router.get('/allCakes',cake.cake_list)
router.get('/cakeByName/:cakeName',cake.cakebyname)
router.get('/cakeByPriceRange',cake.cakeByPriceRange)
router.get('/insertCake',cake.insertIntobasket)

module.exports = router;
