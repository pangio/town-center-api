import React from 'react'
import ImgCache from '../layout/ImgCache'

class RestoMapBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const margin0 = { margin:0 }
    const widthMap = { width:521 }
    return (
	<div className='row'>
	<div className='col-xs-12'>
		<div className='badge store-map-badge col-xs-6 float-none'>
			<div className='row' style={margin0}>
				<ImgCache classNames={'img-responsive col-xs-6 padding margin-left-25-p'}
					src='https://s3.amazonaws.com/towncenterweb/restaurantes/ic_haagendazs.png' />
	    	</div>
			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v-20 badge-location roboto20'>
					<ImgCache
						classNames={'badge-location-img'}
						src={assetsurl + 'ic_time.png'} />
			        <span className='lightgray'>{this.props.resto.status} {this.props.resto.hours}</span>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v-20 badge-location roboto20'>
					<ImgCache
						classNames={'badge-location-img'}
						src={assetsurl + 'ic_info.png'} />
			        <a href={this.props.resto.url} className='lightgray'>{this.props.resto.url}</a>
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 padding-v-40 badge-location roboto20'>
					<ImgCache
						classNames={'badge-location-img'}
						src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray bold'>{this.props.resto.local}</span>
		    	</div>
	    	</div>
    	</div>

		<div className='badge col-xs-6 float-none' style={widthMap}>
			<ImgCache
				classNames={'img-responsive col-xs-12 resto-map-img'}
				src= { s3url + 'mapas/' + this.props.resto.map_url }/>
    	</div>
	</div>
	</div>
    )
  }
}

export default RestoMapBadge
