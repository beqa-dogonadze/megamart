import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Beauty from '../src/pages/beauty/Beauty'
import Electronics from '../src/pages/electronics/Electronics'
import Griceries from '../src/pages/groceries/Groceries'
import HomeImprovment from '../src/pages/home-improvment/HomeImprovment'
import HomeAndKitchen from '../src/pages/home-kitchen/HomeAndKitchen'
import PremiumFruits from '../src/pages/premium-fruits/PremiumFruits'
import ToysAndSport from '../src/pages/toys-sport/ToysAndSport'
import Footer from './components/footer/Footer'
import Navigation from './components/nav/Navigation'
import Welcome from './components/nav/Welcome'
import NavigationItemsCategory from './components/nav/navigation-link/NavigationItemsCategory'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SmartphonePage from './pages/SmartphonePage'
import WatchesPage from './pages/WatchesPage'
const App = () => {
  const location = useLocation()
  const hideEl = location.pathname === '/signin'

  return (
    <div>
      {!hideEl && <Welcome />}
      {!hideEl && <Navigation />}
      {!hideEl && <NavigationItemsCategory />}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/smartphones' element={<SmartphonePage />} />
          <Route path='/watches' element={<WatchesPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/groceries' element={<Griceries />} />
          <Route path='/premium-fruits' element={<PremiumFruits />} />
          <Route path='/home-kitchen' element={<HomeAndKitchen />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/beauty' element={<Beauty />} />
          <Route path='/home-improvment' element={<HomeImprovment />} />
          <Route path='/toys-sports' element={<ToysAndSport />} />
        </Routes>
      </div>
      {!hideEl && <Footer />}
    </div>
  )
}

export default App
