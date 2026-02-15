/* button.jsx */

import './button.css'

function Button({ text, onClick, variant = 'primary'}) {
    return (
        <button className={`custom-button ${variant}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button