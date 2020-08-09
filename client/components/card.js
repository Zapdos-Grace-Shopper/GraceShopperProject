import React from 'react'
import {Link} from 'react-router-dom'

const Card = props => {
  return (
    <div className="card">
      <div className="image-div">
        <Link to={props.link} className="links">
          <img src={props.imageURL} />
        </Link>
      </div>
      <Link to={props.link} className="links">
        <h5>{props.head}</h5>
      </Link>
      <p>{props.sub}</p>
    </div>
  )
}

export default Card
