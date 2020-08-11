import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchShoes, fetchDeleteShoe} from '../store/shoes'
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
    toast.success('Added to your cart!', {autoClose: 3000})
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Shoes</h1>
        <div className="all-shoes-container">
          {this.props.shoes &&
            this.props.shoes.map(shoe => (
              <div key={shoe.id} className="shoe-box">
                <Link to={`/shoes/${shoe.id}`}>
                  <img src={`${shoe.imageURL}`} className="allShoesImage" />
                </Link>
                <h5 fontWeight="900">{shoe.brand.name}</h5>
                <Link to={`/shoes/${shoe.id}`} className="links">
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
                  {this.props.isAdmin && (
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="btn"
                      onClick={() => this.props.deleteShoe(shoe.id)}
                    >
                      Delete Shoe
                    </Button>
                  )}
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
    userId: state.auth.id,
    isAdmin: state.auth.access === 'admin'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllShoes: () => dispatch(fetchShoes()),
    addToCart: (shoeId, userId) => dispatch(postUserCart(shoeId, userId)),
    deleteShoe: shoeId => dispatch(fetchDeleteShoe(shoeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes)
