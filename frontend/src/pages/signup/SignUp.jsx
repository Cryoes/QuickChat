import React from 'react'

const SignUp = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='min-w-80 max-w-fit p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
      <h1 className = 'text-3xl w-full text-3x1 font-semibold text-center text-gray-300'>
      Quick 
      <span className="text-blue-500">Chat</span>
      </h1>
      <form>
        
        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-400'>Username</span>
          </label>
          <input type='text' placeholder=' ' className =' text-gray-400 bg-gray-900 w-full input input-bordered h-10'></input>
        </div>

        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-400'>Password</span>
          </label>
          <input type='password' placeholder=' ' className ='text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
        </div>

        <div>
          <label className = 'label p-2'>
            <span className = 'text-base label-text text-gray-400'>Confirm Password</span>
          </label>
          <input type='password' placeholder=' ' className ='text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
        </div>

  <div>
    <button className='bg-gray-800 text-gray-400 inherit btn btn-block btn-sm mt-2 border-none'>Register</button>
  </div>

        <a href ="#" className = 'text-gray-100 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Already have an account?
        </a>
      </form>
    </div>

  </div>
  
}


export default SignUp


//Starter Code For This File
// import React from 'react'

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
//             <span className = 'text-base label-text text-gray-400'>Username</span>
//           </label>
//           <input type='text' placeholder=' ' className =' text-gray-400 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-400'>Password</span>
//           </label>
//           <input type='password' placeholder=' ' className ='text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//         <div>
//           <label className = 'label p-2'>
//             <span className = 'text-base label-text text-gray-400'>Confirm Password</span>
//           </label>
//           <input type='password' placeholder=' ' className ='text-gray-700 bg-gray-900 w-full input input-bordered h-10'></input>
//         </div>

//   <div>
//     <button className='bg-gray-800 text-gray-400 inherit btn btn-block btn-sm mt-2 border-none'>Register</button>
//   </div>

//         <a href ="#" className = 'text-gray-100 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//           Already have an account?
//         </a>
//       </form>
//     </div>

//   </div>
  
// }


// export default SignUp