import React, {Component} from 'react'
import UserForm from './user-form'
import {updateUserThunk} from '../store/user'
import {connect} from 'react-redux'

class UpdateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.user.id,
      firstname: props.user.firstname,
      lastname: props.user.lastname,
      email: props.user.email,
      shoeSize: props.user.shoeSize
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateUser(this.state)
    this.setState({
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      shoeSize: ''
    })
  }
  render() {
    return (
      <UserForm
        user={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  updateUser: user => dispatch(updateUserThunk(user))
})

export default connect(null, mapDispatch)(UpdateUser)
