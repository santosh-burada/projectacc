const basket = require('../models/basket_model')

exports.order_list=(req,res)=>{
    basket.find().
    then((orders)=>{
        res.json(orders)
    }).
    catch((err)=>{
        res.status(500).send("Error occured to retrive the cakes data")
    })
}

exports.order_removeById = (req,res)=>{

  basket.findOneAndRemove({cakeid:req.query.id},(err,result)=>{

    if (err) {
        res.send(err)
    }else{
        res.send(result)
    }
  })
} 