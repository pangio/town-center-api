var express = require('express');
var router = express.Router();
var cinemaCtrl = require('../controllers/cinema');

/**
 *  Routes
 */
router.route('/')
  .get(cinemaCtrl.list, function(req, res){
});

router.route('/:id')
  .get(cinemaCtrl.get, function(req, res){
})

module.exports = router;
