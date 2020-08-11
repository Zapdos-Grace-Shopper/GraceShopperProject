import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function BrandForm(props) {
  return (
    <Form onSubmit={props.handleSubmit} className="form">
      <Form.Group>
        <Form.Label>Brand Name: </Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter Brand Name"
          value={props.brand.name}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand Image: </Form.Label>
        <Form.Control
          type="text"
          name="imageURL"
          placeholder="Add Brand ImageURL"
          value={props.brand.imageURL}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand Description: </Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          placeholder="Enter Brand Description"
          value={props.brand.description}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Form>
  )
}
