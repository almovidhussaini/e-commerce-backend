const Cart = require('../Model/Cartmodel')
// const {parse, stringify} = require('flatted/cjs');

exports.createcart = async(req,res)=>{
    try{
        let payload={
            userid:req.body.userid,
            product:req.body.product,
            delivery_status:req.body.delivery_status,
            billingid:req.body.billingid
        }

        let cart= await Cart.create({
            ...payload
        })

        res.status(200).json({
            status:true,
            data: cart
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

exports.getmycart = async(req,res)=>{
   console.log(req.query)
    try{
        let orders= await Cart.find({
            userid:req.query.id
        })
        if(orders){
             res.status(200).json({
            status:true,
            data: orders
        })
        }
        else{
            res.status(500).json({
                message:'user has not ordered any items yet'
            })

        }
    }catch(err){
        console.log(err)
        res.status(500).json({
        error: err,
        status: false,
        })
    }
}