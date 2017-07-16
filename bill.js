var express = require('express');
var moment = require ('moment');
var router = express.Router();


router.get('/', function(req, res) {
res.json({ message: 'Hooray! Good Paymaster From Now!' });
});

module.exports = router;

var Bill = require ('./billschema.js');

router.route('/bills')
.post(function(req, res) {
var bill = new Bill();
bill.name = req.body.name;
bill.amount = req.body.amount;
bill.datedue = req.body.datedue;
book.save(function(err) {
if (err)
res.send(err);
res.json({ message: 'Bill created!' });
});
});

router.route ('/bills')
.get(function(req,res){
	var timestamp = req.params.start;
	if (moment(timestamp).isValid()){
		start = moment(timestamp);
	}

	else {
		start = moment(parseInt(timestamp)*1000);
	};
	
	var timestamp1 = req.params.end;
	if (moment(timestamp1).isValid()){
		end = moment(timestamp1);
	}

	else {
		end = moment(parseInt(timestamp1)*1000);
	}
	

Bill.find ({
	datedue: {$gte:start,$lte:end}
}).exec (function (err,bills){
	if (err)
	res.send(err);
	res.json(bills);
});
});