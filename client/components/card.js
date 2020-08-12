import React, {useState, Fragment} from 'react'
import {Button, Modal} from 'react-bootstrap'
import UpdateShoe from './update-shoe'
// import UpdateBrand from './update-brand'
import UpdateUser from './update-user'

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
        {(props.name === 'shoe' || props.name === 'user') && (
          <Fragment>
            <Button
              variant="outline-primary"
              className="btn"
              name={props.name}
              value={props.id}
              onClick={props.delete}
            >
              Delete
            </Button>
            <Button
              variant="outline-primary"
              className="btn"
              name={props.name}
              value={props.id}
              onClick={() => setShowModal(true)}
            >
              Update
            </Button>
          </Fragment>
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
          {props.user && <UpdateUser user={props.user} />}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Card
