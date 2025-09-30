import Land from './components/Land'
import { useState } from 'react'

function App() {
  // Keep state but prefix with _ to avoid TS6133 errors
  const [_count, _setCount] = useState(0)

  // Example: function to increment count (optional, you can use later)
  const increment = () => {
    _setCount(prev => prev + 1)
  }

  return (
    <div>
      <Land />
      {/* Optional: add button to test state */}
      {/* <button onClick={increment}>Increment</button> */}
      {/* <p>Count: {_count}</p> */}
    </div>
  )
}

export default App
