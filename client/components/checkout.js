import React, {Fragment} from 'react'
import BillingForm from './checkout-billing-form'
import {Button} from 'react-bootstrap'
import {completeCheckoutThunk} from '../store'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

class Checkout extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Fragment>
          <BillingForm />
        </Fragment>
        <Button onClick={() => this.props.submitCheckout(this.props.userId)}>
          <Link to="/checkout/complete">Submit</Link>
        </Button>
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
