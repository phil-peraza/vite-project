import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
      <h1>Hello Vite!</h1>
      <p>This is your first Vite project</p>
    </div>
  );
}

export default App
