var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BillSchema = new Schema({
Name: String,
Amount: Number,
DateDue: Date,
Bill_No: String,
Acct_No: String,
Frequency:Number,
Priority:Number,
IsPaid:Boolean,
createdAt : {type: Date, default: Date.now}
});


module.exports = mongoose.model('Bill', BillSchema);