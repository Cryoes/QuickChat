import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        //Get ObjectId from user.model.js
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    receiverId:{
        //Get ObjectId from user.model.js
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    message:{
        type:String,
        required:true,
    }
    //createdAt, updatedAt fields
}, {timestamps:true})

const Message = mongoose.model("Message", messageSchema)

export default Message