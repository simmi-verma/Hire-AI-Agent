import { useNavigate } from "react-router-dom"
import "./Card.css"

function Card({ image, title, description, link }) {
  const navigate = useNavigate()

  return (
    <div
      className="card"
      onClick={() => navigate(link)}
    >
      <img
        src={image}
        alt={title}
        className="card-image"
      />

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
