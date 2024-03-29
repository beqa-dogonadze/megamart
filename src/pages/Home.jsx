import DailyEssentials from '../components/daily-essentials/DailyEssentials'
import ElectronicsRow from '../components/electronics-brand/ElectronicsRow'
import Slider from '../components/slider/Slider'
import SmartphoneRow from '../components/smartphone-category/SmartphoneRow'
import TopCategoriesRow from '../components/top-categories/TopCategoriesRow'

const Home = () => {
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] m-auto'>
      <Slider />
      <SmartphoneRow />
      <TopCategoriesRow />
      <ElectronicsRow />
      <DailyEssentials />
    </div>
  )
}
export default Home
