import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchShoes} from '../store/shoes'

export class AllShoes extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  componentDidMount() {
    this.props.getAllShoes()
  }

  render() {
    const {shoes} = this.props
    return (
      <Fragment>
        <h1>Shoes</h1>
        <div id="all-shoes-container">
          <ul>
            {shoes &&
              shoes.map(shoe => {
                return (
                  <li key={shoe.id}>
                    <Link to={`/shoes/${shoe.id}`}>{shoe.name}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </Fragment>
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
