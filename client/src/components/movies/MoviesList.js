import React from 'react'
import SliderMovies from './SliderMovies'
import _ from 'underscore'

class MoviesList extends React.Component {
  render() {
	let moviesOrderedByDate = _.sortBy(this.props.moviesList, 'date').reverse()

    return (
      <div className='row center'>
        <SliderMovies moviesList={moviesOrderedByDate} />
      </div>
    )
  }
}

export default MoviesList