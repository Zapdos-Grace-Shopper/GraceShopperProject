import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user'
// import {Link} from 'react-router-dom'
import Card from './card'

class AllUsers extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    console.log(this.props.users)
    return (
      <div className="view-all-page">
        {this.props.users.map(user => (
          <Card
            key={user.id}
            imageURL={user.imageURL}
            head={`${user.firstname} ${user.lastname}`}
            link={`/users/${user.id}`}
            sub={user.access}
          />
          // <div key={user.id}>
          //   <img src={user.imageURL} />
          //   <Link to={`/users/${user.id}`}>
          //     <p>
          //       {user.firstname} {user.lastname}
          //     </p>
          //   </Link>
          // </div>
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
