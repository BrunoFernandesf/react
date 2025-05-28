import './styles/reset.css'

import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Disciplinas from './pages/Disciplinas'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Disciplinas' element={<Disciplinas></Disciplinas>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
