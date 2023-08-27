const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
    },
    dob:{
        type: Date
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    pincode:{
        type: String
    },
    createdOn:{
        type: Date,
        default: Date.now
    },
    modifiedOn:{
        type: Date
    }
})

const UserInfo = new mongoose.model("userCredential", userSchema)
module.exports = UserInfo