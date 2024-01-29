import { RiSearchLine } from 'react-icons/ri'

const Search = () => {
  return (
    <form className='p-3 w-[500px] bg-white md:bg-[#f3fbfd] rounded-md'>
      <div className='flex items-center justify-center md:justify-between'>
        <RiSearchLine className='mr-2 text-[#2ea2d4] md:text-2xl text-3xl' />
        <input
          className='flex-grow bg-[#f3f9fb] hidden md:block'
          placeholder='Search electronics, groceries and more...'
          type='text'
          name='search'
          id='search'
        />
      </div>
    </form>
  )
}

export default Search
