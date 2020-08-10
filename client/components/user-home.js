import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Orders from './orders'
import AdminDashboard from './admin-dashboard'
import UserForm from './user-form'
import {Button} from 'react-bootstrap'
import {updateUserThunk} from '../store/auth'
/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.authUser.id,
      firstname: props.authUser.firstname,
      lastname: props.authUser.lastname,
      email: props.authUser.email,
      shoeSize: props.authUser.shoeSize,
      viewForm: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggle() {
    let view = this.state.viewForm
    this.setState({
      viewForm: !view
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateUser({
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      shoeSize: this.state.shoeSize
    })
  }

  render() {
    const user = this.props.authUser
    return (
      <div className="profile-container">
        <div className="profile-container-top">
          <div className="profile-left">
            <h1>
              {user.firstname} {user.lastname}
            </h1>
            <p>{user.email}</p>
            <p>{user.access === 'user' ? 'Shoe Lover' : 'Administrator'}</p>
            <img src={user.imageURL} />
          </div>
          <div className="profile-right">
            <Button type="submit" onClick={this.toggle}>
              Update Profile Info
            </Button>
            <Orders id={user.id} access={user.access} />
          </div>
          <div className="form-container">
            {this.state.viewForm && (
              <UserForm
                user={user}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          </div>
        </div>
        <div className="profile-container-bottom">
          {user.access === 'admin' && <AdminDashboard />}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    authUser: state.auth
  }
}

const mapDispatch = dispatch => ({
  updateUser: user => dispatch(updateUserThunk(user))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
