import React from 'react'
import NavLink from '../NavLink'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../../main.css'
import _ from 'underscore'
import ImgCache from './ImgCache'
import SliderArrowPrev from './SliderArrowPrev'
import SliderArrowNext from './SliderArrowNext'
import { Button, Modal } from 'react-bootstrap'

class SliderOffers extends React.Component {
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
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 500,
          nextArrow: <SliderArrowNext />,
          prevArrow: <SliderArrowPrev />,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          }]
        },
        sales: [],
        isLoading: false
    }
  }

  componentWillMount() {
    console.log('fetching all Sales For Home Slider...')
    this.fetchAllSalesForHomeSlider()
  }

  fetchAllSalesForHomeSlider = () => {
    // fetch('/ofertas/semana')
    this.setState({isLoading: true})
    fetch('/api/ofertas')
      .then(response => response.json())
      .then(response => {
        let responseJson = JSON.parse(response.data)
        responseJson = _.filter(responseJson, function(s) {
            return s.image_url !== undefined
          })
        this.setState({ sales: responseJson })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isLoaded() {
    return this.state.sales !== []
  }

  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/ofertas/'

    return (
      <div className='ofertas'>
        {
          this.state.isLoading &&
          <Modal.Dialog>
            <Modal.Body>
              <i className='fa fa-refresh fa-spin'></i>
            </Modal.Body>
          </Modal.Dialog>
        }

        <Slider {...this.state.settings}>
          <div className="center">
            <NavLink to="/ofertas" >
              <ImgCache classNames={'img-responsive slider-offer-img'}
                        src={s3url + 'of1.png'} />
            </NavLink>
          </div>
          <div className="center">
            <NavLink to="/ofertas" >
              <ImgCache classNames={'img-responsive slider-offer-img'}
                        src={s3url + 'of2.png'} />
            </NavLink>
          </div>
          <div className="center">
            <NavLink to="/ofertas" >
              <ImgCache classNames={'img-responsive slider-offer-img'}
                        src={s3url + 'of3.png'} />
            </NavLink>
          </div>
          <div className="center">
            <NavLink to="/ofertas" >
              <ImgCache classNames={'img-responsive slider-offer-img'}
                        src={s3url + 'of4.png'} />
            </NavLink>
          </div>
          <div className="center">
            <NavLink to="/ofertas" >
              <ImgCache classNames={'img-responsive slider-offer-img'}
                        src={s3url + 'of5.png'} />
            </NavLink>
          </div>
        </Slider>
      </div>
    )
  }
}

export default SliderOffers
