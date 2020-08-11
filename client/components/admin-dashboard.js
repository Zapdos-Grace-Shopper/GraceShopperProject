import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {fetchAllUsers, deleteUserThunk} from '../store/user'
import {fetchShoes, fetchDeleteShoe} from '../store/shoes'
import {getOrdersThunk} from '../store/orders'
import {getBrandsThunk} from '../store/brands'
import AddBrand from './add-brand'
import AddShoe from './add-shoe'
import Card from './card'

class AdminDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brandView: false,
      shoeView: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }

  componentDidMount() {
    this.props.getUsers()
    this.props.getOrders()
    this.props.getShoes()
    this.props.getBrands()
  }

  toggleView(evt) {
    let form = evt.target.value
    let view
    if (form === 'shoe') {
      view = this.state.shoeView
      this.setState({
        brandView: false,
        shoeView: !view
      })
    }
    if (form === 'brand') {
      view = this.state.brandView
      this.setState({
        brandView: !view,
        shoeView: false
      })
    }
  }

  handleDelete(evt) {
    if (evt.target.name === 'user') {
      this.props.deleteUser(evt.target.value)
    }
    if (evt.target.name === 'shoe') {
      this.props.deleteShoe(evt.target.value)
    }
  }

  render() {
    const {authUser, users, brands, orders, shoes} = this.props
    console.log('props', this.props)
    return (
      <div className="admin-dashboard">
        <h2>
          Admin Dashboard: {authUser.firstname} {authUser.lastname}
        </h2>
        <div className="admin-dashboard-buttons">
          <Button
            variant="outline-primary"
            value="brand"
            onClick={this.toggleView}
          >
            Add Brand
          </Button>
          <Button
            variant="outline-primary"
            value="shoe"
            onClick={this.toggleView}
          >
            Add Shoe
          </Button>
        </div>
        <div id="admin-forms">
          {this.state.brandView && <AddBrand />}
          {this.state.shoeView && <AddShoe brands={brands} />}
        </div>
        <div className="admin-content">
          <div className="admin-columns">
            <h5>Users</h5>
            {users.map(user => (
              <Card
                key={user.id}
                id={user.id}
                name="user"
                imageURL={user.imageURL}
                head={`${user.firstname} ${user.lastname}`}
                sub={user.access}
                delete={this.handleDelete}
              />
            ))}
          </div>
          <div className="admin-columns">
            <h5>Shoes</h5>
            {shoes.map(shoe => (
              <Card
                shoe={shoe}
                brands={brands}
                key={shoe.id}
                id={shoe.id}
                name="shoe"
                imageURL={shoe.imageURL}
                head={shoe.name}
                sub={`${shoe.description.slice(0, 25)}...`}
                delete={this.handleDelete}
              />
            ))}
          </div>
          <div className="admin-columns">
            <h5>Brands</h5>
            {brands.map(brand => (
              <Card
                key={brand.id}
                id={brand.id}
                brand={brand}
                name="brand"
                imageURL={brand.imageURL}
                head={brand.name}
                sub={`${brand.description.slice(0, 25)}...`}
                delete={this.handleDelete}
              />
            ))}
          </div>
          <div className="admin-columns">
            <h5>Orders</h5>
            {orders.map(order => (
              <Card
                key={order.id}
                id={order.id}
                name="order"
                head={order.status}
                sub={order.userId}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  authUser: state.auth,
  users: state.user.users,
  orders: state.orders.orders,
  shoes: state.shoes,
  brands: state.brands
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchAllUsers()),
  getOrders: () => dispatch(getOrdersThunk()),
  getShoes: () => dispatch(fetchShoes()),
  getBrands: () => dispatch(getBrandsThunk()),
  deleteUser: userId => dispatch(deleteUserThunk(userId)),
  deleteShoe: shoeId => dispatch(fetchDeleteShoe(shoeId))
})

export default connect(mapState, mapDispatch)(AdminDashboard)
