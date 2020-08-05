import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Navbar, Nav} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import {logout} from '../store'

const ZapdosNavbar = ({handleClick, isLoggedIn}) => (
  <Navbar bg="light" className="nav">
    <Navbar.Brand href="/home" className="zapdos-nav">
      ZAPDOS
    </Navbar.Brand>
    {isLoggedIn ? (
      <Nav>
        {/* The navbar will show these links after you log in */}
        <Nav.Link to="/home" className="nav-link">
          Home
        </Nav.Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </Nav>
    ) : (
      <Nav>
        {/* The navbar will show these links before you log in */}
        <Nav.Link to="/login" className="nav-link">
          Login
        </Nav.Link>
        <Nav.Link to="/signup" className="nav-link">
          Sign Up
        </Nav.Link>
      </Nav>
    )}
  </Navbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(ZapdosNavbar)

/**
 * PROP TYPES
 */
ZapdosNavbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
