import React from 'react'
import {connect} from 'react-redux'
import {fetchShoes} from '../store/shoes'
import SingleShoe from './single-shoe'

class AllShoes extends React.Component {
  componentDidMount() {
    try {
      this.props.getAllShoes()
    } catch (error) {
      console.log("We can't load all shoes!", error)
    }
  }

  render() {
    const {shoes} = this.props
    return (
      <div id="all-shoes-container">
        {shoes &&
          shoes.map(shoe => (
            <li key={shoe.id}>
              <p>{shoe.name}</p>
              <SingleShoe shoe={shoe} />
            </li>
          ))}
      </div>
    )
  }
}

//maybe shouldn't use functional b/c need data from the redux store and therefore need the state
// export const AllShoes = () => {
//   const [shoes, setShoes] = useState([]);

//   useEffect(() => {
//     const getAllShoes = async () => {
//       try {
//         const res = await getAllShoes();
//         setShoes(res.data)
//       } catch(error){
//         console.log("Can't get these shoes!", error)
//       }
//     }
//   getAllShoes();
//   }, [])

//     return (
//       <div id="all-shoes-container">
//         <ul>
//           {shoes.map((shoe) => (
//             <li key={shoe.id}>
//               <SingleShoe shoe={shoe} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
// }

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
