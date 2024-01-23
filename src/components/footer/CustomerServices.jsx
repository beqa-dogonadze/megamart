import { Link } from "react-router-dom"

const CustomerServices = () => {
  return (
    <section className='text-white'>
      <h1 className='py-3 border-b-2 border-white'>Customer Services</h1>
      <ul className='list-disc flex flex-col gap-3 mt-6'>
        <Link>About Us</Link>
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
        <Link>E-waste Policy</Link>
        <Link>Cancellation & Return Policy</Link>
        <Link>FAQ</Link>
      </ul>
    </section>
  )
}
export default CustomerServices
