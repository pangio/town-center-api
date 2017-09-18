import React from 'react'
import NavLink from '../NavLink'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../../main.css'
import ImgCache from './ImgCache'
import SliderArrowPrev from './SliderArrowPrev'
import SliderArrowNext from './SliderArrowNext'

class SliderStores extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        settings: {
          autoplay: false,
          arrows: true,
          centerMode: true,
          dots: false,
          infinite: true,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          nextArrow: <SliderArrowNext />,
          prevArrow: <SliderArrowPrev />
        },
    }
  }

  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/home/'

    return (
      <div>
        <Slider {...this.state.settings}>
          <div className="center">
            <NavLink to="/tiendas" >
              <ImgCache classNames={'img-responsive slider-store-img'}
                        src={s3url + 'ic_samsung.png'} />
            </NavLink>
          </div>
          <div className="center">
            <NavLink to="/tiendas" >
              <ImgCache classNames={'img-responsive slider-store-img'}
                        src={s3url + 'ic_puma.png'} />
            </NavLink>
          </div>
          <div className="center">
            <NavLink to="/tiendas" >
              <ImgCache classNames={'img-responsive slider-store-img'}
                        src={s3url + 'ic_pandora.png'} />
            </NavLink>
          </div>
        </Slider>
      </div>
    )
  }
}

export default SliderStores
