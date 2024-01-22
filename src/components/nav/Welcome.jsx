import { BiSolidOffer } from 'react-icons/bi'
import { FaTruck } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

const Welcome = ({ id }) => {
  return (
    <section className='p-3 bg-[#f4f5f4] text-[#9f9e9f]'>
      <div className='w-[80%] m-auto items-center flex justify-between'>
        <h1>Welcome to worldwide Megamart!</h1>
        <div className='flex h-[30px]'>
          <div className='flex gap-2 border-r items-center px-4 border-gray-300'>
            <IoLocationSharp className='text-[#69b8dd] text-xl' />
            <h1>
              Deliver to <span>{id}</span>
            </h1>
          </div>
          <div className='flex gap-2 border-r items-center px-4 border-gray-300'>
            <FaTruck className='text-[#69b8dd] text-xl' />
            <h1>Track your orders</h1>
          </div>
          <div className='flex gap-2 items-center px-4'>
            <BiSolidOffer className='text-[#69b8dd] text-xl' />
            <h1>All Offers</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Welcome
