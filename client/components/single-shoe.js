import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe} from '../store/singleShoe'
import {fetchDeleteShoe} from '../store/shoes'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UpdateShoe from './update-shoe'
import {postUserCart} from '../store/orders'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

class SingleShoe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.shoe.id,
      name: props.shoe.name,
      brand: props.shoe.brand,
      imageURL: props.shoe.imageURL,
      price: props.shoe.price,
      description: props.shoe.description,
      inventory: props.shoe.inventory,
      size: props.shoe.size,
      viewUpdate: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleAddCart = this.handleAddCart.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.handleDeleteShoe = this.handleDeleteShoe.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleShoe(id)
  }

  toggle() {
    let view = this.state.viewUpdate
    this.setState({
      viewUpdate: !view
    })
  }
  handleAddCart(event) {
    const shoeId = event.target.value
    this.props.addToCart(shoeId, this.props.userId)
    toast.success('Added to your cart!', {autoClose: 3000})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdateSubmit(event) {
    event.preventDefault()
    this.props.updateShoe(this.state)
  }

  handleDeleteShoe(shoeId) {
    this.props.deleteShoe(shoeId)
    this.props.history.push('/shoes')
  }

  render() {
    const {shoe} = this.props
    const brand = shoe.brand
    return (
      <div className="single-brand-top-box">
        <div>
          <img src={shoe.imageURL} className="singleShoeImg" />
        </div>
        <div className="single-shoe-info">
          <h2>{shoe.name}</h2>
          <h3>
            {brand && (
              <Link className="links" to={`/brands/${brand.id}`}>
                {brand.name}
              </Link>
            )}
          </h3>
          <p> </p>
          <div>${(shoe.price / 100).toFixed(2)}</div>
          <p> </p>
          <div>Size: {shoe.size}</div>
          <p> </p>
          <p>{shoe.description}</p>
          <div>
            <Button
              variant="outline-primary"
              type="submit"
              className="btn"
              value={shoe.id}
              onClick={this.handleAddCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  shoe: state.singleShoeReducer,
  isAdmin: state.auth.access === 'admin',
  userId: state.auth.id
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  addToCart: (shoeId, userId) => dispatch(postUserCart(shoeId, userId)),
  deleteShoe: shoeId => dispatch(fetchDeleteShoe(shoeId))
})

export default connect(mapState, mapDispatch)(SingleShoe)
