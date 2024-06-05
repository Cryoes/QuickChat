import React from 'react'
const imgUrl = './blankProfile.png'

const Conversation = () => {
  return <>
  <div className ='pt-0 flex gap-2 items-centered hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
    <div className ='avatar online'>
        <div className = 'w-12 rounded-full'>
            <img src= {imgUrl} alt="user avatar"/>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className = 'pt-2 flex gap-3 justify-between'>
                <p className = 'font-bold text-gray-200'>JohnDoe</p>
            <span className ="text-xl">🤖</span>
        </div>
    </div>
  </div>
  <div className = ' divider h-1 my-0 py-0'/>
  </>
}

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