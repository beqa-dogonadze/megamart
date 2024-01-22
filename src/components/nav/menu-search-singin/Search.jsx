import { RiSearchLine } from 'react-icons/ri'
import { TfiMenuAlt } from 'react-icons/tfi'

const Search = () => {
  return (
    <div>
      <form className='flex items-center p-4 w-[500px] bg-[#f3f9fb]'>
        <RiSearchLine className='mr-2 text-[#2ea2d4] text-xl' />
        <input
          className='flex-grow bg-[#f3f9fb]'
          placeholder='Search essentials, groceries and more...'
          type='text'
          name='search'
          id='search'
        />
        <TfiMenuAlt className='ml-2 text-[#2ea2d4] text-xl' />
      </form>
    </div>
  )
}

export default Search
