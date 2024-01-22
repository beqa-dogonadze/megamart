import { useState } from 'react'
import NavigationItems from './NavigationItems'

const ItemsContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelect = (itemName) => {
    setSelectedItem(itemName)
  }

  return (
    <div className='border-y border-[#e9e9e9] py-4'>
      <div className='w-[80%] flex justify-between m-auto'>
        <NavigationItems
          btnName='Groceries'
          isSelected={selectedItem === 'Groceries'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Premium Fruits'
          isSelected={selectedItem === 'Premium Fruits'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Home & Kitchen'
          isSelected={selectedItem === 'Home & Kitchen'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Electronics'
          isSelected={selectedItem === 'Electronics'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Beauty'
          isSelected={selectedItem === 'Beauty'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Home Improvement'
          isSelected={selectedItem === 'Home Improvement'}
          onSelect={handleSelect}
        />
        <NavigationItems
          btnName='Toys, Sports & Luggage'
          isSelected={selectedItem === 'Toys, Sports & Luggage'}
          onSelect={handleSelect}
        />
      </div>
    </div>
  )
}

export default ItemsContainer
