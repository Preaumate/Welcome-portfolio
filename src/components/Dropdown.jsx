import { useState } from 'react'
import './Dropdown.css'

function Dropdown({ label, options, onSelect }) {
    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        setSelectedValue(value)
        if (onSelect) {
            onSelect(value)
        }
    }

    return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <select 
        className="dropdown-select" 
        value={selectedValue} 
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedValue && (
        <p className="selected-text">You selected: <strong>{selectedValue}</strong></p>
      )}
    </div>
    )
}   

export default Dropdown 