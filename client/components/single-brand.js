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
      <div>
        <h1>{brand.name}</h1>
        <img src={brand.imageURL} />
        <h3>Brand description: </h3>
        <h5>{brand.description}</h5>
        <h1>Shoes by {brand.name}</h1>
        {shoes &&
          shoes.map(shoe => {
            return (
              <div className="brand" key={shoe.id}>
                <div>
                  <Link to={`/shoes/${shoe.id}`}>{shoe.name}</Link>
                </div>
                <div>
                  <img src={shoe.imageURL} />
                </div>
              </div>
            )
          })}
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
