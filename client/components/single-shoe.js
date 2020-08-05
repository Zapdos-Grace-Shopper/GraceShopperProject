import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'

class SingleShoe extends React.Component {
  render() {
    const shoe = this.props.shoe
    return (
      <div className="singleShoe" key="shoe.id">
        <img className="shoeImage" src={shoe.imageURL} />
        <div>{shoe.name}</div>
        <div>{shoe.brand}</div>
        <div>{shoe.price}</div>
        <div>{shoe.size}</div>
        <div>{shoe.description}</div>
      </div>
    )
  }
}

const mapState = state => ({
  student: state.shoe
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo))
})

export default connect(mapState, mapDispatch)(SingleShoe)

// pair?
// add shoe to cart
// update shoe
