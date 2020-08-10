import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store/user'

class SingleUser extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleUser(id)
  }
  render() {
    const {user} = this.props
    return (
      <div>
        <img src={user.imageURL} />
        <div>
          name: {user.firstname} {user.lastname}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user.selectedUser
})

const mapDispatch = dispatch => ({
  getSingleUser: id => dispatch(fetchSingleUser(id))
  // updateUser
})

export default connect(mapState, mapDispatch)(SingleUser)
