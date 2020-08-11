import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ShoeForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Label>Shoe Name: </Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter Shoe Name"
          onChange={props.handleChange}
          value={props.shoe.name}
        />
      </Form.Group>
      {/* <Form.Group>
        <Form.Label>Shoe Brand: </Form.Label>
        <Form.Control
          type="text"
          name="brand"
          placeholder="Enter Shoe Brand"
          onChange={props.handleChange}
          value={props.shoe.brand}
        />
      </Form.Group> */}
      <Form.Group>
        <Form.Label>Shoe Image: </Form.Label>
        <Form.Control
          type="text"
          name="imageURL"
          placeholder="Enter Image URL"
          onChange={props.handleChange}
          value={props.shoe.imageURL}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Price: </Form.Label>
        <Form.Control
          type="text"
          name="price"
          placeholder="Enter Price"
          onChange={props.handleChange}
          value={props.shoe.price}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Size: </Form.Label>
        <Form.Control
          type="text"
          name="size"
          placeholder="Enter Shoe Size"
          onChange={props.handleChange}
          value={props.shoe.size}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Description: </Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter Shoe Description"
          onChange={props.handleChange}
          value={props.shoe.description}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Inventory: </Form.Label>
        <Form.Control
          type="text"
          name="quantity"
          placeholder="Enter Shoe Quantity"
          onChange={props.handleChange}
          value={props.shoe.inventory}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Form>
  )
}

export default ShoeForm
