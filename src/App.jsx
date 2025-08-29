import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("Black")

  return (
<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
  <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
    <div className='flex flex-wrap justify-center bg-white px-3 py-4 rounded-3xl'>
      <button onClick={()=>setColor("red")} className='outline-none rounded-3xl px-4 py-1' style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>setColor("blue")} className='outline-none rounded-3xl px-4 py-1' style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=>setColor("green")} className='outline-none rounded-3xl px-4 py-1' style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=>setColor("yellow")} className='outline-none rounded-3xl px-4 py-1' style={{backgroundColor:"yellow"}}>Yellow</button></div>
  </div>
  </div>

  )
}

export default App
//note:The onclick function only takes functions not function calls meaning it doesnt need return values so directly using setcolor() wont work but using an arrow function ()=>setColor() works fine
//Also using style={{backgroundColor:color}} instead of className because tailwindcss has limited color options and using style allows any color to be used 