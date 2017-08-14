var express = require('express');
var router = express.Router();
var hospitalCtrl = require('../controllers/hospital');

/**
 *  Routes
 */
router.route('/')
  .get(hospitalCtrl.list, function(req, res){
});

router.route('/:id')
  .get(hospitalCtrl.get, function(req, res){
})

module.exports = router;
