const SmartphonePhones = ({ img, name, price, save, off }) => {
  return (
    <div className='rounded-2xl w-[140px] sm:w-[130px] md:w-[150px] lg:w-[170px] 2xl:w-[200px] border border-gray-200 hover:border-[#008ecc]'>
      <div className='rounded-t-2xl px-7 py-5 flex justify-between items-start relative'>
        <img src={img} alt={name} />
        <div className='bg-[#008ecc] w-max h-max rounded-tr-2xl p-1 rounded-bl-2xl absolute top-0 right-0'>
          <h1 className='text-white w-[40px]'>{off}%</h1>
        </div>
      </div>
      <div className='rounded-b-0 px-3'>
        <h1>{name}</h1>
        <h1 className='mb-2'>${price}</h1>
        <h1 className='border-t border-gray-200 text-[#38a551]'>
          save - ${save}
        </h1>
      </div>
    </div>
  )
}

export default SmartphonePhones
