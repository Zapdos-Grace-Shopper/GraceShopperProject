import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function UserForm(props) {
  console.log(props)
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="firstname">First Name</Form.Label>
        <Form.Control
          size="sm"
          name="firstname"
          type="text"
          placeholder="Enter First Name"
          defaultValue={props.user.firstname}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="lastname">Last Name</Form.Label>
        <Form.Control
          size="sm"
          name="lastname"
          type="text"
          placeholder="Enter Last Name"
          defaultValue={props.user.lastname}
          onChange={props.handleChange}
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label htmlFor="shoeSize">Shoe Size</Form.Label>
        <Form.Control
          size="sm"
          name="shoeSize"
          type="text"
          placeholder="Enter Shoe Size"
          defaultValue={props.user.shoeSize}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          size="sm"
          name="email"
          type="email"
          placeholder="Enter Email"
          defaultValue={props.user.email}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
