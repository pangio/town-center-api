var express = require('express');
var router = express.Router();
var saleCtrl = require('../controllers/sale');

/**
 *  Routes
 */
router.route('/')
  .get(saleCtrl.list, function(req, res){
});

router.route('/:id')
  .get(saleCtrl.get, function(req, res){
})

module.exports = router;
