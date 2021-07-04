import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

export const QuantityButton = props => {
  const shoe = props.shoe
  console.log('this is props.shoe', shoe)
  //const [quantity, setQuantity] = useState(1)

  const handleAddClick = () => {
    if (shoe.inventory > shoe.quantity) shoe.quantity = shoe.quantity + 1
  }

  const handleSubtractClick = () => {
    if (shoe.quantity >= 1) shoe.quantity = shoe.quantity - 1
  }

  return (
    <div className="quantity-button-container">
      <p>Quantity in cart: {shoe.quantity}</p>
      <Button
        variant="outline-info"
        value="add"
        onClick={() => handleAddClick()}
        // shoe.inventory > shoe.quantity && shoe.quantity + 1}
      >
        Add
      </Button>
      <Button
        variant="outline-info"
        value="decrease"
        onClick={() => handleSubtractClick()}
        // onClick={() => 1 <= shoe.quantity && shoe.quantity - 1}
      >
        Subtract
      </Button>
    </div>
  )
}
