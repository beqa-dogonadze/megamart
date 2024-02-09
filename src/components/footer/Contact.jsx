import { FaViber } from 'react-icons/fa'
import { IoCallSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <section className='text-white flex flex-col gap-10' id='contact'>
      <h1 className='lg:text-6xl md:text-4xl sm:text-xl text-white font-bold'>
        MegaMart
      </h1>
      <div className='gap-4 flex flex-col'>
        <h1>Contact Us</h1>
        <div className='text-md md:text-xl lg:text-xl flex items-center gap-5'>
          <FaViber className='hidden md:block' />
          <div className='text-sm md:text-md'>
            <h1>Whats App</h1>
            <h1> +1 222 333 412</h1>
          </div>
        </div>
        <div className='text-xl flex items-center gap-5'>
          <IoCallSharp className='hidden md:block' />
          <div className='text-sm md:text-md'>
            <h1>Call Us</h1>
            <h1> +1 222 333 412</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
