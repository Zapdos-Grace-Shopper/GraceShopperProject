import React, {Component} from 'react'
import {connect} from 'react-redux'

// import AddBrandForm from './add-brand-form'
import ShoeForm from './shoe-form'
import {fetchAddShoe} from '../store/shoes'

class AddShoe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      brand: '',
      imageURL: '',
      price: '',
      description: '',
      quantity: '',
      size: ''
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
    this.props.fetchAddShoe(this.state)
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
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  fetchAddShoe: shoe => dispatch(fetchAddShoe(shoe))
})

export default connect(null, mapDispatch)(AddShoe)
