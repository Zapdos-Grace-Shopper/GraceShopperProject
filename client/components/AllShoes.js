// import React from 'react'
// import {connect} from 'react-redux'
// import {fetchShoes} from '../store/shoes'
// import SingleShoe from './single-shoe'

// export class AllShoes extends React.Component {
//   componentDidMount() {
//     this.props.getAllShoes()
//   }

//   render() {
//     const {shoes} = this.props
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
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     shoes: state.shoes,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllShoes: () => dispatch(fetchShoes()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AllShoes)
