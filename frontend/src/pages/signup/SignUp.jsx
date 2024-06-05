import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup.js'


const SignUp = () => {

  const[inputs,setInputs] = useState({
    username: '',
    password: '',
    confirmPassword:''
  })

const {loading,signup} = useSignup()

  const handleSubmit= async (e) => {
    e.preventDefault()
    await signup(inputs)
    console.log(inputs)
  }

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='min-w-80 max-w-fit p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
      <h1 className = 'text-3xl w-full text-3x1 font-semibold text-center text-gray-300'>
      Quick 
      <span className="text-blue-500">Chat</span>
      <div className = "text-sm">Register</div>
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-300'>Username</span>
          </label>
          <input type='text' placeholder=' ' 
            className ='focus:outline-none text-gray-400 bg-gray-900 w-full input input-bordered h-10'
            value ={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
        </div>

        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-300'>Password</span>
          </label>
          <input type='password' placeholder=' ' 
            className ='focus:outline-none text-gray-700 bg-gray-900 w-full input input-bordered h-10'
            value ={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
        </div>

        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-300'>Confirm Password</span>
          </label>
          <input type='password' placeholder=' ' 
          className ='focus:outline-none text-gray-700 bg-gray-900 w-full input input-bordered h-10'
          value ={inputs.confirmPassword}
          onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
        </div>

  <div>
    <button className='hover:bg-sky-900 hover:text-white bg-gray-800 text-gray-400 inherit btn btn-block btn-sm mt-2 border-none'
    disabled ={loading} 
    >
      {loading ? <span className = 'loading loading-spinner'></span> : "Register"}
    </button>
  </div>

        <Link to ="/login" className = 'text-gray-100 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Already have an account?
        </Link>
      </form>

    </div>
  </div>
  
}


export default SignUp


//Starter Code For This File
// const SignUp = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='min-w-80 max-w-fit p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
//       <h1 className = 'text-3xl w-full text-3x1 font-semibold text-center text-gray-300'>
//       Quick 
//       <span className="text-blue-500">Chat</span>
//       </h1>
//       <form>
        
//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-300'>Username</span>
//           </label>
//           <input type='text' placeholder=' ' className =' focus:outline-none text-gray-400 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-300'>Password</span>
//           </label>
//           <input type='password' placeholder=' ' className ='focus:outline-none text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-300'>Confirm Password</span>
//           </label>
//           <input type='password' placeholder=' ' className ='focus:outline-none text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//   <div>
//     <button className='hover:bg-sky-900 hover:text-white bg-gray-800 text-gray-400 inherit btn btn-block btn-sm mt-2 border-none'>Register</button>
//   </div>

//         <Link to ="/login" className = 'text-gray-100 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//           Already have an account?
//         </Link>
//       </form>
//     </div>

//   </div>
  
// }

// export default SignUp
