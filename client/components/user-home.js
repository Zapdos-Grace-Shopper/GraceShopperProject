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
    <div className="profile-container">
      <div className="profile-container-top">
        <div className="profile-left">
          <h1>
            {props.authUser.firstname} {props.authUser.lastname}
          </h1>
          <p>{props.authUser.email}</p>
          <p>
            {props.authUser.access === 'user' ? 'Shoe Lover' : 'Administrator'}
          </p>
          <img src={props.authUser.imageURL} />
        </div>
        <div className="profile-right">
          <Orders id={props.authUser.id} access={props.authUser.access} />
        </div>
      </div>
      <div className="profile-container-bottom">
        {props.authUser.access === 'admin' && <AdminDashboard />}
      </div>
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
