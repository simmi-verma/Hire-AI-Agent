import { useNavigate } from "react-router-dom"
import details from "./Details"
import "./Card.css"

function Card() {
  const navigate = useNavigate()

  return (
    <>
    {
      details.map((details, index) => (
        <div key={index} className="card cursor-pointer p-4 border rounded-lg bg-slate-900 text-slate-200" onClick={() => navigate(details.link)}>
          <img src={details.image} alt={details.title} className="card-image" />
          <h3>{details.title}</h3>
          <p>{details.description}</p>
        </div>
      ))
    }
    
    </>
  )
}

export default Card
