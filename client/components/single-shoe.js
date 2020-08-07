import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import UpdateShoeForm from './update-shoe-form'

class SingleShoe extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      brand: '',
      imageURL: '',
      price: '',
      description: '',
      quantity: '',
      size: ''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleAddCart = this.handleAddCart.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleShoe(id)
  }

  handleChange(event) {
    // console.log('event', event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state)
  }

  // OK - perhaps we can add this functionality when we create the cart
  handleAddCart() {}

  // OK - update shoe form only accessible to admins - need to conditionally render if have admin access
  handleUpdateSubmit(event) {
    event.preventDefault()
    console.log('in submit')
    const id = this.props.match.params.id
    const updateInfo = this.state
    console.log('updateInfo', updateInfo)
    this.props.updateShoe(id, updateInfo)
    this.setState({
      name: '',
      brand: '',
      imageURL: '',
      price: '',
      description: '',
      quantity: '',
      size: ''
    })
  }

  render() {
    console.log(this.props)
    const {shoe} = this.props
    return (
      <div>
        <div>
          <img src={shoe.imageURL} />
          <div>name: {shoe.name}</div>
          <div>price: ${(shoe.price / 100).toFixed(2)}</div>
          <div>quantity: {shoe.quantity}</div>
          <div>size: {shoe.size}</div>
        </div>

        <div>
          <Button variant="outline-primary" type="submit" className="btn">
            Add to Cart
          </Button>
        </div>

        <div>
          <UpdateShoeForm
            handleChange={this.handleChange}
            onSubmit={this.handleUpdateSubmit}
            student={this.state}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  shoe: state.singleShoeReducer
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo))
})

export default connect(mapState, mapDispatch)(SingleShoe)
