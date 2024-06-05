import React from 'react'
import { TbUserSearch } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className ='flex items-center gap-2'>
    <input type = "text"placeholder='Search..' className = 'focus:outline-none input input-bordered rounded-full' />
    <button type= 'submit' className ='hover:bg-sky-500 btn btn-circle bg-slate-800 text-white'>
    <TbUserSearch  className = 'w-7 h-7 outline-none' />
    </button>
    </form>
  )
}

export default SearchInput

//Starter Code For SearchInput
// const SearchInput = () => {
//     return (
//       <form className ='flex items-center gap-2'>
//       <input type = "text"placeholder='Search..' className = 'focus:outline-none input input-bordered rounded-full' />
//       <button type= 'submit' className ='hover:bg-sky-900 btn btn-circle bg-sky-500 text-white'>
//       <TbUserSearch  className = 'w-7 h-7 outline-none' />
//       </button>
//       </form>
//     )
//   }
  
//   export default SearchInput