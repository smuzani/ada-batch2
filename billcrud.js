var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BillCRUDSchema  = new Schema({
    
    Name: String, 
    Amount: Number, 
    DueDate: Date,
    BillNo: String,    
    AcctNo: String,    
    Frequency: Number,   
    Priority: Number,    
   	IsPaid: Boolean
   	});

module.exports = mongoose.model('bill', BillCRUDSchema);