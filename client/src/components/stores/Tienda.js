import React from 'react'
import StoreMapBadge from './StoreMapBadge'

class Tienda extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        store: undefined
    }
    this.fetchStore = this.fetchStore.bind(this)
  }

  componentDidMount() {
    this.fetchStore()
  }

  componentWillReceiveProps(nextProps) {
    this.fetchStore(nextProps.params.id)
  }

  fetchStore(storeId) {
    console.log('fetching Store...')
    let id = storeId ? storeId : this.props.params.id
    fetch('/api/tiendas/'+ id)
      .then(response => response.json())
      .then(response => {
        this.setState({ store: response.data.Item })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
  	return this.state.store !== undefined
  }

  render() {
    return (
      this.isLoaded() &&
      <StoreMapBadge store = {this.state.store} />
    )
  }
}

export default Tienda
