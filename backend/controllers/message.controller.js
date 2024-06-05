import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import {getReceiverSocketId, io} from '../socket/socket.js'

export const sendMessage = async (req,res) =>{
    try {
        //Get Data from user
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id

        //Look for Conversation between senderId and receiverId
        let conversation = await Conversation.findOne({
            participants:{$all: [senderId,receiverId]},
        })

        //If No conversation create one
        if(!conversation) {
            conversation = await Conversation.create({
            participants: [senderId,receiverId],
            })
        }

        //Create Message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        //Push message to array
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        //await conversation.save()
        //await newMessage.save()
        //Paralell Async
        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId) {
            //io.to(<socket_id>.emit() used to send to specific client based on socket_id)
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        

        res.status(201).json(newMessage)

        
        

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error:"internal server error"})
    }
}

export const getMessages = async(req,res) =>{
    try {
        const {id:userToChatId}= req.params
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId,userToChatId]},
        }).populate("messages")//Gets every message in the messages array

        if(!conversation) return res.status(200).json([])
            const messages = conversation.messages

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message)
        res.status(500).json({error:"internal server error"})
    }
}