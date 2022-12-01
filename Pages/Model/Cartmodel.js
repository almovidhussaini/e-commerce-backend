const mongoose = require("mongoose");
const CartSchema = mongoose.Schema(
    {
        userid:{
            type:String,
            required:[true,'please provide user id']
        },
        product:[
            {
                productname:{
                    type:String,
                    required:[true,'please provide product name']
                },
                quantity:{
                    type:Number,
                    required:[true, 'please provide quantity']
                },
                price:{
                    type:Number,
                    required:[true,'please provide total price']
                }

            }
        ],
        delivery_status:{
            type: String,
            required:[true,'please provide value for status'],
            default:'Pending'
        },
        createdAT:{
            type:Date,
            required: true,
            default: Date.now 

        },
        billingid:{
            type:String,
            required:[true,'please provide billing id']
        }
    }
)
const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart;