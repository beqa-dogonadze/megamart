import { Routes } from 'react-router-dom'
import Navigation from './components/nav/Navigation'
import Slider from './components/slider/Slider'
import SmartphoneRow from './components/smartphone-category/SmartphoneRow'

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
      </div>
    </>
  )
}
export default App
