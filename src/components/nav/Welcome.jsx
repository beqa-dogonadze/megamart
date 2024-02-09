import { BiSolidOffer } from 'react-icons/bi'
import { FaTruck } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import CountdownTimer from './CountdownTimer'

const Welcome = ({ id }) => {
  return (
    <section className='text-[#9f9e9f] p-3 hidden lg:block'>
      <div className='m-auto items-center flex flex-col px-6 md:flex-row gap-2 justify-between'>
        <h1>
          Welcome to worldwide
          <span className='text-[#2ea2d4] pl-1 font-bold'>Megamart!</span>
        </h1>
        <div>
          <CountdownTimer />
        </div>
        <div className='flex h-[40px] justify-between'>
          <div className='flex w-full gap-2 border-r items-center px-4 border-gray-300'>
            <IoLocationSharp className='text-[#2ea2d4] text-3xl' />
            <h1 className='w-full'>
              Deliver <span>{id}</span>
            </h1>
          </div>
          <div className='flex w-full gap-2 border-r items-center px-4 border-gray-300'>
            <FaTruck className='text-[#2ea2d4] text-xl' />
            <h1 className='w-max'>Orders</h1>
          </div>
          <div className='flex w-full gap-2 items-center px-4'>
            <BiSolidOffer className='text-[#2ea2d4] text-3xl' />
            <h1 className='w-full'>Offers</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Welcome
