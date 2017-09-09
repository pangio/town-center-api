import React from 'react'
import ImgCache from '../layout/ImgCache'

class RestoMapBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/restaurantes/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    return (
	<div className='row'>
	<div className='col-xs-12'>
		<div className='badge resto-map-badge col-xs-6 float-none'>
			<div style={margin0}>
				<img className='img-responsive col-xs-6 padding' alt=''
					src='https://s3.amazonaws.com/towncenterweb/restaurantes/ic_haagendazs.png' />
	    	</div>
			<div>
				<div className='col-xs-5 store-sm-txt padding'>
					<strong>{this.props.resto.name}</strong>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v badge-location'>
					<ImgCache
						classNames={'badge-location-img'}
						src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>{this.props.resto.status} {this.props.resto.hours}</span>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v badge-location'>
					<ImgCache
						classNames={'badge-location-img'}
						src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>{this.props.resto.url}</span>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v badge-location'>
					<ImgCache
						classNames={'badge-location-img'}
						src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray'>{this.props.resto.local}</span>
		    	</div>
	    	</div>
    	</div>

		<div className='badge resto-badge col-xs-6 float-none'>
			<ImgCache
				classNames={'img-responsive col-xs-12 resto-map-img'}
				styles={padding1}
				src='https://s3.amazonaws.com/towncenterweb/tiendas/map/map_example.png' />
    	</div>
	</div>
	</div>
    )
  }
}

export default RestoMapBadge
