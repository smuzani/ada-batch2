var express = require('express');
var moment = require ('moment');
var router = express.Router();


router.get('/', function(req, res) {
res.json({ message: 'Hooray! Good Paymaster From Now!' });
});

module.exports = router;

var Bill = require ('./billschema.js');

router.route('/bill')   
 .post(function(req, res) {
      var bill = new Bill();
      bill.Name = req.body.Name;
      bill.Amount = req.body.Amount;
      bill.DueDate= req.body.DueDate;
      bill.BillNo= req.body.BillNo; 
      bill.AcctNo= req.body.AcctNo;    
      bill.Frequency= req.body.Frequency;     
      bill.Priority= req.body.Priority;      
      bill.IsPaid= req.body.IsPaid; 

      bill.save(function(err) {      
             if (err)   
             res.send(err);
        res.json({ message: 'Bill created!' 
        }); 
      }); 
  });
 
 router.route('/bill')   
  .get(function(req, res) {
      Bill.find(function(err, bill) {
          if (err)                
              res.send(err);            
              res.json(bill);        
      });    
  });


router.route ('/bill')
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
	DueDate: {$gte:start,$lte:end}
}).exec (function (err,bill){
	if (err)
	res.send(err);
	res.json(bill);
});
});


router.route('/bill/:id')  
 .post(function(req, res) {        
      Bill.findById(req.params.id, function(err, bill) {       
      if (err)                
        res.send(err);            
      
      bill.Name = req.body.Name;
      bill.Amount = req.body.Amount;
      bill.DueDate= req.body.DueDate;
      bill.BillNo= req.body.BillNo; 
      bill.AcctNo= req.body.AcctNo;    
      bill.Frequency= req.body.Frequency;     
      bill.Priority= req.body.Priority;      
      bill.IsPaid= req.body.IsPaid;         

      bill.save(function(err) {                
        if (err)                    
          res.send(err);                
        res.json({ message: 'Bill updated!' 
        });            
      });        
    });    
  })



router.route('/bill/:id') 
  .delete(function(req, res) {
      Bill.remove({
      _id: req.params.id
      }, function(err, bill) {
        if (err)
          res.send(err);
          res.json({ message: 'Successfully deleted' });
      });
  });