import CategoryHeader from '../CategoryHeader'
import DailyEssentialsItem from './DailyEssentialsItem'

const DailyEssentials = () => {
  return (
    <div>
      <CategoryHeader first='Daily' second='Essentials' />
      <div className='grid grid-cols-2 sm:grid-cols-3 w-full md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-5'>
        <DailyEssentialsItem
          img='https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango-500x500.jpeg'
          name='Mango'
        />
        <DailyEssentialsItem
          img='https://static.libertyprim.com/files/varietes/cerise-burlat-large.jpg?1569344439'
          name='Cherry'
        />
        <DailyEssentialsItem
          img='https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE='
          name='Orange'
        />
        <DailyEssentialsItem
          img='https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
          name='Banana'
        />
        <DailyEssentialsItem
          img='https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-strawberrie.jpg'
          name='Strawberrie'
        />
        <DailyEssentialsItem
          img='https://freshsensations.com.au/cdn/shop/products/VegetableBox2.png?v=1643769484'
          name='Vegetables'
        />
      </div>
    </div>
  )
}
export default DailyEssentials
