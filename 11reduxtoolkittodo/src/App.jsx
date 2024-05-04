import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo } from './Components/AddTodo'

import { TodoLists } from './Components/TodoLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>chai with redux tool kit</h1>
      <AddTodo/>
      <TodoLists/>
    </>
  )
}

export default App
