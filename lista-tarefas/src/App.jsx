import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'
import JsxExamples from './components/JsxExamples'
import UseStateComponent from './components/UseStateComponent'


function App() {

  return (
    <>
      <h1>Hello World React!</h1>
      <UseStateComponent></UseStateComponent>
    </>
  )
}

export default App
