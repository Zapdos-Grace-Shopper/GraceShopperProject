const getShoePrice = props => {
  const price = props.shoe.price
  return price / 100
}

export default getShoePrice
