import React, { Component } from 'react'
import MovieBadge from './MovieBadge'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import SliderArrowPrev from '../layout/SliderArrowPrev'
import SliderArrowNext from '../layout/SliderArrowNext'

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
        movies: []
    }
    this.fetchAllMovies = this.fetchAllMovies.bind(this)
  }

  componentWillMount() {
    console.log('fetching all Movies...')
    this.fetchAllMovies()
  }

  fetchAllMovies() {
    fetch('/api/cines')
      .then(response => response.json())
      .then(response => {
        this.setState({ movies: JSON.parse(response.data) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isLoaded() {
    return this.state.movies !== []
  }

  render() {
    return (
      <div className='center page-container'>
        <h2 className='background'><span>¿Vamos a cine?</span></h2>
        <img className="img-responsive padding-bottom" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-cine.png' />

        { this.props.children }
        { 
          this.isLoaded() &&
          <div style={{paddingTop: 50}}>
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
