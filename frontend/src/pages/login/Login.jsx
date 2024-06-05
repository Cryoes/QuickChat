import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js';

const Login = () => {

  const [username,setUsername]= useState("");
  const [password, setPassword]= useState("");

  const {loading,login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='min-w-80 max-w-fit p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
      <h1 className = 'text-3xl w-full text-3x1 font-semibold text-center text-gray-300'>
      Quick 
      <span className="text-blue-500">Chat</span>
      <div className = "text-sm">Login</div>
      </h1>

      <form onSubmit ={handleSubmit}>
        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-300'>Username</span>
          </label>
          <input type='text' placeholder='' className ='text-gray-400 bg-gray-900 w-full input input-bordered h-10 focus:outline-none'
            value ={username}
            onChange={(e)=> setUsername(e.target.value)}/>
        </div>


        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-300 '>Password</span>
          </label>
          <input type='password' placeholder='' className ='focus:outline-none text-gray-700 bg-gray-900 w-full input input-bordered h-10'
                      value ={password}
                      onChange={(e)=> setPassword(e.target.value)} />
        </div>

  <div>
    <button className='hover:bg-sky-900 hover:text-white bg-gray-800 text-gray-400 inherit btn btn-block btn-sm mt-2 border-none'
      disabled ={loading}>
        {loading ? <span className='loading loading-spinner '></span> : "Login"}</button>
  </div>

        <Link to="/signup" className = 'text-gray-100 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Register an account
        </Link>
      </form>
    </div>

  </div>
  
}

export default Login

//Starter Code For This File

// const Login = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='min-w-80 max-w-fit p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
//       <h1 className = 'text-3xl w-full text-3x1 font-semibold text-center text-gray-300'>
//       Login 
//       <span className="text-blue-500"> QuickChat</span>
//       </h1>
//       <form>
//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-400'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter username...' className =' text-gray-400 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-400'>Password</span>
//           </label>
//           <input type='password' placeholder='Enter password...' className ='text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//   <div>
//     <button className='bg-gray-800 text-gray-400 inherit btn btn-block btn-sm mt-2 border-none'>Login</button>
//   </div>
  
//         <a href ="#" className = 'text-gray-400 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//           Register an account
//         </a>
//       </form>
//     </div>

//   </div>
  
// }