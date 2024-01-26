import { useState } from 'react'
import NavigationItems from './NavigationItems'

const ItemsContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelect = (itemName) => {
    setSelectedItem(itemName)
  }

  return (
    <div className='border-y border-[#e9e9e9] py-4'>
      <div className='w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 m-auto'>
        <NavigationItems
          btnName='Groceries'
          link='/groceries'
          isSelected={selectedItem === 'Groceries'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Premium Fruits'
          link='/premium-fruits'
          isSelected={selectedItem === 'Premium Fruits'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Home & Kitchen'
          link='/home-kitchen'
          isSelected={selectedItem === 'Home & Kitchen'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Electronics'
          link='/electronics'
          isSelected={selectedItem === 'Electronics'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Beauty'
          link='/beauty'
          isSelected={selectedItem === 'Beauty'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Home Improvement'
          link='/home-improvment'
          isSelected={selectedItem === 'Home Improvement'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Toys, Sports & Luggage'
          link='/toys-sports'
          isSelected={selectedItem === 'Toys, Sports & Luggage'}
          onSelect={handleSelect}
        />
      </div>
    </div>
  )
}

export default ItemsContainer
