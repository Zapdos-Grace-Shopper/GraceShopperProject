import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import UpdateShoe from './update-shoe'
import UpdateBrand from './update-brand'

const Card = props => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="admin-card">
      <div className="admin-card-image-div">
        {props.name !== 'order' ? (
          <img src={props.imageURL} />
        ) : (
          <img src="https://image.shutterstock.com/image-vector/shopping-cart-check-mark-icon-260nw-1412378519.jpg" />
        )}
      </div>
      <div className="admin-card-content-div">
        <h5>{props.head}</h5>
        <p>{props.sub}</p>
        {props.name !== 'order' &&
          props.name !== 'brand' && (
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
        {props.name !== 'order' && (
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
            Update {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.shoe && <UpdateShoe shoe={props.shoe} brands={props.brands} />}
          {props.brand && <UpdateBrand brand={props.brand} />}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Card
