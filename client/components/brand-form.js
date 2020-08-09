import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function BrandForm() {
  return (
    <Form className="form">
      <Form.Group>
        <Form.Label>Brand Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter Brand Name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand Image: </Form.Label>
        <Form.Control type="text" placeholder="Add Brand ImageURL" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand Description: </Form.Label>
        <Form.Control as="textarea" placeholder="Enter Brand Description" />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Form>
  )
}
