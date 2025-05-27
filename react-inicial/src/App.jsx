import { useState } from 'react'
import { NavBar } from './components/Navbar'
import { Section } from './components/Section'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>

      <Section></Section>

      <Footer></Footer>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<><div><h1>Login</h1></div></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
