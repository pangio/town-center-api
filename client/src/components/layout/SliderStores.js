import React from 'react'
import '../../main.css'
// import NavLink from '../NavLink'
// import ImgCache from './ImgCache'
import { Carousel, Item } from 'react-bootstrap'

class SliderStores extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/home/'

    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <a href='/tiendas'><img src={s3url + 'ic_pandora.png'} /></a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='/tiendas'><img src={s3url + 'ic_puma.png'} /></a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='/tiendas'><img src={s3url + 'ic_samsung.png'} /></a>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default SliderStores
