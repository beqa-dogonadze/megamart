import { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'

const SignIn = () => {
  const [hide, setHide] = useState(true)
  const handleVisibility = () => {
    setHide((prevHide) => !prevHide)
  }

  const validateEmail = (email) =>
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

  return (
    <div className='w-full h-[100vh] flex flex-col items-center my-32 m-auto bg-white'>
      <div className='gap-10 flex flex-col items-start'>
        <h1 className='text-2xl font-alice text-[#008fcd]'>REGISTER NOW!</h1>
        <form className='flex flex-col items-start justify-center gap-6'>
          <div className='flex flex-col'>
            <label className='text-gray-400 select-none'>Email Address</label>
            <input
              className='border border-gray-400 w-[300px] sm:w-[400px] focus:outline-none focus:border-2 focus:border-[#008fcd] rounded-md h-10 p-3'
              type='email'
              name='email'
            />
            <span id='emailError'>{validateEmail ? 'none' : 5}</span>
          </div>
          <div className='flex flex-col '>
            <label className='text-gray-400 select-none'>Password</label>
            <input
              className='border border-gray-400 w-[300px] sm:w-[400px] focus:outline-none focus:border-2 focus:border-[#008fcd] rounded-md h-10 p-3 pr-10'
              type='password'
              name='password'
            />
            <span id='passwordError'>sad</span>
          </div>
          <div className='relative'>
            <label className='text-gray-400 select-none'>
              Confirm Password
            </label>
            <div className='relative flex flex-col'>
              <input
                className='border border-gray-400 w-[300px] sm:w-[400px] focus:outline-none focus:border-2 focus:border-[#008fcd] rounded-md h-10 p-3 pr-10'
                type={hide ? 'password' : 'text'}
                name='password'
              />
              {hide ? (
                <IoEyeOutline
                  className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                  onClick={handleVisibility}
                />
              ) : (
                <FaRegEyeSlash
                  className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                  onClick={handleVisibility}
                />
              )}
            </div>
            <span id='Password'>test</span>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              className='w-[17px] h-[17px] cursor-pointer'
            />
            <label htmlFor=''>Remember me</label>
          </div>
        </form>
        <button
          onClick={validateEmail}
          className='bg-[#008fcd] text-white rounded-3xl p-2 px-5 w-full'
        >
          <h1 className='text-center'>SIGN IN</h1>
        </button>
        <div>
          Already have an account?
          <button className='pl-1 text-[#008fcd] hover:underline'>
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
export default SignIn
