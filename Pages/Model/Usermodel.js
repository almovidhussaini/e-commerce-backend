const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;
const UserSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:[true, 'please provide name']
        },
        password:{
            type: String,
            required:[true,'please provide password'],
            
        },
        email:{
            type:String,
            required:[true,'please provide email'],
          
        }
    }
)
UserSchema.pre('save',function(next){
    var User=this;
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt){
        if (err) return next(err)
        bcrypt.hash(User.password, salt, function (err, hash){
            if (err) return next(err)
            User.password = hash
           next()
        })
    })
})
const User = mongoose.model("User",UserSchema)
module.exports = User;