import React from 'react'
import {connect} from 'react-redux'
import {fetchShoes} from '../store/shoes'
import {Link} from 'react-router-dom'

export class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllShoes()
  }
  render() {
    const {shoes} = this.props
    const firstThree = shoes.slice(0, 4)
    return (
      <div>
        <h4 color="red">WE DEPLOYED</h4>
        <h4 className="promo">FREE SHIPPING WITH PROMO CODE "GRACESHOPPER"</h4>
        <div>
          <img
            className="mainPic"
            src="https://i.postimg.cc/DZrJJHFc/A0-C75-F53-3-BE1-4910-8-A02-4-C99414-BC74-C.jpg' border='0' alt='A0-C75-F53-3-BE1-4910-8-A02-4-C99414-BC74-C' border='0' alt='3-C344-AE1-2708-4-B8-D-8-AEE-D1905144-D950"
          />
        </div>
        <div className="box">
          {firstThree &&
            firstThree.map(shoe => {
              return (
                <div className="card" key={shoe.id}>
                  <div className="card-img">
                    <img src={shoe.imageURL} />
                  </div>
                  <div>
                    <Link to={`/shoes/${shoe.id}`}>{shoe.name}</Link>
                  </div>
                </div>
              )
            })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
