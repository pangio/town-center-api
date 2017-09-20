import React, { Component } from 'react'
import StoreList from './StoreList'
import _ from 'underscore'
import { Button, Modal } from 'react-bootstrap'

class Tiendas extends Component {
    constructor(props) {
    super(props)
      this.state = {
        stores: [],
        isLoading: false
    }
    this.fetchAllStores = this.fetchAllStores.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Stores...')
    this.fetchAllStores()
  }

  fetchAllStores() {
    this.setState({isLoading: true})
    fetch('/api/tiendas')
      .then(response => response.json())
      .then(response => {
        this.setState({ stores: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isLoaded() {
    return this.state.stores !== []
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background tiendas'><span>¡Compras!</span></h2>

        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-tiendas.png' />

        { this.props.children }
        {
          this.state.isLoading &&
          <Modal.Dialog>
            <Modal.Body>
              <i className='fa fa-refresh fa-spin'></i>
            </Modal.Body>
          </Modal.Dialog>
        }
    		{
          this.isLoaded() &&
          <StoreList storeList={_.filter(this.state.stores, function(s) {
            return s.type === 'store'
          })} />
        }
      </div>
    )
  }
}

export default Tiendas
