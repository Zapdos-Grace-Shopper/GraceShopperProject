import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

export const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1)
  const [isEmpty, setEmpty] = useState(false)

  useEffect(
    () => {
      if (quantity <= 0) {
        setEmpty(true)
      } else {
        setEmpty(false)
      }
    },
    [quantity]
  )

  return (
    <div className="quantity-button-container">
      <p>Quantity: {quantity}</p>
      <Button
        variant="outline-info"
        value="add"
        onClick={() => setQuantity(quantity + 1)}
      >
        Add
      </Button>
      <Button
        variant="outline-info"
        value="decrease"
        disabled={isEmpty}
        onClick={!isEmpty ? () => setQuantity(quantity - 1) : null}
      >
        Subtract
      </Button>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({

// })
