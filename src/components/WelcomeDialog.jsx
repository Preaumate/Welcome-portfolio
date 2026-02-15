import { useState } from 'react'
import './welcomeDialog.css'
function WelcomeDialog() {
  const [isopen, setIsOpen] = useState(true)
  
  if (!isopen) return null

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Welcome!</h2>
        <p>Preaumate will soon open it's industrial doors to the world</p>
        <p>A new era, a new revolution, AI new E-Automation!</p>
        <p>Thanks for visiting!</p>
        <button onClick={() => setIsOpen(false)}>
          Discover!
        </button>
      </div>
    </div>
  )
}

export default WelcomeDialog