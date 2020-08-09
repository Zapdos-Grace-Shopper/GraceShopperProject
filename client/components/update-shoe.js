import React, {Component} from 'react'
import ShoeForm from './shoe-form'
import {fetchUpdateShoe} from '../store/singleShoe'
import {connect} from 'react-redux'

class UpdateShoe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.shoe.id,
      name: props.shoe.name,
      brand: props.brand,
      imageURL: props.shoe.imageURL,
      price: props.shoe.price,
      description: props.shoe.description,
      quantity: props.shoe.quantity,
      size: props.shoe.size
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateShoe(this.state)
  }

  render() {
    return (
      <ShoeForm
        shoe={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  updateShoe: shoe => dispatch(fetchUpdateShoe(shoe))
})

export default connect(null, mapDispatch)(UpdateShoe)
