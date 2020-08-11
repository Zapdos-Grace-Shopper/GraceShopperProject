import React, {Fragment} from 'react'
import BillingForm from './checkout-billing-form'
import {Button} from 'react-bootstrap'
import {completeCheckoutThunk} from '../store/orders'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout-container">
        <div className="checkout-row">
          <BillingForm />
        </div>
        <div id="checkout-button">
          <Button
            type="submit"
            className="btn"
            variant="outline-primary"
            onClick={() => this.props.submitCheckout(this.props.userId)}
          >
            <Link className="links" to="/checkout/complete">
              Submit
            </Link>
          </Button>
        </div>
      </div>
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
