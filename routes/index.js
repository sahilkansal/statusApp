var express = require('express');
var router = express.Router();
var path = require('path');


var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile( path.join(app.get('views'), 'index.html'));
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
