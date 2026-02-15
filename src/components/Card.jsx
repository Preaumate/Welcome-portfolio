/* card.jsx */

import './Card.css'

function Card({ title, description, image, imageAlt }) {
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card