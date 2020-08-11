import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import {logout} from '../store'
// import {getBrandsThunk} from '../store/brands'

const ZapdosNavbar = ({handleClick, isLoggedIn}) => {
  return (
    <Navbar bg="light" className="nav">
      <Navbar.Brand href="/" className="zapdos-nav">
        ZAPDOS
      </Navbar.Brand>
      {isLoggedIn ? (
        <Nav>
          {/* The navbar will show these links after you log in */}
          <Nav.Link href="/shoes" className="nav-link">
            Our Shoes
          </Nav.Link>
          <Nav.Link href="/brands" className="nav-link">
            Our Brands
          </Nav.Link>
          {/* <NavDropdown title="Brands Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/brands">All Brands</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/me" className="nav-link">
            Profile
          </Nav.Link>
          <Nav.Link href="/cart">My Cart</Nav.Link>
          <Nav.Link href="/" onClick={handleClick}>
            Logout
          </Nav.Link>
        </Nav>
      ) : (
        <Nav>
          {/* The navbar will show these links before you log in */}
          <Nav.Link href="/shoes" className="nav-link">
            Our Shoes
          </Nav.Link>
          <Nav.Link href="/brands" className="nav-link">
            Our Brands
          </Nav.Link>
          <Nav.Link href="/login" className="nav-link">
            Login
          </Nav.Link>
          <Nav.Link href="/signup" className="nav-link">
            Sign Up
          </Nav.Link>
        </Nav>
      )}
    </Navbar>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
    // brands: state.brands,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
    // getBrands() {
    //   dispatch(getBrandsThunk())
    // },
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
