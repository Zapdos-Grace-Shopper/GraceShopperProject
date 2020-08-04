import React from 'react'
import {Form, Button} from 'react-bootstrap'

const AddShoeForm = () => {
  return (
    <Form>
      <Form.Group controlId="shoe-name">
        <Form.Label>Shoe Name: </Form.Label>
        <Form.Control type="input" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="shoe-image">
        <Form.Label>Shoe ImageURL: </Form.Label>
        <Form.Control type="input" placeholder="Add Image URL" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Size: </Form.Label>
        <Form.Control type="input" placeholder="Enter Shoe Size" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Description: </Form.Label>
        <Form.Control type="textarea" placeholder="Enter Shoe Description" />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddShoeForm
