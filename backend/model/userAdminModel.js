const  mongoose  = require("mongoose");

const schema = new mongoose.Schema({
    UserName:{
        type:String,
        required: [true, "Please provide username"],
    },

    email:{
        type:String,
        required: [true, "Please provide email address"],
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
    },

    contactNumber:{
        type:Number,
        required:[true,"please provide the Contact number"]
    },


    verifiedEmail:{
        type:Boolean,
        default:false
    },

    verifiedContactNum:{
        type:Boolean,
        default:false
    },

    position:{
        type:String,
        required:[true,"please add description of you"]
    },

    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        // select: false,
      },

      resetPasswordToken: String,
      resetPasswordExpire: Date,

})



const userAdminModel = mongoose.model("userAdminModel", schema);

module.exports = userAdminModel;