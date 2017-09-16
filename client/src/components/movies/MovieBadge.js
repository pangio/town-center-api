import React from 'react';

class MovieBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/peliculas/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    const minHeight = { minHeight:40 }
    return (
		<div className='badge movie-badge'>
			<div className='row' style={margin0}>
				<img className='img-responsive col-xs-12 movie-badge-img' alt=''
					style={padding1}
					src={s3url + this.props.movie.web_image_url} />
	    	</div>
			<div className='row' style={margin0}>
				<div className='col-xs-12 movie-sm-txt'>
					<p className='center padding-v' style={minHeight}><strong>{this.props.movie.movie}</strong></p>
					<p className='center' style={minHeight}>{this.props.movie.hours}</p>
					<br />
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 center padding-v badge-location'>
			        <span className='lightgray'>{this.props.movie.screen} - {this.props.movie.language}</span>
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default MovieBadge
