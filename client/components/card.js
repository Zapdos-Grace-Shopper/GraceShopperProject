import React from 'react'
import {Button} from 'react-bootstrap'

const Card = props => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-image-div">
        <img src={props.imageURL} value={props.id} onClick={props.openModal} />
      </div>
      <div className="card-content-div">
        <div>
          <Button
            variant="outline-primary"
            className="btn"
            name={props.name}
            value={props.id}
            onClick={props.delete}
          >
            X
          </Button>
        </div>
        <h5>{props.head}</h5>
      </div>
    </div>
  )
}

export default Card
