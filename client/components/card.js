import React from 'react'
import {Button} from 'react-bootstrap'
import UpdateShoe from './update-shoe'

const Card = props => {
  console.log(props)
  return (
    <div className="card">
      {props.name !== 'order' && (
        <Button
          variant="outline-primary"
          className="btn card-btn"
          name={props.name}
          value={props.id}
          onClick={props.delete}
        >
          X
        </Button>
      )}
      <div className="card-image-div">
        {props.name !== 'order' ? (
          <img
            src={props.imageURL}
            value={props.id}
            onClick={props.openModal}
          />
        ) : (
          '?????'
        )}
      </div>
      <div className="card-content-div">
        <h5>{props.head}</h5>
        {/* {props.shoe && <UpdateShoe shoe={props.shoe} brands={props.brands} />} */}
      </div>
    </div>
  )
}

export default Card
