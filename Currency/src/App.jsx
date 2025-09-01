import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor]=useState('blue')
  return(
    <>
    <h1 className='bg-color'>Hello World</h1>
    <button onclick="()=>setColor(green)">Hello</button>
    </>
  )
}

export default App
