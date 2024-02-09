import NavigationItems from './NavigationItems'

const ItemsContainer = () => {
  return (
    <div className='border-y border-[#e9e9e9] py-4'>
      <div className='w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 m-auto'>
        <NavigationItems btnName='Groceries' link='/groceries' />
        <NavigationItems btnName='Premium Fruits' link='/premium-fruits' />
        <NavigationItems btnName='Home & Kitchen' link='/home-kitchen' />
        <NavigationItems btnName='Electronics' link='/electronics' />
        <NavigationItems btnName='Beauty' link='/beauty' />
        <NavigationItems btnName='Home Improvement' link='/home-improvment' />
        <NavigationItems btnName='Toys, Sports & Luggage' link='/toys-sports' />
      </div>
    </div>
  )
}

export default ItemsContainer
