import { MdKeyboardArrowDown } from 'react-icons/md'

const NavigationItems = ({ btnName, isSelected, onSelect }) => {
  return (
    <button
      className={`flex gap-2 p-2 items-center rounded-2xl ${
        isSelected ? 'bg-[#52b2dc] text-white' : 'bg-[#f3fbfd] text-black'
      }`}
      onClick={() => onSelect(btnName)}
    >
      <h1>{btnName}</h1>
      <MdKeyboardArrowDown
        className={`text-2xl ${isSelected ? 'text-white' : 'text-[#52b2dc]'}`}
      />
    </button>
  )
}
export default NavigationItems
