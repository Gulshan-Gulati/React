import { useState } from 'react'
import reactLogo from './assets/rect.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    usernames:"Gulshan",
    age :21
  }
  let newArray = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4 '>Tailwind Test</h1>
    <Card username="chaiaurcode"/>
    <Card />
    </>
  )
}

export default App
