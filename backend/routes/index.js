var express = require('express');
var router = express.Router();
var { seating } = require('../controllers/seating');


//Health check
router.get('/', function (req, res, next) {
  res.send("Server is working")
});

router.post('/seating', seating);

module.exports = router;
