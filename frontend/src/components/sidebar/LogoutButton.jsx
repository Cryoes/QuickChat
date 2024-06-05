import React from 'react'
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className ='flex mt-auto'>
      <BiLogOut className = 'w-6 h-6 text-white cursor-pointer' />
      <p className ='ml-1'>Logout</p>
    </div>
  )
}

export default LogoutButton