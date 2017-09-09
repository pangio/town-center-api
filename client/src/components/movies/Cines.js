import React, { Component } from 'react'
import MoviesList from './MoviesList'
import _ from 'underscore'

class Cines extends Component {
    constructor(props) {
    super(props)
      this.state = {
        movies: [],
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
        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-cine.png' />

        { this.props.children }
        {
          this.isLoaded() &&
          <MoviesList moviesList={_.filter(this.state.movies, function(m) {
            return m.web_image_url !== undefined
          })} />
        }
      </div>
    )
  }
}

export default Cines
