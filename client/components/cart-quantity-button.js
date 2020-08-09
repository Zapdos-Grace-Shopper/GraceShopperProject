import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

export const QuantityButton = props => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="quantity-button-container">
      <p>Quantity in cart: {quantity}</p>
      <Button
        variant="outline-info"
        value="add"
        onClick={() => props.inventory > quantity && setQuantity(quantity + 1)}
      >
        Add
      </Button>
      <Button
        variant="outline-info"
        value="decrease"
        onClick={() => 1 <= quantity && setQuantity(quantity - 1)}
      >
        Subtract
      </Button>
    </div>
  )
}
