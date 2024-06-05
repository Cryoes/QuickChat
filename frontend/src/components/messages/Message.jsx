import React from 'react'
import {useAuthContext} from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime.js'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation
  const formattedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = '/blankProfile.png'
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "bg-gray-900"

  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className ={`chat ${chatClassName}`}>
        <div className ='chat-image avatar'>
            <div className = 'w-10 rounded-full'>
            <img src ={profilePic} />
            </div>
        </div>
        <div className ={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className = 'chat-footer text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message