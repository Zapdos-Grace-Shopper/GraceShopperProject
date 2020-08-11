import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBrand} from '../store/singleBrand'
import {Link} from 'react-router-dom'

class singleBrand extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getBrand(id)
  }
  render() {
    const {brand} = this.props
    const shoes = this.props.brand.shoes
    return (
      <div className="single-brand-outer-container">
        <div className="single-brand-top-box">
          <div id="single-brand-image">
            <h1>{brand.name}</h1>
            <img className="single-brandImg" src={brand.imageURL} />
          </div>
          <div className="brand-description">
            <h3>Brand description: </h3>
            <h5>{brand.description}</h5>
          </div>
        </div>

        <h2>Shoes by {brand.name}</h2>
        <div className="all-shoes-container">
          {/* <div className="box"> */}
          {shoes &&
            shoes.map(shoe => {
              return (
                <div className="shoe-box" key={shoe.id}>
                  <Link className="links" to={`/shoes/${shoe.id}`}>
                    <img src={shoe.imageURL} className="allShoesImage" />
                  </Link>
                  <div>
                    <Link className="links" to={`/shoes/${shoe.id}`}>
                      {shoe.name}
                    </Link>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    brand: state.brand
  }
}
const dispatchToProps = dispatch => {
  return {
    getBrand: id => dispatch(fetchSingleBrand(id))
  }
}

export default connect(stateToProps, dispatchToProps)(singleBrand)
