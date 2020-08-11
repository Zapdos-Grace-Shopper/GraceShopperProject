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
        <h1 className="page-title">Shop by Brand:</h1>
        <div className="single-brand-box">
          {brands &&
            brands.map(brand => {
              return (
                <div key={brand.id} className="all-brands-name">
                  <Link to={`/brands/${brand.id}`} className="links">
                    {/* <img src={brand.imageURL} className="brandImg" /> */}
                    <h2>{brand.name}</h2>
                  </Link>
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
