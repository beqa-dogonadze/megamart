const CategoryHeader = ({ first, second }) => {
  return (
    <div className='flex justify-between border-b border-gray-200'>
      <h1 className='py-3 border-b-4 text-xl md:4xl w-max border-[#008ecc]'>
        {first} <span className='text-[#008ecc]'>{second}</span>
      </h1>
    </div>
  )
}
export default CategoryHeader
