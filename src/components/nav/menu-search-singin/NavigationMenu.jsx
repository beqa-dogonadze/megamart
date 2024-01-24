import { TbMenuDeep } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NavigationLinks = () => {
  return (
    <div className='flex gap-3 items-center'>
      <TbMenuDeep className='scale-x-[-1]  bg-[#f3f9fb] text-7xl rounded-xl text-[#2ea2d4] ' />
      <Link to='/' className='text-[#2ea2d4] text-4xl font-bold'>
        MegaMart
      </Link>
    </div>
  )
}
export default NavigationLinks
