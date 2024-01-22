const SmartphonePhones = ({ img, name, price, save, off }) => {
  return (
    <div className='rounded-2xl w-[330px] border border-gray-200'>
      <div className='rounded-t-2xl px-10 py-5 flex justify-between items-start relative'>
        <img src={img} alt={name} width={200} />
        <div className='bg-[#008ecc] w-max h-max rounded-tr-2xl p-2 rounded-bl-2xl absolute top-0 right-0'>
          <h1 className='text-white w-[45px]'>{off}% OFF</h1>
        </div>
      </div>
      <div className='rounded-b-0 p-3'>
        <h1>{name}</h1>
        <h1>${price}</h1>
        <h1 className='border-t border-gray-200 text-[#38a551]'>
          save - ${save}
        </h1>
      </div>
    </div>
  )
}

export default SmartphonePhones
