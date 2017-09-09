import React, { Component } from 'react'
import StoreList from './StoreList'
import _ from 'underscore'

class Tiendas extends Component {
    constructor(props) {
    super(props)
      this.state = {
        stores: [],
    }
    this.fetchAllStores = this.fetchAllStores.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Stores...')
    this.fetchAllStores()
  }

  fetchAllStores() {
    fetch('/api/tiendas')
      .then(response => response.json())
      .then(response => {
        this.setState({ stores: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
    return this.state.stores !== []
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background'><span>¡Compras!</span></h2>

        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-tiendas.png' />

        { this.props.children }
    		{
          this.isLoaded() &&
          <StoreList storeList={_.filter(this.state.stores, function(s) {
            return s.category === 'store'
          })} />
        }
      </div>
    )
  }
}

export default Tiendas
