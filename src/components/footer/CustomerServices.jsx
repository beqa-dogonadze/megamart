import { Link } from 'react-router-dom'

const CustomerServices = () => {
  return (
    <section className='text-white'>
      <h1 className='py-3 border-b-2 border-white'>Customer Services</h1>
      <ul className='list-disc flex flex-col gap-3 mt-6'>
        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/terms-and-conditions'>Terms & Conditions</Link>
        </li>
        <li>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </li>
        <li>
          <Link to='/e-waste-policy'>E-waste Policy</Link>
        </li>
        <li>
          <Link to='/cancellation-and-return-policy'>
            Cancellation & Return Policy
          </Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
      </ul>
    </section>
  )
}

export default CustomerServices
