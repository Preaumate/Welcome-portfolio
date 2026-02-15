/* app.jsx */

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
import './App.css'
import WelcomeDialog from './components/WelcomeDialog'
import Button from './components/button'

function App() {
  return (
    <div className="app">
      <WelcomeDialog />
      
      <h1>Welcome to My Portfolio</h1>
      <p>This is where we'll build something amazing!</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Button text="Click Me!" onClick={() => alert('Primary clicked! 🎉')} variant="primary" />
        <Button text="Or Me!" onClick={() => alert('Secondary clicked! 👍')} variant="secondary" />
        <Button text="Success!" onClick={() => alert('Success clicked! ✨')} variant="success" />
      </div>
    </div>
  )
}

export default App