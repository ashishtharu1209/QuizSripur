import React from 'react'
const Login = () => {
  return (
   <>
    <div className=' h-screen flex flex-col items-center md:flex-row md:justify-evenly '>
    <div className='text-box py-16 pl-20 '>
            <h1 className='text-blue-600 text-8xl font-bold px-12'> ShripurQuiz </h1>
         <h4 className='text-2xl px-12 text-black font-bold'>
       Expand Your Mind, One Question at a Time!
                </h4>
                </div>
                <div className='w-10/12 h-auto sm:w-7/12 md:w-5/12 lg:w-3/12 xl:w-3/12'>
                <form className='w-full h-min  bg-white shadow-lg rounded-lg mt-6 backdrop-contrast-50 bg-white/30 ...'>
                <input
type="email"
placeholder='email or phone number'
className='w-11/12 h-14 p-5 border-2 border-solid m-3 border-gray-100 rounded-lg outline-none focus:outline-blue-500'
/>
<input
type="password"
placeholder='password'
className='w-11/12 h-14 p-5 border-2 border-solid m-3 border-gray-100 rounded-lg outline-none focus:outline-blue-500'
/>
<button className='w-11/12 h-14 p-5 m-3 bg-blue-600 mt-4 rounded-lg text-white text-2xl font-semibold'>
Login
</button>
<hr className='mt-4 w-4/5 mx-auto' />
<p className='text-black mt-3 text-2xl mx-12 text-center font-semibold'>Don't Have Account?</p>
<button className=' w-11/12 h-12 m-3 bg-green-600 text-white my-8 text-2xl font-semibold rounded-lg content-center'>Sign Up
</button>
</form>
</div>


    </div>

    </>
    
  )
}

export default Login
