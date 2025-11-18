import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import { Home } from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'

const App = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/pricing' element={<Pricing/>}/>


        </Routes>
    </div>
  )
}

export default App