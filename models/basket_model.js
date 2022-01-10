const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const basketDb = require('../db/basketDb')
const connection = basketDb.conn
var Schema=mongoose.Schema


var orderSchema = new Schema({
    id:{type:ObjectId},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    cakeid:{type:Number,required:true}
},{collection:'basket'})
module.exports=connection.model('model',orderSchema)
// module.exports=mongoose.model("basket",orderSchema)