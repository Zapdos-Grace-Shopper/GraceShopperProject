import React, {Fragment} from 'react'
import {Form, Col, Button} from 'react-bootstrap'

export default function ShippingForm() {
  return (
    <Fragment>
      <div id="billing-form">
        <Form>
          <h2>Billing</h2>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name on Your Credit Card"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex: 9999-9999-9999-9999"
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Col>
              <Form.Label>Valid Thru:</Form.Label>
              <Form.Control type="number" placeholder="ex: 04/22" required />
            </Form.Col>
            <Form.Col>
              <Form.Label>CVV:</Form.Label>
              <Form.Control type="number" placeholder="000" required />
            </Form.Col>
          </Form.Row>
        </Form>
      </div>
      <div id="shipping-form">
        <Form>
          <h2>Shipping</h2>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Who will be receiving our shoes?"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex: 419 Miranda Place"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address 2 (Optional)</Form.Label>
            <Form.Control type="text" placeholder="ex: Apt. 10" required />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex: San Francisco"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="ex: CA" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="number" placeholder="ex: 94117" required />
            </Form.Group>
          </Form.Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </Fragment>
  )
}
