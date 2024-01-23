const TopCategoriesItem = ({ img, name }) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='w-[140px] flex justify-center p-5 rounded-[50%] border border:gray-500 hover:border-[#1e9ad1]'>
        <img src={img} alt={name} className='w-[80px] h-[100px]' />
      </div>
      <h1>{name}</h1>
    </div>
  )
}
export default TopCategoriesItem
