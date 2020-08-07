import React, {Fragment} from 'react'
//import BillingForm from './checkout-billing-form'
import ShippingForm from './checkout-shipping-form'

export class Checkout extends React.Component {
  render() {
    return (
      <Fragment>
        <ShippingForm />
      </Fragment>
    )
  }
}

export default Checkout
