import { Routes } from 'react-router-dom'
import DailyEssentials from './components/daily-essentials/DailyEssentials'
import ElectronicsRow from './components/electronics-brand/ElectronicsRow'
import Footer from './components/footer/Footer'
import Navigation from './components/nav/Navigation'
import Slider from './components/slider/Slider'
import SmartphoneRow from './components/smartphone-category/SmartphoneRow'
import TopCategoriesRow from './components/top-categories/TopCategoriesRow'

const App = () => {
  return (
    <>
      <Navigation />
      <div className='w-[80%] m-auto'>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='projects' element={<Projects />} /> */}
          {/* <Route path='about' element={<About />} /> */}
        </Routes>
        <Slider />
        <SmartphoneRow />
        <TopCategoriesRow />
        <ElectronicsRow />
        <DailyEssentials />
      </div>
      <Footer />
    </>
  )
}
export default App
