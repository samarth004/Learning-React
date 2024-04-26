import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myInfo = {
  //   username:'samarth',
  //   age : 23
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2' >tailwindcss</h1>
          <Card name = "messi" /*info = {myInfo}*/ />
          <Card name = "ronaldo"/>

    </>
  )
}

export default App
