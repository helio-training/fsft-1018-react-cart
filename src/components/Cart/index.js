import React, { Fragment, createContext } from 'react'
import { compose, withState } from 'recompose'


export const CartContext = createContext({
  items: [],
})

const enhance = compose(
  withState('items', 'setItems', []),
)

export default enhance(props => {
  console.log(props)
  return (
    <Fragment>
      <h1>Cart</h1>
    </Fragment>
  )
})
