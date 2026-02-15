import { useState } from 'react'
import './CheckBoxGroup.css'

function CheckBoxGroup({ title, options }) {
    const [selectedItems, setSelectedItems] = useState([])

    const handleCheckboxChange = (value) => {
        if (selectedItems.includes(value)) {
            setSelectedItems(selectedItems.filter(item => item !== value))
        } else {
            setSelectedItems([...selectedItems, value])
        }
    }

    return (
        <div className="checkbox-group">
            {title && <h3>{title}</h3>} 
            <div className="checkbox-list">
                {options.map((option, index) => (
                    <label key={index} className="checkbox-item">
                        <input
                            type="checkbox"
                            value={option.value}
                            checked={selectedItems.includes(option.value)}
                            onChange={() => handleCheckboxChange(option.value)}
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
            {selectedItems.length > 0 && (
                <div className="selected-items">
                    <p>Selected: {selectedItems.join(', ')}</p>
                </div>
            )}
        </div>
    )
}   

export default CheckBoxGroup