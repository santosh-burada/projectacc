var express = require('express');
var router = express.Router();


const cake = require('../controllers/cake')

router.get('/ItemRatingById',cake.addItemRating)

module.exports = router;