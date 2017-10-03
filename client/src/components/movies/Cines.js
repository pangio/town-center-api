import React, { Component } from 'react'
import MovieBadge from './MovieBadge'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import SliderArrowPrev from '../layout/SliderArrowPrev'
import SliderArrowNext from '../layout/SliderArrowNext'
import { Button, Modal } from 'react-bootstrap'

class Cines extends Component {
    constructor(props) {
    super(props)
    this.state = {
        settings: {
          height: 800,
          autoplay: false,
          arrows: true,
          centerMode: true,
          dots: false,
          infinite: true,
          pauseOnHover: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SliderArrowNext />,
          prevArrow: <SliderArrowPrev />,
          responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          }]
        },
        isLoading: false,
        movies: []
    }
  }

  componentWillMount() {
    console.log('fetching all Movies...')
    this.fetchAllMovies()
  }

  fetchAllMovies = () => {
    this.setState({isLoading: true})
    fetch('/api/cines')
      .then(response => response.json())
      .then(response => {
        this.setState({ movies: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isLoaded() {
    return this.state.movies !== []
  }

  render() {
    return (
      <div className='center page-container cines'>
        <h2 className='background cines'><span>¿Vamos a cine?</span></h2>

        <div className='green-line-wrapper'>
          <div className='row header-container'>
            <div className='col-md-6 header-container-l pull-left'>
              <div className='row' style={{padding:0}}>
                <img className='img-responsive header-donde-img' alt=''
                  src='https://s3.amazonaws.com/towncenterweb/assets/img_donde.png' />
              </div>
              <div className='row' style={{padding:0}}>
                <h2 className='cines green-header'><span>¿Vamos a cine?</span></h2>
              </div>
            </div>
            <div className='col-md-6 header-container-r header-main-img'>
              <img className='img-responsive' alt=''
                  src='https://s3.amazonaws.com/towncenterweb/assets/headerphone-cine.png' />
            </div>
          </div>
        </div>

        { this.props.children }
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
          <div className='movies-container center' style={{paddingTop: 50}}>
            <Slider {...this.state.settings}>
              { 
                this.state.movies.map((movie, i) => {
                  return movie.web_image_url !== undefined ? 
                    (<div key={i} ><MovieBadge movie={movie} /></div>) : null
                })
               }
            </Slider>
          </div>
        }
      </div>
    )
  }
}

export default Cines
