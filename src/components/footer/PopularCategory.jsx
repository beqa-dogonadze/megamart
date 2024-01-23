import { Link } from 'react-router-dom'

const PopularCategory = () => {
  return (
    <section className='text-white text-start items-start'>
      <h1 className='py-3 border-b-2 border-white'>Most Popular Categories</h1>
      <ul className='list-disc flex flex-col gap-3 mt-6'>
        <Link>Smartphones</Link>
        <Link>Watches</Link>
        <Link>Electronics</Link>
        <Link>Vegetables</Link>
        <Link>Shoes</Link>
        <lLinki>Beauty</lLinki>
        <Link>Kitchen</Link>
        <Link>Sport</Link>
      </ul>
    </section>
  )
}
export default PopularCategory
