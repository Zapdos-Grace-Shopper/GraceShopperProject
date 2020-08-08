import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchShoes} from '../store/shoes'

class AllShoes extends React.Component {
  componentDidMount() {
    this.props.getAllShoes()
  }

  render() {
    return (
      <div>
        <h1>Shoes</h1>
        <div id="all-shoes-container">
          <ul>
            {this.props.shoes &&
              this.props.shoes.map(shoe => (
                <div key={shoe.id}>
                  <img src={`${shoe.imageURL}`} className="allShoesImage" />
                  <Link to={`/shoes/${shoe.id}`}>
                    <p>{shoe.name}</p>
                  </Link>
                  <p>${(shoe.price / 100).toFixed(2)}</p>
                </div>
              ))}
          </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes)
