import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

export const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1)

  // useEffect(() => {
  //   function handleClick(value){
  //     if (type === 'increase') {
  //       this.setQuantity()
  //     }
  //   }
  //   console.log(`Quantity: ${quantity}`);
  // }, [quantity])

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
        onClick={() => setQuantity(quantity - 1)}
      >
        Subtract
      </Button>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({

// })
