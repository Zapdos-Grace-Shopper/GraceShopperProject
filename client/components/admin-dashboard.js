import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {fetchAllUsers, deleteUserThunk} from '../store/user'
import {fetchShoes, fetchDeleteShoe} from '../store/shoes'
import {getOrdersThunk} from '../store/orders'
import AddBrand from './add-brand'
import AddShoe from './add-shoe'
import AllUsers from './all-users'
import Card from './card'

// import { fetchAllUsers } from '../store/user'
// import {getOrdersThunk} from '../store/orders'

class AdminDashboard extends Component {
  // const [showShoeForm, setShowShoeForm] = useState(false)
  // const [showBrandForm, setShowBrandForm] = useState(false)
  // const [showAllUsers, setShowAllUsers] = useState(false)

  // const dispatch = useDispatch()
  // useEffect(() => {dispatch(fetchAllUsers())})
  // useEffect(() => {dispatch(getOrdersThunk())})

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.props.getUsers()
    this.props.getOrders()
    this.props.getShoes()
  }

  handleDelete(evt) {
    console.log('I hit handle delete')
    console.log('evt name', evt.target.name)
    console.log('evt value', evt.target.value)
    if (evt.target.name === 'user') {
      this.props.deleteUser(evt.target.value)
    }
    if (evt.target.name === 'shoe') {
      this.props.deleteShoe(evt.target.value)
    }
  }

  render() {
    const {authUser, users, orders, shoes} = this.props
    console.log('props', this.props)
    return (
      <div className="admin-dashboard">
        <h2>
          Admin Dashboard: {authUser.firstname} {authUser.lastname}
        </h2>
        <div id="admin-forms">
          <AddBrand />
          <AddShoe />
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
                link={`/users/${user.id}`}
                delete={this.handleDelete}
              />
            ))}
          </div>
          <div className="admin-columns">
            <h5>Shoes</h5>
            {shoes.map(shoe => (
              <Card
                key={shoe.id}
                id={shoe.id}
                name="shoe"
                imageURL={shoe.imageURL}
                head={shoe.name}
                link={`/shoes/${shoe.id}`}
                delete={this.handleDelete}
              />
            ))}
          </div>
        </div>
        {/* <div className="admin-dashboard-buttons">
          <Button
            variant="outline-primary"
            onClick={() => {
              setShowAllUsers(true)
              setShowBrandForm(false)
              setShowShoeForm(false)
            }}
          >
            ManageUsers
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              setShowBrandForm(true)
              setShowAllUsers(false)
              setShowShoeForm(false)
            }}
          >
            Add Brand
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              setShowShoeForm(true)
              setShowAllUsers(false)
              setShowBrandForm(false)
            }}
          >
            Add Shoe
          </Button>
        </div> */}
      </div>
    )
  }
}

const mapState = state => ({
  authUser: state.auth,
  users: state.user.users,
  orders: state.orders.orders,
  shoes: state.shoes
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchAllUsers()),
  getOrders: () => dispatch(getOrdersThunk()),
  getShoes: () => dispatch(fetchShoes()),
  deleteUser: userId => dispatch(deleteUserThunk(userId)),
  deleteShoe: shoeId => dispatch(fetchDeleteShoe(shoeId))
})

export default connect(mapState, mapDispatch)(AdminDashboard)
