import React, {Component} from 'react'
import {connect} from 'react-redux'

import BrandForm from './brand-form'
import {addBrandThunk} from '../store/brands'

class AddBrand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      imageURL: '',
      description: ''
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
    this.props.addBrand(this.state)
    this.setState({
      name: '',
      imageURL: '',
      description: ''
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
  addBrand: brand => dispatch(addBrandThunk(brand))
})

export default connect(null, mapDispatch)(AddBrand)
