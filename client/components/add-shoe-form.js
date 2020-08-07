import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function AddShoeForm() {
  return (
    <Form className="form">
      <Form.Group>
        <Form.Label>Shoe Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe ImageURL: </Form.Label>
        <Form.Control type="text" placeholder="Add Image URL" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Size: </Form.Label>
        <Form.Control type="text" placeholder="Enter Shoe Size" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Price: </Form.Label>
        <Form.Control type="number" placeholder="Enter Shoe Price" min="0.00" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Quantity: </Form.Label>
        <Form.Control type="number" placeholder="Enter Shoe Quantity" min="0" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Description: </Form.Label>
        <Form.Control as="textarea" placeholder="Enter Shoe Description" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shoe Brand: </Form.Label>
        <Form.Control as="select">
          {['', 'Gucci', 'Prada', 'Chanel'].map(brand => {
            return <option key={brand}>{brand}</option>
          })}
        </Form.Control>
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Form>
  )
}
