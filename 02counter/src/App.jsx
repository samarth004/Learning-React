import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  //let counter = 15;
  
  let [count,setCount]=useState(15)

  const AddValue = () => {
      count = count + 1;
      setCount(count);
  }


  const RemoveValue = () => {
    if(count>0){
    count = count - 1;
    setCount(count);
    }else{
      return;
    }
   
}

  return (
      
    <>
        <h1>Counter</h1>
       <br/>
       <h2>counter value :{count}</h2>

        <button 
        onClick={AddValue}
        >AddValue</button>
         <br/>
       <br/>

       <button 
        onClick={RemoveValue}
       >RemoveValue</button>
    </>
  )
}

export default App
