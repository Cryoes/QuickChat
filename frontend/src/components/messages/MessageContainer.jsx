import React, {useEffect} from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation.js'
import { useAuthContext } from '../../context/AuthContext.jsx'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation }= useConversation()

  useEffect(() => {
    //cleanup function (unmounts)
    return () => setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className = 'md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? ( 
      <NoChatSelected />
    ) : (
      <>
      {/*Header*/}
      <div className='bg-sky-900 px-4 py-2 mb-2'>
        <span className='text-gray-300 font-bold label-text'>To:</span>{" "}
        <span className='text-gray-300 font-bold'>{selectedConversation.username}</span>
    </div>
    <Messages />
    <MessageInput />
    </>
    )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser}= useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};