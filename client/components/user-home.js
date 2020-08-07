import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Orders from './orders'
import AdminDashboard from './admin-dashboard'
/**
 * COMPONENT
 */
const UserHome = props => {
  return (
    <div>
      <h3>
        {props.authUser.firstname} {props.authUser.lastname}
      </h3>
      <p>{props.authUser.email}</p>
      <p>{props.authUser.access === 'user' ? 'Shoe Lover' : 'Administrator'}</p>
      <Orders id={props.authUser.id} access={props.authUser.access} />
      {props.authUser.access === 'admin' && <AdminDashboard />}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    authUser: state.auth
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
