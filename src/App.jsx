import { useState } from 'react'

import './App.css'
import Questions from './components/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Questions />  
    </>
  )
}

export default App
