var express = require('express');
var moment = require('moment');
var router = express.Router();


router.get('/', function(req, res) {
res.json({ message: 'Hooray! Good Paymaster From Now!' });
});

module.exports = router;

moment().format('YYYY MM DD');
moment().fromNow();