import React from 'react'
import RestoMapBadge from './RestoMapBadge'
import { Button, Modal } from 'react-bootstrap'

class Restaurant extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        restaurant: undefined,
        isLoading: false
    }
  }

  componentDidMount() {
    this.fetchRestaurant()
  }

  componentWillReceiveProps(nextProps) {
    this.fetchRestaurant(nextProps.params.id)
  }

  fetchRestaurant = (id = this.props.params.id) => {
    console.log('fetching Restaurant...')
    this.setState({isLoading: true})
    fetch('/api/restaurantes/'+ id)
      .then(response => response.json())
      .then(response => {
        this.setState({ restaurant: response.data.Item })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isLoaded() {
    return this.state.restaurant !== undefined
  }

  render() {
    return (
      <div>
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
        <RestoMapBadge resto = {this.state.restaurant} />
      }
    </div>
    )
  }
}

export default Restaurant
