const ca = require('../models/cake_model')
const basket = require('../models/basket_model')

exports.cake_list = (req,res)=>{
    ca.find().
    then((cakeResult)=>{
        res.json(cakeResult)
    }).
    catch((err)=>{
        res.status(500).send("Error occured to retrive the cakes data")
    })
}

exports.cakebyname=(req,res)=>{
    ca.find({'name':req.params.cakeName}).
    then((cakeResults)=>{
        

        ca.find({},{name:1,_id:0}).
        then((nameResult)=>{

            console.log(nameResult)
            res.json(cakeResults+"available names:  "+nameResult)
            

        }).catch((err)=>{
            res.status(500).send("Error occured to retrive the cakes name")
        })
    }).
    catch((err)=>{
        res.status(500).send("Error occured to retrive the cakes data")
    })
 
    
}

exports.cakeByPriceRange=(req,res)=>{

    console.log(req.query.low,req.query.high);
    ca.find({'price':{$gt :req.query.low, $lt: req.query.high}}).
    then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).send("Error occured to retrive the price range")
    })
}

exports.insertIntobasket=(req,res)=>{

    const items = new basket(
        {
            name:req.query.name,
            price:req.query.price,
            cakeid:req.query.id

        }
    )

    items.save((err)=>{
        if(err)
            console.log("Error occurred while saving the data"+ err);
        console.log("item added to basket");
        res.send("ItemId with "+req.query.id+" added")
    })
}

exports.addItemRating = (req,res)=>{
    ca.findOneAndUpdate({cakeid:req.query.id},{rating:req.query.rating},(err,result)=>{
        if (err) {
            res.send(err)
        }else{
            res.send(result)
        }
    })
}