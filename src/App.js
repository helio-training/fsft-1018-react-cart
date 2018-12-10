import React, { Component, Fragment } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Products />
        <Cart />
      </Fragment>
    )
  }
}

export default App
