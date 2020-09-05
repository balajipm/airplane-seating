var express = require('express');
var router = express.Router();
var { seating } = require('../controllers/seating');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Server is working")
});

router.get('/seating', seating);

module.exports = router;
