const Product = require('../Model/Product');

exports.createProduct = async(req,res)=>{
    try{
        let payload={
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            category: req.body.category,
            description: req.body.description

        }
        let myproduct = await Product.create({
            ...payload
        });
        res.status(200).json({
            status:true,
            data: myproduct
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
exports.getProducts = async(req,res)=>{
    try{
        let myproducts = await Product.find();
        if(myproducts){
             res.status(200).json({
            status:true,
            data: myproducts
        })}
         else{
            res.send('error')
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json({
        error: err,
        status: false,
          })
    }
}