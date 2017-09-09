import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MovieBadge from './MovieBadge'
import '../../main.css';

class SliderMovies extends React.Component {
    constructor(props) {
    super(props);
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
          speed: 500
        },
    }
  }

  render() {
    return (
        <div>
            <Slider {...this.state.settings}>
              <div>
                {
                  this.props.moviesList.map((movie, i) => {
                    return (
                      <MovieBadge movie={movie} key={i} />
                    )
                  })
                }
              </div>
            </Slider>
      </div>
    )
  }
}

export default SliderMovies
