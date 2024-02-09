import { CgArrowsExchange } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const NavigationItems = ({ btnName, link }) => {
  return (
    <Link
      to={link}
      className='flex gap-2 p-2 items-center border border-[#52b2dc] focus:bg-[#52b2dc] focus:text-white text-center justify-center rounded-2xl'
    >
      <h1 className='text-sm md:text-md'>{btnName}</h1>
      <CgArrowsExchange className='text-2xl' />
    </Link>
  )
}
export default NavigationItems
