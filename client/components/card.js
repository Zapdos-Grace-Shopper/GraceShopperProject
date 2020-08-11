import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import UpdateShoe from './update-shoe'

const Card = props => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="card">
      <div className="card-image-div">
        {props.name !== 'order' ? <img src={props.imageURL} /> : '?????'}
      </div>
      <div className="card-content-div">
        <h5>{props.head}</h5>
        {props.name !== 'order' && (
          <Button
            variant="outline-primary"
            className="btn"
            name={props.name}
            value={props.id}
            onClick={props.delete}
          >
            Delete
          </Button>
        )}
        {props.name !== 'order' &&
          props.shoe && (
            <Button
              variant="outline-primary"
              className="btn"
              name={props.name}
              value={props.id}
              onClick={() => setShowModal(true)}
            >
              Update
            </Button>
          )}
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Update Shoe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.shoe && <UpdateShoe shoe={props.shoe} brands={props.brands} />}
          {/* {props.user && <UpdateShoe shoe={props.shoe} brands={props.brands} />} */}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Card
