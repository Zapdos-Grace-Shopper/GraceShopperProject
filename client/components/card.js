import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

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
      <Button
        variant="outline-primary"
        className="btn"
        value={props.id}
        onClick={props.delete}
      >
        X
      </Button>
    </div>
  )
}

export default Card
