import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
// import {Login, Signup, UserHome} from './components'
import Orders from './components/orders'
import {me} from './store'
import AllShoes from './components/AllShoes'
import Homepage from './components/homepage'
import UserHome from './components/user-home'
import {Login, Signup} from './components/auth-form'
import SingleShoe from './components/single-shoe'
import Cart from './components/cart'
import Brands from './components/brands'
import singleBrand from './components/single-brand'
import Checkout from './components/checkout'
import CheckoutComplete from './components/checkout-complete'
import AdminDashboard from './components/admin-dashboard'
// import BrandForm from './components/brand-form'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/shoes" component={AllShoes} />
        <Route exact path="/shoes/:id" component={SingleShoe} />
        <Route exact path="/brands" component={Brands} />
        <Route exact path="/brands/:id" component={singleBrand} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/me" component={UserHome} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/checkout/complete"
              component={CheckoutComplete}
            />
            {isAdmin && (
              <Route exact path="/admin" component={AdminDashboard} />
            )}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.access === 'admin'
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
