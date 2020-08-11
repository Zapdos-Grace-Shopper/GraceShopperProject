import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import UpdateShoe from './update-shoe'
import {postUserCart} from '../store/orders'
import {Link} from 'react-router-dom'
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
      quantity: props.shoe.quantity,
      size: props.shoe.size,
      viewUpdate: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleAddCart = this.handleAddCart.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
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
  handleAddCart() {
    const shoeId = this.props.match.params.id
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
              onClick={this.handleAddCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* <div>
          {this.props.isAdmin && (
            <Button
              variant="outline-primary"
              type="submit"
              className="btn"
              onClick={() => this.handleDeleteShoe(shoe.id)}
            >
              Delete Shoe
            </Button>
          )}
          {this.props.isAdmin && (
            <Button
              variant="outline-primary"
              className="btn"
              type="submit"
              onClick={() => this.toggle()}
            >
              Update Shoe
            </Button>
          )}
          {this.props.isAdmin && this.state.viewUpdate && (
            <UpdateShoe
              shoe={shoe}
              brand={brand.name}
              handleChange={this.handleChange}
              handleSubmit={this.handleUpdateSubmit}
            />
          )}
        </div> */}
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
  addToCart: (shoeId, userId) => dispatch(postUserCart(shoeId, userId))
})

export default connect(mapState, mapDispatch)(SingleShoe)
