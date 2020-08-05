import React from 'react'
import {useSelector} from 'react-redux'

export const Orders = () => {
  const orders = useSelector(state => state.orders)
  return <div>{orders}</div>
}
