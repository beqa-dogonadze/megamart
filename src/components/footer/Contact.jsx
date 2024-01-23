import { FaViber } from 'react-icons/fa'
import { IoCallSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <section className='text-white flex flex-col gap-10'>
      <h1 className='text-6xl text-white font-bold'>MegaMart</h1>
      <div>
        <h1>Contact Us</h1>
        <div className='text-xl flex items-center gap-5'>
          <FaViber />
          <div>
            <h1>Whats App</h1>
            <h1> +1 222 333 412</h1>
          </div>
        </div>
        <div className='text-xl flex items-center gap-5'>
          <IoCallSharp />
          <div>
            <h1>Call Us</h1>
            <h1> +1 222 333 412</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
