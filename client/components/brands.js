import React from 'react'
import {connect} from 'react-redux'
import {getBrandsThunk} from '../store/brands'
import {Link} from 'react-router-dom'

export class Brands extends React.Component {
  componentDidMount() {
    this.props.getBrands()
  }
  render() {
    const {brands} = this.props
    return (
      <div>
        <h1>All Brands</h1>
        <div className="box">
          {brands &&
            brands.map(brand => {
              return (
                <div key={brand.id} className="brand">
                  <img src={brand.imageURL} className="brandImg" />
                  <div>
                    <Link to={`/brands/${brand.id}`} className="links">
                      <h5>{brand.name}</h5>
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
    brands: state.brands
  }
}
const dispatchToProps = dispatch => {
  return {
    getBrands: () => dispatch(getBrandsThunk())
  }
}

export default connect(stateToProps, dispatchToProps)(Brands)
