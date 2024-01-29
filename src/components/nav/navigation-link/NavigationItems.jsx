import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavigationItems = ({ btnName, isSelected, onSelect, link }) => {
  return (
    <Link
      to={link}
      className={`flex gap-2 p-2 items-center text-center justify-center rounded-2xl ${
        isSelected
          ? 'bg-[#52b2dc] text-white'
          : 'bg-[#f3fbfd] hover:border-[#52b2dc] border text-black'
      }`}
      onClick={() => onSelect(btnName)}
    >
      <h1 className='text-sm md:text-md'>{btnName}</h1>
      <MdKeyboardArrowDown
        className={`text-2xl ${
          isSelected ? 'text-white' : 'text-[#52b2dc]'
        } hidden lg:block`}
      />
    </Link>
  )
}
export default NavigationItems
