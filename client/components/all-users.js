import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers, deleteUserThunk} from '../store/user'
import Card from './card'

class AllUsers extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.props.getUsers()
  }
  handleDelete(evt) {
    this.props.deleteUser(evt.target.value)
  }
  render() {
    console.log(this.props.users)
    return (
      <div className="view-all-page">
        {this.props.users.map(user => (
          <Card
            key={user.id}
            id={user.id}
            imageURL={user.imageURL}
            head={`${user.firstname} ${user.lastname}`}
            link={`/users/${user.id}`}
            sub={user.access}
            delete={this.handleDelete}
          />
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  users: state.user.users
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchAllUsers()),
  deleteUser: userId => dispatch(deleteUserThunk(userId))
})

export default connect(mapState, mapDispatch)(AllUsers)
