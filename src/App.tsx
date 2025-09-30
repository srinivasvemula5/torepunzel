import { useState } from 'react'
import Land from './components/Land'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Land />
  )
}

export default App
