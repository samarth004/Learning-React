import { useCallback, useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passRef = useRef( null)

  const PassGenerator = useCallback(() =>{

    let pass = ""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()"

    for (let i = 0; i <= length; i++) {
       let char = Math.floor(Math.random()*str.length+1)
       pass +=  str.charAt(char)
    }

    setPassword(pass)
      
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() =>{
    PassGenerator()
  },[length,charAllowed,numberAllowed,setPassword])

    const PasswordCopy = useCallback( () =>{

       passRef.current.select()
       window.navigator.clipboard.writeText(password)
    })

  return (
    <>
     <div className=' w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
          
          <h1 className=' text-white text-center'>
            Password Generator</h1>
      
        <div className=' flex shadow rounded-lg
        overflow-hidden mb-4'>
 
         <input 
         type="text"
         className="   outline-none w-full py-1 px-3"
         value={password}
         placeholder='password'
         ref = {passRef}
         
         readOnly/>

          <button 
           onClick={PasswordCopy}
         
           className=' hover:bg-black outline-none bg-blue-700 text-white
           px-3 py-0.5 shrink-0 '>
           copy</button>
          
        </div>
         
            <div className=' flex text-5m gap-x-2'>
               
            <div className=' flex items-center gap-x-1'>
               <input 
               type="range"
                min={6}
                max={100}
                value = {length}
                className=' cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}/>
              
                 <label>length:{length}</label>

                   <div className='flex items-center gap-x-1 ml-2'>
                    <input 
                    type="checkbox"
                     defaultChecked = {numberAllowed}
                      id='numberInput'
                       onChange={() => {
                        setNumberAllowed((prev) => !prev)
                       }}
                      />
                       <label htmlFor="numberInput">Numbers</label>
                   </div>
                      
                      <div className='flex items-center gap-x-1 ml-2'>
                      <input 
                      type="checkbox"
                       defaultChecked = {charAllowed}
                        id='char'
                         onChange={() => {
                          setCharAllowed((prev) => !prev)
                         }}
                        />
                         <label htmlFor="char">Special Char</label>
                        </div>
            </div>
              
            </div>
      
      </div>

      
    </>
  )
}

export default App
