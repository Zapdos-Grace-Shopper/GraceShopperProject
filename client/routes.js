import React, {Component} from 'react'
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
import AllUsers from './components/all-users'
import SingleUser from './components/single-user'
import Cart from './components/cart'
import Brands from './components/brands'
import singleBrand from './components/single-brand'
import Checkout from './components/checkout'
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
        <Route path="/signup" component={Signup} />
        <Route exact path="/shoes" component={AllShoes} />
        <Route path="/shoes/:id" component={SingleShoe} />
        <Route exact path="/brands" component={Brands} />
        <Route path="/brands/:id" component={singleBrand} />
        <Route path="/checkout" component={Checkout} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/me" component={UserHome} />
            <Route path="/orders" component={Orders} />
            <Route path="/cart" component={Cart} />
            {isAdmin && <Route exact path="/users" component={AllUsers} />}
            {isAdmin && <Route path="/users/:id" component={SingleUser} />}
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
