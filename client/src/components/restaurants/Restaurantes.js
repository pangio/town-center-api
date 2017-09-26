import React, { Component } from 'react'
import RestoList from './RestoList'
import _ from 'underscore'
import { Button, Modal } from 'react-bootstrap'

class Restaurantes extends Component {
    constructor(props) {
    super(props)
      this.state = {
        restaurants: [],
        isLoading: false
    }
  }

  componentWillMount() {
    console.log('fetching all Restaurants...')
    this.fetchAllRestaurants()
  }

  fetchAllRestaurants = () => {
    this.setState({isLoading: true})
    fetch('/api/restaurantes')
      .then(response => response.json())
      .then(response => {
        this.setState({ restaurants: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isLoaded() {
    return this.state.restaurants !== []
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background restaurantes'><span>¡Quiero ir a comer!</span></h2>

        <div className='row page-container header-container'>
          <div className='col-md-6'>
            <div className='row'>
              <img className='img-responsive header-donde-img' alt=''
                src='https://s3.amazonaws.com/towncenterweb/assets/img_donde.png' />
            </div>
            <div className='row'>
              <h2 className='restaurantes green-header'><span>¿Vamos a comer?</span></h2>
            </div>
          </div>

          <div className='col-md-6 header-main-img'>
            <img className='img-responsive' alt=''
                src='https://s3.amazonaws.com/towncenterweb/assets/headerphone-resto.png' />
          </div>
        </div>

        {
          this.state.isLoading &&
          <Modal.Dialog>
            <Modal.Body>
              <i className='fa fa-refresh fa-spin'></i>
            </Modal.Body>
          </Modal.Dialog>
        }
        { this.props.children }
        {
          this.isLoaded() &&
          <RestoList restoList={_.filter(this.state.restaurants, function(r) {
            return r.type === 'restaurant' || r.type === 'coffee'
          })} />
        }
      </div>
    )
  }
}
export default Restaurantes
