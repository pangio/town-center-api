import React from 'react'
import RestoMapBadge from './RestoMapBadge'

class Restaurant extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        restaurant: undefined
    }
    this.fetchRestaurant = this.fetchRestaurant.bind(this)
  }

  componentDidMount() {
    console.log('fetching Restaurant...')
    this.fetchRestaurant()
  }

  componentWillUpdate(prevProps, prevState) {
    if (this.state.restaurant && this.state.restaurant.local !== this.props.params.id) {
      console.log('fetching Restaurant...')
      this.fetchRestaurant(this.props.params.id)
    }
  }

  fetchRestaurant(restoId) {
    let id = restoId ? restoId : this.props.params.id
    fetch('/api/restaurantes/'+ id)
      .then(response => response.json())
      .then(response => {
        this.setState({ restaurant: response.data.Item })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
    return this.state.restaurant !== undefined
  }

  render() {
    return (
    	this.isLoaded() &&
              <RestoMapBadge resto = {this.state.restaurant} />
    )
  }
}

export default Restaurant
