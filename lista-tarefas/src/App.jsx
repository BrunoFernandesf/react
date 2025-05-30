import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'
import JsxExamples from './components/JsxExamples'


function App() {

  return (
    <>
      <h1>Hello World React!</h1>
      <JsxExamples></JsxExamples>
    </>
  )
}

export default App
