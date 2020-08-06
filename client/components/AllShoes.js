import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchShoes} from '../store/shoes'
// import SingleShoe from './single-shoe'

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
    console.log('props', this.props)
    return (
      <Fragment>
        <h1>Shoes</h1>
        <div id="all-shoes-container">
          <ul>
            {shoes &&
              shoes.map(shoe => {
                return (
                  <li key={shoe.id}>
                    <p>{shoe.name}</p>
                    {/* <SingleShoe shoe={shoe} /> */}
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
