var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date());
  next();
})

router.get('/', function (req, res, next) {

  res.json({status: 'UP'});
});

module.exports = router;
