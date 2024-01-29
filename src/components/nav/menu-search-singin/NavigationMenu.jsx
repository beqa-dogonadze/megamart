import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { TbMenuDeep } from 'react-icons/tb'

import { Link } from 'react-router-dom'
import NavDropDown from './NavDropDown'
const NavigationLinks = () => {
  const [isShown, setIsShown] = useState(false)
  const [active, setActive] = useState(true)

  const handleShow = () => {
    setActive((event) => !event)
    setIsShown((event) => !event)
  }
  return (
    <div className='flex gap-1 items-center'>
      {active ? (
        <button>
          <TbMenuDeep
            className={`bg-[#f3f9fb] text-7xl scale-x-[-1] rounded-xl text-[#2ea2d4]`}
            onClick={handleShow}
          />
        </button>
      ) : (
        <button>
          <IoClose
            className={`bg-[#f3f9fb] text-7xl scale-x-[-1] rounded-xl text-[#2ea2d4]`}
            onClick={handleShow}
          />
        </button>
      )}
      <Link
        to='/'
        className='text-[#2ea2d4] text-4xl font-bold hidden md:block'
      >
        MegaMart
      </Link>
      {isShown && <NavDropDown />}
    </div>
  )
}
export default NavigationLinks
