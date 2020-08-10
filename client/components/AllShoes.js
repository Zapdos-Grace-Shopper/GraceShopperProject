import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchShoes} from '../store/shoes'
import {postUserCart} from '../store/orders'
import {Button} from 'react-bootstrap'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

class AllShoes extends React.Component {
  constructor() {
    super()
    this.handleAddCart = this.handleAddCart.bind(this)
  }
  componentDidMount() {
    this.props.getAllShoes()
  }
  handleAddCart(shoeId) {
    this.props.addToCart(shoeId, this.props.userId)
    toast.success('Added to cart!', {autoClose: 3000})
  }

  render() {
    return (
      <div>
        <h1>Shoes</h1>
        <div className="all-shoes-container">
          {this.props.shoes &&
            this.props.shoes.map(shoe => (
              <div key={shoe.id} className="shoe-box">
                <img src={`${shoe.imageURL}`} className="allShoesImage" />
                <Link to={`/shoes/${shoe.id}`}>
                  <p>{shoe.name}</p>
                </Link>
                <p>${(shoe.price / 100).toFixed(2)}</p>
                <div>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    className="btn"
                    onClick={() => this.handleAddCart(shoe.id)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoes: state.shoes,
    userId: state.auth.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllShoes: () => dispatch(fetchShoes()),
    addToCart: (shoeId, userId) => dispatch(postUserCart(shoeId, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes)
