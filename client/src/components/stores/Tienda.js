import React from 'react'
import StoreMapBadge from './StoreMapBadge'
import { Button, Modal } from 'react-bootstrap'

class Tienda extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        store: undefined,
        isLoading: false
    }
    this.fetchStore = this.fetchStore.bind(this)
  }

  componentDidMount() {
    this.fetchStore()
  }

  componentWillReceiveProps(nextProps) {
    this.fetchStore(nextProps.params.id)
  }

  fetchStore(id = this.props.params.id) {
    console.log('fetching Store...')
    this.setState({isLoading: true})
    fetch('/api/tiendas/'+ id)
      .then(response => response.json())
      .then(response => {
        this.setState({ store: response.data.Item })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isLoaded() {
  	return this.state.store !== undefined
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
        <StoreMapBadge store = {this.state.store} />
      }
    </div>
    )
  }
}

export default Tienda
