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
    this.fetchAllRestaurants = this.fetchAllRestaurants.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Restaurants...')
    this.fetchAllRestaurants()
  }

  fetchAllRestaurants() {
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
        <h2 className='background'><span>¡Quiero ir a comer!</span></h2>

        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-resto.png' />

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
