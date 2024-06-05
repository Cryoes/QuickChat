import React from 'react'
const imgUrl = './blankProfile.png'

const Message = () => {
  return (
    <div className ="chat chat-end">
        <div className ='chat-image avatar'>
            <div className = 'w-10 rounded-full'>
            <img src ={imgUrl} />
            </div>
        </div>
        <div className ={'chat-bubble text-white bg-blue-600'}>Hi! What is upp?</div>
        <div className = 'chat-footer text-xs flex gap-1 items-center'>2:25am</div>
    </div>
  )
}

export default Message