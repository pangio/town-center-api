var express = require('express');
var router = express.Router();
var serviceCtrl = require('../controllers/service');

/**
 *  Routes
 */
router.route('/')
  .get(serviceCtrl.list, function(req, res){
});

router.route('/:id')
  .get(serviceCtrl.get, function(req, res){
})

module.exports = router;
