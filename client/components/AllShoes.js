import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchShoes} from '../store/shoes'
import {postUserCart} from '../store/orders'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

class AllShoes extends React.Component {
  componentDidMount() {
    this.props.getAllShoes()
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
