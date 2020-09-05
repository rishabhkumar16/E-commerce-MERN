const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    lastname:{
        type: String,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    encry_password:{
        type: String,
        required: true
    },
    userinfo:{
        type: String,
        trim: true
    },
    salt: String,
    role:{
        type: Number,
        default:0
    },
    purchases:{
        type: Array,
        default: []
    }
  });

userSchema.method = {
    securePassword: function(plainpassword){
        if(!encry_password) return "";
        try{
            return crypto.createHmac('sha256',this.salt).update(plainpassword).digest('hex');
        } catch (err){
            return "";
        }
    }
}

module.exports = mongoose.model("User",userSchema)