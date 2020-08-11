import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers, deleteUserThunk} from '../store/user'
import Card from './card'
import {Modal} from 'react-bootstrap'
import UserForm from './user-form'

class AllUsers extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   showModal: false,
    //   modalUser: {}
    // }
    this.handleDelete = this.handleDelete.bind(this)
    // this.openModal = this.openModal.bind(this)
    // this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
    this.props.getUsers()
  }

  // openModal(evt) {
  //   let idx = evt.target.value
  //   console.log(idx)
  //   this.setState({
  //     modalUser: this.props.users[idx],
  //     showModal: true
  //   })
  // }

  // closeModal() {
  //   this.setState({
  //     showModal: false
  //   })
  // }

  handleDelete(evt) {
    console.log('I hit handle delete')
    this.props.deleteUser(evt.target.value)
  }

  render() {
    const users = this.props.users
    return (
      <Fragment>
        <div className="view-all-page">
          {users.map(user => (
            <Card
              key={user.id}
              id={user.id}
              imageURL={user.imageURL}
              head={`${user.firstname} ${user.lastname}`}
              link={`/users/${user.id}`}
              sub={user.access}
              delete={this.handleDelete}
              // openModal={this.openModal}
            />
          ))}
        </div>
        {/* <Modal
          size="lg"
          show={this.state.showModal}
          onHide={this.closeModal}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Update User Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalUser && this.state.modalUser.firstname}
          </Modal.Body>
        </Modal> */}
      </Fragment>
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
