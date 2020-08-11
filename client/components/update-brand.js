import React, {Component} from 'react'
import BrandForm from './brand-form'
import {fetchUpdateBrand} from '../store/brands'
import {connect} from 'react-redux'

class UpdateBrand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.brand.id,
      name: props.brand.name,
      imageURL: props.brand.imageURL,
      description: props.brand.description
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
    this.props.updateBrand(this.state)
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
      <BrandForm
        brand={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  updateBrand: brand => dispatch(fetchUpdateBrand(brand))
})

export default connect(null, mapDispatch)(UpdateBrand)
