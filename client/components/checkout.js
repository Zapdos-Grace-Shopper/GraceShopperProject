import React, {Fragment} from 'react'
import BillingForm from './checkout-billing-form'

//get cart independently; what happens if people refresh? might be easier to also get the cart independently than to rely on clicks from the cart page

class Checkout extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <BillingForm />
      </Fragment>
      // <Fragment>
      //   <div className="checkout-form">
      //     Hello!
      //   </div>
      // </Fragment>
    )
  }
}

export default Checkout

//get cart (use the get cart thing thunk)
//have the user fill out the form
//once the user hits submit, we change the order status to complete (but really user/id/cart status)
