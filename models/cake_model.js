const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const cakeDb = require('../db/cakeDb')
var conn = cakeDb.conn
// var conn      = mongoose.createConnection('mongodb://localhost:27017/cakeDelight')
var Schema=mongoose.Schema

var cakeSchema = new Schema({
    _id:{type:ObjectId},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    cakeid:{type:Number,required:true},
    rating:{type:Number}
},{collection:'cakes'})

module.exports=conn.model('model',cakeSchema)

// module.exports= mongoose.model("cakes",cakeSchema)
