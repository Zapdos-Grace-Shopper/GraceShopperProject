import React, {useState} from 'react'

const BillingForm = props => {
  //is the person checking out a user or no?
  //(this is in parent component) when user checks out, clear the cart. Redirect them to a different page

  const initialState = {
    billingName: '',
    cardNumber: '',
    validThru: '',
    CVV: 0,
    shippingName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: 0
  }
  const [formState, setState] = useState(initialState)

  //const required = (value) => (value? undefined: "Required")

  const handleChange = event => {
    setState({[event.target.name]: event.target.value})
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.history.push('/')
  }

  return (
    <div className="checkout-form-container">
      <form id="checkout-form" onSubmit={handleSubmit}>
        <div className="checkout-50">
          <fieldset id="billing-form">
            <h2>Billing</h2>
            <label>Billing Name: </label>
            <input
              id="billingName"
              name="billingName"
              type="text"
              onChange={handleChange}
            />
            <label>Card Number: </label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              onChange={handleChange}
            />
            <label>Valid Thru:</label>
            <input
              id="validThru"
              name="validThru"
              type="text"
              onChange={handleChange}
              placeholder="example: 04/25"
            />
            <label>CVV:</label>
            <input
              id="CVV"
              name="CVV"
              type="number"
              placeholder="3 numbers on the back of your card"
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className="checkout-50">
          <fieldset id="shipping-form">
            <h2>Shipping</h2>
            <label>Shipping Name:</label>
            <input
              id="shippingName"
              name="shippingName"
              type="text"
              onChange={handleChange}
            />
            <label>Address 1:</label>
            <input
              id="address1"
              name="address1"
              type="text"
              onChange={handleChange}
            />
            <label>Address 2 (Optional):</label>
            <input
              id="address2"
              name="address2"
              type="text"
              onChange={handleChange}
            />
            <label>City:</label>
            <input id="city" name="city" type="text" onChange={handleChange} />
            <label>State:</label>
            <input
              id="state"
              name="state"
              type="text"
              onChange={handleChange}
            />
            <label>Zip Code:</label>
            <input
              id="zipcode"
              name="zipcode"
              type="number"
              onChange={handleChange}
            />
          </fieldset>
        </div>
        {/* <Button>
          <Link to="/checkout/complete">Submit</Link>
        </Button> */}
      </form>
    </div>
  )
}

// const mapDispatchToProps = ()

export default BillingForm
