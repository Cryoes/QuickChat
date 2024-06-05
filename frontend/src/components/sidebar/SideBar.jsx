import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const SideBar = () => {
  return (
    <div className ="border-r border-slate-500 p-4 flex flex-col">

        <SearchInput />
        <div className='my-0 divider px-3'/>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default SideBar