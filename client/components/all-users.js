import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user'
import {Link} from 'react-router-dom'

class AllUsers extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <img src={user.imageURL} />
            <Link to={`/users/${user.id}`}>
              <p>
                {user.firstname} {user.lastname}
              </p>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  users: state.user.users
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapState, mapDispatch)(AllUsers)
