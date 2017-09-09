import React from 'react';

class MovieBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/peliculas/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    return (
		<div className='badge resto-badge'>
			<div className='row' style={margin0}>
				<img className='img-responsive col-xs-12 resto-badge-img' alt=''
					style={padding1}
					src={s3url + this.props.movie.web_image_url} />
	    	</div>
			<div className='row' style={margin0}>
				<div className='col-xs-12 store-sm-txt'>
					<p className='center padding-v'><strong>{this.props.movie.movie}</strong></p>
					<p className='center'>{this.props.movie.hours}</p>
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
