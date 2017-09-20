import React from 'react'
import '../../main.css'
// import NavLink from '../NavLink'
// import ImgCache from './ImgCache'
import { Carousel, Item, Button, Modal } from 'react-bootstrap'
import _ from 'underscore'

class SliderStores extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        stores: [],
        isLoading: false
    }
  }

  componentWillMount() {
    console.log('fetching all Stores For Home Slider...')
    this.fetchAllStoresForHomeSlider()
  }

  fetchAllStoresForHomeSlider = () => {
    this.setState({isLoading: true})
    fetch('/api/tiendas')
      .then(response => response.json())
      .then(response => {
        let responseJson = JSON.parse(response.data)
        responseJson = _.filter(responseJson, function(s) {
            return s.show_home === 'true' && s.home_image_url !== undefined
          })
        this.setState({ stores: responseJson })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/home/'
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
          !this.state.isLoading &&
          <Carousel>
            {
              this.state.stores.map((store, i) => {
                return (
                  <Carousel.Item key={i}>
                    <a href='/tiendas'><img src={s3url + store.home_image_url} /></a>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        }
      </div>
    )
  }
}

export default SliderStores
