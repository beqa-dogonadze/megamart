import { BsCart2 } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SignInChart = () => {
  return (
    <div className='flex h-[30px] items-center justify-center'>
      <div className='flex items-center gap-2 px-2 border-r border-gray-300 w-max'>
        <Link
          to='/signin'
          className='font-bold text-gray-500 hover:text-[#2ea2d4] flex gap-2'
        >
          <FiUser className='text-[#2ea2d4] text-2xl ' />
          Sign In
        </Link>
      </div>
      <div className='flex items-center gap-2 px-2'>
        <Link
          to='/chart'
          className='font-bold text-gray-500 hover:text-[#2ea2d4] flex gap-2'
        >
          <BsCart2 className='text-[#2ea2d4] text-2xl ' />
          Cart
        </Link>
      </div>
    </div>
  )
}
export default SignInChart
