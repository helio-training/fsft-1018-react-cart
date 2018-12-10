import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'


const ALL_PRODUCTS_QUERY = gql`
  query {
    allProducts {
      id
      name
      price
    }
  }
`

const Product = styled.div`
  border: 1px solid #666;
  padding: 6px;
  margin: 6px;
`
const AddToCartButton = styled.button`
  border: 1px solid darkgrey;
  padding: 3px 9px;
  font-weight: 600;
  background: #cdcdcd;
`

const AddToCart = props => (
  <AddToCartButton { ...props }>Add to Cart</AddToCartButton>
)

export default () => (
  <Fragment>
    <h1>Products</h1>
    <Query query={ ALL_PRODUCTS_QUERY }>
      { ({ loading, error, data }) => {
        if (loading) return 'Loading ...'
        if (error) return `Error ... ${ error }`
        
        return data.allProducts.map(({ id, name, price }) => (
          <Product key={ id }>
            <div>{ name }</div>
            <div>{ price }</div>
            <div>
              <AddToCart />
            </div>
          </Product>
        ))
      } }
    </Query>
  </Fragment>
)
