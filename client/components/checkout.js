import React, {Fragment} from 'react'
import BillingForm from './checkout-billing-form'
import {Button} from 'react-bootstrap'
import {completeCheckoutThunk} from '../store/orders'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Checkout extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="checkout-row">
          <BillingForm />
        </div>
        <div id="checkout-button">
          <Button
            variant="outline-primary"
            onClick={() => this.props.submitCheckout(this.props.userId)}
          >
            <Link to="/checkout/complete">Submit</Link>
          </Button>
        </div>
      </Fragment>
    )
  }
}

const mapState = state => ({
  userId: state.auth.id
})

const mapDispatch = dispatch => ({
  submitCheckout: userId => dispatch(completeCheckoutThunk(userId))
})

export default connect(mapState, mapDispatch)(Checkout)
