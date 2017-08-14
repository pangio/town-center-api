var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurant');

/**
 *  Routes
 */
router.route('/')
  .get(restaurantCtrl.list, function(req, res){
});

router.route('/:id')
  .get(restaurantCtrl.get, function(req, res){
})

module.exports = router;
