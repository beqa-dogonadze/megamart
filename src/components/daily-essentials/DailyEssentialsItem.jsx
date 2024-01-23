const DailyEssentialsItem = ({ name, sale, img }) => {
  return (
    <div className='items-center flex flex-col border boreder-gray-400 rounded-xl'>
      <img src={img} alt={name} className='w-[120px] h-[120px]' />
      <h1 className='text-gray-400 p-1'>{name}</h1>
      <h1 className='text-xl font-bold p-2 border-t border-[#1e9ad1] w-[90%] text-center'>
        Up to 50% OFF
      </h1>
    </div>
  )
}
export default DailyEssentialsItem
