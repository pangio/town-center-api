var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home');

/**
 *  Routes
 */
router.route('/')
  .get(homeCtrl.list, function(req, res){
  });

module.exports = router;
