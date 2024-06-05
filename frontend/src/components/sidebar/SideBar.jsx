import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import { useAuthContext } from '../../context/AuthContext.jsx'

const SideBar = () => {

  const {authUser}= useAuthContext()

  return (
    <div className ="pt-0 border-r border-slate-500 p-4 flex flex-col bg-slate-900">
        <div className = "flex m-0 text-gray-200 mb-2 justify-center p-2">
         Logged In: {authUser.username}
        </div>
        <SearchInput />
        <div className='my-0 divider px-3'/>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default SideBar