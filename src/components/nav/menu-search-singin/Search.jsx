import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const handleInputChange = () => {
    setIsInputFocused(true)
  }
  const handleInputBlur = () => {
    setIsInputFocused(false)
  }
  return (
    <form className='p-3 md:bg-[#f3fbfd] rounded-md'>
      <div className='flex lg:w-[320px] md:w-max  items-center justify-center md:justify-between'>
        {!isInputFocused && (
          <RiSearchLine className='mr-2 text-[#2ea2d4] md:text-2xl text-3xl' />
        )}
        <input
          className='flex-grow bg-[#f3f9fb] hidden md:block focus:outline-none'
          placeholder='Search electronics, groceries and more...'
          type='text'
          name='search'
          id='search'
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
    </form>
  )
}

export default Search
