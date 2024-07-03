const { Timestamp } = require('mongodb');
const Mongoose = require('mongoose');

const Expenseschema = new Mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        trim: true
       
    },
    description:{
        type:String,
        required: true,
        trim: true,
        maxLength: 20
    }
},{Timestamp:true}) 

module.exports = Mongoose.model('Expense',Expenseschema)