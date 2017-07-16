var express    =require('express');
var app        =express();
var bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
var port = process.env.PORT ||8080;

var router = express.Router();
router.get('/',function(req, res){    
    res.json({ message:'Welcome to Bill Management System!'});
});

app.use('/', router);
app.listen(port);
console.log('Welcome to Bill Management System API! '+ port);


var mongoose   =require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds023550.mlab.com:23550/bill_detail')

var Bill = require('./billcrud.js');

router.route('/billcrud')   
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
 
router.route('/billcrud/:id')  
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

router.route('/billcrud')   
  .get(function(req, res) {
      Bill.find(function(err, bill) {
          if (err)                
              res.send(err);            
              res.json(bill);        
      });    
  });

router.route('/billcrud/:id') 
  .get(function(req, res) {        
      Bill.findById(req.params.id, function(err, bill) {
          if (err)                
              res.send(err);            
              res.json(bill); 
      });    
  });

router.route('/billcrud/:id') 
  .delete(function(req, res) {
      Bill.remove({
      _id: req.params.id
      }, function(err, bill) {
        if (err)
          res.send(err);
          res.json({ message: 'Successfully deleted' });
      });
  });

module.exports =app;

