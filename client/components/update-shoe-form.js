import React from 'react'
import {Form, Button} from 'react-bootstrap'

const UpdateShoeForm = props => {
  return (
    <Form noValidate className="form" onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Label>Shoe Name: </Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter Shoe Name Update"
          onChange={props.handleChange}
          value={props.student.name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Brand: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Brand Update" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Image: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Image URL Update" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Price: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Price Update" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Size: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Size Update" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Description: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Description Update" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Quantity: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Quantity Update" />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Form>
  )
}

export default UpdateShoeForm
