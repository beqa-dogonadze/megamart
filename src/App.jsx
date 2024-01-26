import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navigation from './components/nav/Navigation'
import Welcome from './components/nav/Welcome'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SmartphonePage from './pages/SmartphonePage'
import WatchesPage from './pages/WatchesPage'
const App = () => {
  const location = useLocation()
  const hideEl = location.pathname === '/signin'

  return (
    <>
      <Welcome />
      {!hideEl && <Navigation />}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/smartphones' element={<SmartphonePage />} />
          <Route path='/watches' element={<WatchesPage />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </div>
      {!hideEl && <Footer />}
    </>
  )
}

export default App
