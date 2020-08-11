import React, {Component} from 'react'
import ShoeForm from './shoe-form'
import {fetchUpdateShoe} from '../store/shoes'
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
      inventory: props.shoe.inventory,
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
    console.log('event', event)
    this.props.updateShoe(this.state)
    this.setState({
      name: '',
      brand: '',
      imageURL: '',
      price: '',
      description: '',
      quantity: '',
      size: ''
    })
  }

  render() {
    return (
      <ShoeForm
        shoe={this.state}
        brands={this.props.brands}
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
