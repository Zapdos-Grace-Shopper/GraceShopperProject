import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchShoes} from '../store/shoes'
import {postUserCart} from '../store/orders'
import {Button} from 'react-bootstrap'

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
    setTimeout(() => {
      this.props.history.push('/cart')
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>Shoes</h1>
        <div id="all-shoes-container">
          <ul>
            {this.props.shoes &&
              this.props.shoes.map(shoe => (
                <div key={shoe.id}>
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
                      {/* <Link to="/cart">Add to Cart</Link> */}
                    </Button>
                  </div>
                </div>
              ))}
          </ul>
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
