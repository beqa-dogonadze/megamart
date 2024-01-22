import CategoryHeader from './CategoryHeader'
import SmartphonePhones from './SmartphonePhones'

const SmartphoneRow = () => {
  return (
    <div className='my-3'>
      <CategoryHeader />
      <div className='my-3 flex flex-wrap justify-center gap-4'>
        <SmartphonePhones
          img='https://i.ebayimg.com/thumbs/images/g/2hsAAOSwXdRkensK/s-l500.webp'
          name='Galaxy S22'
          price='1800'
          save='900'
          off='100'
        />
        <SmartphonePhones
          img='https://i.ebayimg.com/thumbs/images/g/h0oAAOSwEfxlqJsc/s-l300.webp'
          name='Iphone 14 Pro Max'
          price='1400'
          save='300'
        />
        <SmartphonePhones
          img='https://i.ebayimg.com/thumbs/images/g/NxQAAOSw6eBlIHtY/s-l300.webp'
          name='Galaxy S22 Ultra'
          price='1800'
          save='900'
        />
        <SmartphonePhones
          img='https://i.ebayimg.com/images/g/m6QAAOSwgRRjEhyQ/s-l1600.jpg'
          name='Iphone 12'
          price='1800'
          save='900'
        />
        <SmartphonePhones
          img='https://i.ebayimg.com/images/g/z3YAAOSwBkllkE0B/s-l1600.jpg'
          name='Iphone 11'
          price='1800'
          save='900'
        />
      </div>
    </div>
  )
}

export default SmartphoneRow
