import { Link } from 'react-router-dom'

const NavDropDown = () => {
  return (
    <>
      <ul className='absolute -z-50 flex flex-col w-[250px] px-10 bg-[#f3fbfd] border border-gray-300 p-4 gap-4 rounded-t-none border-t-0 rounded-xl top-[31px]'>
        <Link
          className='text-[#52b2dc] font-bold hover:underline'
          to='/contact'
        >
          Contact
        </Link>
        <Link
          className='text-[#52b2dc] font-bold hover:underline'
          to='/services'
        >
          Our other services
        </Link>
        <Link
          className='text-[#52b2dc] font-bold hover:underline'
          to='/how-to-order'
        >
          How to order?
        </Link>
        <Link
          className='text-[#52b2dc] font-bold hover:underline'
          to='/privacy'
        >
          Privacy Policy
        </Link>
        <Link className='text-[#52b2dc] font-bold hover:underline' to='/faq'>
          FAQ
        </Link>
        <Link
          className='text-[#52b2dc] font-bold hover:underline'
          to='/about-us'
        >
          About Us
        </Link>
      </ul>
    </>
  )
}
export default NavDropDown
