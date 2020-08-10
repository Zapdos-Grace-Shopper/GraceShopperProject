import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Form onSubmit={handleSubmit} name={name}>
        {displayName === 'Sign Up' && (
          <Fragment>
            <Form.Group>
              <Form.Label htmlFor="firstname">First Name</Form.Label>
              <Form.Control
                size="sm"
                name="firstname"
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="lastname">Last Name</Form.Label>
              <Form.Control
                size="sm"
                name="lastname"
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="shoeSize">Shoe Size</Form.Label>
              <Form.Control
                size="sm"
                name="shoeSize"
                type="text"
                placeholder="Enter Shoe Size"
              />
            </Form.Group>
          </Fragment>
        )}
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            size="sm"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            size="sm"
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          {displayName}
        </Button>
        {error && error.response && <div> {error.response.data} </div>}
      </Form>
      <Link to="/auth/google">
        <Button variant="outline-primary">{displayName} with Google</Button>
      </Link>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      if (formName === 'signup') {
        user.firstname = event.target.firstname.value
        user.lastname = event.target.lastname.value
        user.shoeSize = event.target.shoeSize.value
      }
      dispatch(auth(user, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
