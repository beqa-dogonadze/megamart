import { MdKeyboardArrowRight } from 'react-icons/md'

const CategoryHeader = () => {
  return (
    <div className='flex justify-between border-b border-gray-200'>
      <h1 className='py-3 border-b-4 text-2xl w-max border-[#008ecc]'>
        Grab the best on <span className='text-[#008ecc]'>Smartphones</span>
      </h1>
      <div className='flex items-center'>
        <h1>View All</h1>
        <MdKeyboardArrowRight className='text-[#008ecc] text-3xl' />
      </div>
    </div>
  )
}
export default CategoryHeader
