import { Link } from 'react-router-dom'

const PopularCategory = () => {
  return (
    <section className='text-white text-start hidden md:block lg:block items-start'>
      <h1 className='pb-3 border-b-2 border-white'>Most Popular Categories</h1>
      <ul className='list-disc flex text-sm md:text-sm lg:text-lg flex-col gap-3 mt-6'>
        <li>
          <Link to='/smartphones'>Smartphones</Link>
        </li>
        <li>
          <Link to='/watches'>Watches</Link>
        </li>
        <li>
          <Link to='/electronics'>Electronics</Link>
        </li>
        <li>
          <Link to='/vegetables'>Vegetables</Link>
        </li>
        <li>
          <Link to='/shoes'>Shoes</Link>
        </li>
        <li>
          <Link to='/beauty'>Beauty</Link>
        </li>
        <li>
          <Link to='/kitchen'>Kitchen</Link>
        </li>
        <li>
          <Link to='/sport'>Sport</Link>
        </li>
      </ul>
    </section>
  )
}

export default PopularCategory
