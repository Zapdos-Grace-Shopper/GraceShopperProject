import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'

// import AddBrandForm from './add-brand-form'
import ShoeForm from './shoe-form'
import {fetchAddShoe} from '../store/shoes'

class AdminDashboard extends Component {
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
    this.toggleView = this.toggleView.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toggleView(event) {
    if (event.target.value === 'brand') {
      this.setState({showBrandForm: true, showShoeForm: false})
    }
    if (event.target.value === 'shoe') {
      this.setState({showShoeForm: true, showBrandForm: false})
    }
  }

  handleChange(event) {
    console.log(event.target)
    console.log(this.state)
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
      <div id="admin-dashboard">
        <div id="user-profile" />
        <div id="analytics" />
        <div id="admin-dashboard-buttons">
          <Button type="submit" value="brand" onClick={this.toggleView}>
            Add Brand
          </Button>
          <Button type="submit" value="shoe" onClick={this.toggleView}>
            Add Shoe
          </Button>
        </div>
        <div id="forms">
          {/* {this.state.showBrandForm && <AddBrandForm />} */}
          <ShoeForm
            shoe={this.state}
            handleChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  fetchAddShoe: shoe => dispatch(fetchAddShoe(shoe))
})

export default connect(null, mapDispatch)(AdminDashboard)
