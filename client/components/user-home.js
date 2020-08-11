import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Orders from './orders'
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
    this.setState({
      viewForm: false
    })
  }

  render() {
    const user = this.props.authUser
    return (
      <Fragment>
        <div className="profile-container">
          <div className="profile-left">
            <h1>
              {user.firstname} {user.lastname}
            </h1>
            <p>
              <strong>Email: </strong>
              {user.email}
            </p>
            <p>
              <strong>Shoe Size: </strong>
              {user.shoeSize}
            </p>
            <div>
              <Button
                variant="outline-primary"
                className="btn"
                type="submit"
                onClick={this.toggle}
              >
                Update Profile Info
              </Button>
              {this.state.viewForm && (
                <UserForm
                  user={user}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              )}
            </div>
            <br />
            <img src={user.imageURL} />
          </div>
          <div className="profile-right">
            <Orders id={user.id} access={user.access} />
          </div>
        </div>
        <div className="profile-container-bottom">
          {props.authUser.access === 'admin' && <AdminDashboard />}
        </div>
      </Fragment>
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
