import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const {loading,logout}= useLogout()

  return (
    <div className ='flex mt-auto pt-2'>
        {!loading ? (<>
                <BiLogOut className = 'w-6 h-6 text-white cursor-pointer'
                onClick ={logout} />  <p className="pl-2 text-gray-300 hover:cursor-pointer" onClick ={logout} >Logout</p>
                </>
        ) : (
          <span className='loading loading-spinner'></span>
        )}
        
    </div>
  )
}

export default LogoutButton