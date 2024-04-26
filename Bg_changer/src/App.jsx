import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
   <div className = ' max-w-full h-screen duration-200'
    style ={{backgroundColor:color}} >

      <div className=' flex flex-wrap justify-center 
      fixed bottom-12  inset-x-0 px-2 '>

        <div className=' flex flex-wrap 
         justify-center bg-white shadow-xl px-3 py-2
         rounded-xl gap-3 '>
            
            <button onClick={() =>{setColor("red")}}
            className=' outline-none px-4 py-1
             bg-red-600 shadow-lg rounded-full text-white'
             >red</button>


             <button onClick={() =>{setColor("green")}}
             className=' outline-none px-4 py-1
               bg-green-600 shadow-lg rounded-full text-white'
              >green</button>

              <button onClick={() =>{setColor("cyan")}}
              className=' outline-none px-4 py-1
               bg-cyan-700 shadow-lg rounded-full text-white'
               >cyan</button>

               <button onClick={() =>{setColor("indigo")}}
               className=' outline-none px-4 py-1
               bg-indigo-500 shadow-lg rounded-full text-white'
                >indigo</button>

                <button onClick={() =>{setColor("yellow")}}
                className=' outline-none px-4 py-1
                 bg-yellow-400 shadow-lg rounded-full text-white'
                 >yellow</button>
       </div>
      </div>
    </div>
  )
}

export default App
