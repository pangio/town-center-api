import React from 'react'
import RestoMapBadge from './RestoMapBadge'
import NavLink from '../NavLink'

class Restaurant extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        restaurant: undefined
    }
    this.fetchRestaurant = this.fetchRestaurant.bind(this)
  }

  componentWillMount() {
    console.log('fetching Restaurant...')
    this.fetchRestaurant()
  }

  fetchRestaurant() {
  	let id = this.props.params.id
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
          <NavLink to={`/restaurantes/${this.state.restaurant.name}`}>
              <RestoMapBadge resto = {this.state.restaurant} />
          </NavLink>
    )
  }
}

export default Restaurant
