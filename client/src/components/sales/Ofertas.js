import React, { Component } from 'react';
import SalesList from './SalesList'
import _ from 'underscore'

class Ofertas extends Component {
    constructor(props) {
    super(props)
      this.state = {
        sales: [],
    }
    this.fetchAllSales = this.fetchAllSales.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Sales...')
    this.fetchAllSales()
  }

  fetchAllSales() {
    fetch('/api/ofertas')
      .then(response => response.json())
      .then(response => {
        this.setState({ sales: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
    return this.state.sales !== []
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background'><span>¡Las Mejores Ofertas!</span></h2>
        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-ofertas.png' />

        { this.props.children }
        {
          this.isLoaded() &&
          <div style={{paddingTop: 50}}>
            <SalesList salesList={_.filter(this.state.sales, function(s) {
              return s.image_url !== undefined
            })} />
          </div>
        }
      </div>
    )
  }
}

export default Ofertas;
