import React from 'react'
import {connect} from 'react-redux'
import {fetchShoes} from '../store/shoes'

export class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllShoes()
  }
  render() {
    console.log(this.props.shoes.shoes)
    return (
      <div>
        <h1>Luxury Shoes</h1>
        <img
          className="homepage"
          src="https://boutiquestoredesign.com/wp-content/uploads/2018/10/luxury-ladies-shoe-shops-boutique-design-ideas-8.jpg"
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    shoes: state.shoes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllShoes: () => dispatch(fetchShoes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
