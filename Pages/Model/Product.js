const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,'please provide product name'],
        },
        price:{
            type: Number,
            required:[ true, 'please add price alue'],
        },
        image:[
                  {
                    type: String,
                    required: [true,'please provide image url'],
                  }
        ],
        category:{
            type:String,
            // required:[ true, 'please provide category']
            default:'Laptop'
        },
        description:{
            type: String,
            // required:[true,'provide discription']
            default:'nice item'
        }
    }
)
const Product = mongoose.model("Product",ProductSchema)
module.exports = Product;