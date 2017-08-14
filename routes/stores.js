var express = require('express');
var router = express.Router();
var storeCtrl = require('../controllers/store');

/**
 *  Routes
 */
router.route('/')
  .get(storeCtrl.list, function(req, res){
});

router.route('/:id')
  .get(storeCtrl.get, function(req, res){
})

module.exports = router;
