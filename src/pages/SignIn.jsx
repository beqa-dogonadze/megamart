import { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [hide, setHide] = useState(true)
  const handleVisibility = () => {
    setHide((prevHide) => !prevHide)
  }

  return (
    <div className='w-full h-[100vh] flex flex-col items-center my-32 m-auto bg-white'>
      <div className='gap-10 flex flex-col items-start'>
        <h1 className='text-2xl font-alice text-[#008fcd]'>REGISTER NOW!</h1>
        <form className='flex flex-col items-start justify-center gap-6'>
          <div className='flex flex-col'>
            <label className='text-gray-400 w-[150px] select-none'>
              Email Address
            </label>
            <input
              className='border border-gray-400 focus:outline-none focus:border-2 focus:border-[#008fcd] rounded-md h-10 w-96 p-3'
              type='email'
              name='email'
            />
          </div>
          <div className='relative'>
            <label className='text-gray-400 w-[150px] select-none'>
              Password
            </label>
            <div className='relative'>
              <input
                className='border border-gray-400 focus:outline-none focus:border-2 focus:border-[#008fcd] rounded-md h-10 w-96 p-3 pr-10'
                type='password'
                name='password'
              />
            </div>
          </div>
          <div className='relative'>
            <label className='text-gray-400 w-[150px] select-none'>
              Confirm Password
            </label>
            <div className='relative'>
              <input
                className='border border-gray-400 focus:outline-none focus:border-2 focus:border-[#008fcd] rounded-md h-10 w-96 p-3 pr-10'
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
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              className='w-[17px] h-[17px] cursor-pointer'
            />
            <label htmlFor=''>Remember me</label>
          </div>
        </form>
        <Link
          to='/'
          className='bg-[#008fcd] text-white rounded-3xl p-2 px-5 w-full'
        >
          <h1 className='text-center'>SIGN IN</h1>
        </Link>
        <div>
          Already have an account?
          <Link to='/login' className='pl-1 text-[#008fcd] hover:underline'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SignIn
