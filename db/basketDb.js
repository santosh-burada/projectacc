var mongoose = require('mongoose')


//connection and checking the status
dbURL="mongodb://localhost:27017/Orders"
var conn = mongoose.createConnection(dbURL,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Connected to the Orders");
})

exports.conn = conn