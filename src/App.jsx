/* app.jsx */


import './App.css'
import WelcomeDialog from './components/WelcomeDialog'
import Button from './components/button'
import Card from './components/Card'
import Dropdown from './components/Dropdown'
import CheckboxGroup from './components/CheckBoxGroup'

function App() {
  const handleSkillSelect = (skill) => {
    console.log('Selected skill:', skill)
    alert(`Great choice! ${skill} is awesome!`)
  }

  const skills = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'React', value: 'react' },
    { label: 'CSS', value: 'css' },
    { label: 'HTML', value: 'html' },
    { label: 'Node.js', value: 'nodejs' }
  ]

  const interests = [
    { label: '🎮 Gaming', value: 'gaming' },
    { label: '📚 Reading', value: 'reading' },
    { label: '🎵 Music', value: 'music' },
    { label: '🏃 Sports', value: 'sports' },
    { label: '🎨 Art', value: 'art' },
    { label: '🍳 Cooking', value: 'cooking' }
  ]

  return (
    <div className="app">
      <WelcomeDialog />
      
      <h1>Welcome to Preaumate</h1>
      <p>This is where we'll build something amazing!</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Button text="Click Me!" onClick={() => alert('Primary clicked! 🎉')} variant="primary" />
        <Button text="Or Me!" onClick={() => alert('Secondary clicked! 👍')} variant="secondary" />
        <Button text="Success!" onClick={() => alert('Success clicked! ✨')} variant="success" />
      </div>

      <h2 style={{ marginTop: '3rem' }}>About Preaumate</h2>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        <Card 
          title="Web Development"
          description="We're learning React and building awesome websites!"
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
          imageAlt="Computer coding"
        />
        
        <Card 
          title="Creative Design"
          description="We love creating beautiful and functional user interfaces."
          image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500"
          imageAlt="Design tools"
        />
        
        <Card 
          title="Problem Solving"
          description="Every bug fixed is a new lesson learned!"
          image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500"
          imageAlt="Puzzle pieces"
        />
      </div>        

      <h2 style={{ marginTop: '3rem' }}>Our Mission</h2>
        <Dropdown
          label="Select a mission statement:"
        options={skills}
        onSelect={handleSkillSelect}
        />
        
        <CheckboxGroup 
        title="My Interests & Hobbies"
        options={interests}
      />
    </div>
  )
}

export default App