import { BsCart2 } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SignInChart = () => {
  return (
    <div className='flex h-[30px] items-center'>
      <div className='flex items-center gap-2 px-4 border-r border-gray-300 '>
        <FiUser className='text-[#2ea2d4] text-2xl' />
        <Link
          to='/signin'
          className='font-bold text-gray-500 hover:text-[#2ea2d4]'
        >
          Sign Up/Sign In
        </Link>
      </div>
      <div className='flex items-center gap-2 px-4'>
        <BsCart2 className='text-[#2ea2d4] text-2xl' />
        <Link
          to='/chart'
          className='font-bold text-gray-500 hover:text-[#2ea2d4]'
        >
          Cart
        </Link>
      </div>
    </div>
  )
}
export default SignInChart
