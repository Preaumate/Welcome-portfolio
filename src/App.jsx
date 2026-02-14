import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcoming the next step in Automation!
        New amazing technology is coming soon!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Button has been clicked: {count}
        </button>
        <button onClick={() => setCount((count) => count + 2)}>
          This is just another button you can click: ({count * 10}) 
          </button>
          <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Preaumate welcomes the world of industry 5.0. New and amazing tecnology is at the brink of introduction.
      </p>
      <p className='read-the-docs'>
        Are you ready for the experience?
      </p>
      <p> This will be the 2nd commit
      </p>
    </>
  )
}

export default App
