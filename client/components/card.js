import React from 'react'
import {Button} from 'react-bootstrap'

const Card = props => {
  console.log(props)
  return (
    <div className="card">
      <div className="image-div">
        <img src={props.imageURL} value={props.id} onClick={props.openModal} />
      </div>
      <h5>{props.head}</h5>
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
