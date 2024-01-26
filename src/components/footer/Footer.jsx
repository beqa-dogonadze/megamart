import Contact from './Contact'
import CustomerServices from './CustomerServices'
import PopularCategory from './PopularCategory'

const Footer = () => {
  return (
    <div className='bg-[#008fcd]'>
      <div className='flex mt-6 justify-between mb-0 gap-10  md:flex-row lg:flex-row p-6 md:p-12 lg:p-16 text-xl'>
        <Contact />
        <PopularCategory />
        <CustomerServices />
      </div>
      <h1 className='text-center border-t border-gray-300 py-5 mx-5 md:mx-16 text-xl text-white'>
        &#169;2022 All rights reserved. Raliance Retail Ltd.
      </h1>
    </div>
  )
}
export default Footer
