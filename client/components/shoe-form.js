import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ShoeForm = props => {
  return (
    <Form className="form" onSubmit={props.onSubmit}>
      <Form.Group>
        <Form.Label>Shoe Name: </Form.Label>
        <Form.Control
          type="text"
          name="name"
          // placeholder="Enter Shoe Name Update"
          onChange={props.handleChange}
          value={props.shoe.name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Brand: </Form.Label>
        <Form.Control
          type="text"
          name="brand"
          // placeholder="Enter Shoe Brand Update"
          onChange={props.handleChange}
          value={props.shoe.brand}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Image: </Form.Label>
        <Form.Control
          type="text"
          name="imageURL"
          placeholder="Enter Shoe Image URL Update"
          onChange={props.handleChange}
          value={props.shoe.imageURL}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Price: </Form.Label>
        <Form.Control
          type="text"
          name="price"
          placeholder="Enter Shoe Price Update"
          onChange={props.handleChange}
          value={props.shoe.price}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Size: </Form.Label>
        <Form.Control
          type="text"
          name="size"
          placeholder="Enter Shoe Size Update"
          onChange={props.handleChange}
          value={props.shoe.size}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Description: </Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter Shoe Description Update"
          onChange={props.handleChange}
          value={props.shoe.description}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Quantity: </Form.Label>
        <Form.Control
          type="text"
          name="quantity"
          placeholder="Enter Shoe Quantity Update"
          onChange={props.handleChange}
          value={props.shoe.quantity}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Form>
  )
}

export default ShoeForm
