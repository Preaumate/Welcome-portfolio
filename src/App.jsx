/* jsx */

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
import './App.css'
import WelcomeDialog from './components/WelcomeDialog'

function App() {
  return (
    <div className="App">
      <WelcomeDialog />
      
      <h1>Hola Mundo!</h1>
      <p>Este es un ejemplo de aplicación React!</p>
    </div>
  )
}

export default App