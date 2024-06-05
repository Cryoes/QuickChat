import React from 'react'
import useConversation from '../../zustand/useConversation.js'

const imgUrl = './blankProfile.png'

const Conversation = ({conversation,lastIdx}) => {
  const { selectedConversation , setSelectedConversation }= useConversation()

  const isSelected = selectedConversation?._id === conversation._id;

  return <>
  <div className ={`pt-0 flex gap-2 items-centered hover:bg-sky-600 rounded p-2 py-1 cursor-pointer
    ${isSelected ? "bg-sky-600" : ""}
    `}
    onClick={() => setSelectedConversation(conversation)}
    >
    <div className ='avatar online'>
        <div className = 'w-12 rounded-full'>
          {/*Profile Pic Support To be Added below */}
            <img src= {imgUrl} alt="user avatar"/>
            </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
        <p className='pt-3 font-bold text-gray-200'>{conversation.username}</p>
    </div>
  </div>
</div>

{!lastIdx && <div className='divider my-0 py-0 h-1' />}
  </>
}

{/* <>
<div
  className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
  ${isSelected ? "bg-sky-500" : ""}
`}
  onClick={() => setSelectedConversation(conversation)}
>
  <div className={`avatar ${isOnline ? "online" : ""}`}>
    <div className='w-12 rounded-full'>
      <img src={conversation.profilePic} alt='user avatar' />
    </div>
  </div>

  <div className='flex flex-col flex-1'>
    <div className='flex gap-3 justify-between'>
      <p className='font-bold text-gray-200'>{conversation.fullName}</p>
      <span className='text-xl'>{emoji}</span>
    </div>
  </div>
</div>

{!lastIdx && <div className='divider my-0 py-0 h-1' />}
</> */}


export default Conversation

//Starter Code For Conversation
// const Conversation = () => {
//     return <>
//     <div className ='pt-0 flex gap-2 items-centered hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//       <div className ='avatar online'>
//           <div className = 'w-12 rounded-full'>
//               <img src= {imgUrl} alt="user avatar"/>
//               </div>
//           </div>
//           <div className="flex flex-col flex-1">
//               <div className = 'pt-2 flex gap-3 justify-between'>
//                   <p className = 'font-bold text-gray-200'>JohnDoe</p>
//               <span className ="text-xl">🤖</span>
//           </div>
//       </div>
//     </div>
//     <div className = ' divider h-1 my-0 py-0'/>
//     </>
//   }
  
//   export default Conversation